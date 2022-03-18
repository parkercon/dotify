<template>
<div style="margin-top: 10%; padding-bottom: 15vh">
    <b-container style="margin-top: 10%;">
      <b-button @click="onShowModal" style="margin-top: 10px; margin-bottom: 10px;" variant="success">Add Playlist and Song Relationship</b-button>
    </b-container>
   <b-table striped hover :items="playlistsAndSongs" :fields="fields">
     <template #cell(edit)="data">
       <span v-if="!data.rowSelected"></span>
       <b-button variant="transparent"><b-icon icon="pencil"></b-icon></b-button> 
        <b-button @click="deletePlaylistAndSong(data.item)" class="delete" variant="transparent"><b-icon icon="trash"></b-icon></b-button>
     </template>
   </b-table>
  <b-modal ref=PlaylistAndSongModal hide-footer>
  <b-form @submit="onSubmit">
    <b-form-group>
      <b-form-input
        v-model="playlistId"
        placeholder="Enter Playlist Id"
        required
      ></b-form-input>
        <b-form-input
        v-model="songId"
        placeholder="Enter Song Id"
        required
      ></b-form-input>
    </b-form-group>
  <b-button type="submit" variant="primary">Submit</b-button>
  </b-form>
  </b-modal>
</div>
</template>

<script>
import mockData from '../data/mockData.json'
import axios from "axios";
import { ref, onMounted } from '@vue/composition-api'
export default {
  name: 'PlaylistsAndSongs',
  setup () {
    const PlaylistAndSongModal = ref()
    const playlistId = ref('')
    const songId = ref('')
    const playlists = [...new Set(mockData.PlaylistsAndSongs.map(pS => pS.playlistId))].sort()
    const songs = [...new Set(mockData.PlaylistsAndSongs.map(pS => pS.songId))].sort()
    const allPlaylistsAndSongs = ref()
    const getPlaylistsAndSongs = async() => {
      try {
        const response = await axios.get("/api/playlistsAndSongs");
        console.log('responsedata', response.data)
        allPlaylistsAndSongs.value = response.data;
      } catch (err) {
        console.log(err);
      }
    }
    onMounted(() => {
      getPlaylistsAndSongs()
    })

    const onShowModal = () => {
      PlaylistAndSongModal.value.show()
    }

    const onSubmit = (event) => {
      event.preventDefault()
      addPlaylistAndSong()
    }

    const addPlaylistAndSong = async() => {
      try {
        await axios.post("/api/playlistsAndSongs", {
          playlistId: playlistId.value,
          songId: songId.value
        });
          playlistId.value = ''
          songId.value = ''
      } catch (err) {
        console.log(err);
      }
      getPlaylistsAndSongs()
    }

    const deletePlaylistAndSong = async(id) => {
      try {
        await axios.delete(`/api/playlistsAndSongs/${id.playlistId}/${id.songId}`)
      } catch (err) {
        console.log(err)
      }
      getPlaylistsAndSongs()
    }

    return {
      deletePlaylistAndSong,
      onSubmit,
      onShowModal,
      songId,
      playlistId,
      PlaylistAndSongModal,
      playlistsAndSongs: allPlaylistsAndSongs,
      selectedSongs: [],
      selectedPlaylists: [],
      playlists, 
      songs,
      fields: [
        { key: "playlistId", label: "playlistId"},
        { key: "songId", label: "songId" },
        { key: 'edit', label: ''}
      ]
    }
  }
}
</script>

<style scoped>
.btn:focus {
  box-shadow: none;
}
.btn:hover {
  color: #17a2b8!important
}

.btn.delete:hover {
  color: red!important
}
</style>