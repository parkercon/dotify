<template>
<div style="margin-top: 10%; padding-bottom: 15vh">
    <b-container style="margin-top: 10%;">
      <div>
      <v-selectize v-model="selectedArtists" :options="artistsOnly" placeholder="Select Artist ID" multiple/>
      <v-selectize v-model="selectedSongs" :options="songsOnly" placeholder="Select Song ID" multiple/>
      </div>
    </b-container>
   <b-table striped hover :items="artistsAndSongs" :fields="fields">
     <template #cell(edit)="data">
       <span v-if="!data.rowSelected"></span>
       <b-button variant="transparent"><b-icon icon="pencil"></b-icon></b-button> 
        <b-button @click="deleteArtistAndSong(data.item)" class="delete" variant="transparent"><b-icon icon="trash"></b-icon></b-button>
     </template>
   </b-table>
  <b-modal ref=ArtistAndSongModal hide-footer>
  <b-form @submit="onSubmit">
    <b-form-group>
      <b-form-input
        v-model="artistId"
        placeholder="Enter Artist Id"
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
  <b-button @click="onShowModal" style="margin-top: 10px;" variant="success">Add Artist and Song Relationship</b-button>
</div>
</template>

<script>
import mockData from '../data/mockData.json'
import axios from "axios";
import { ref, onMounted } from '@vue/composition-api'
export default {
  name: 'ArtistsAndSongs',
  setup () {
    const ArtistAndSongModal = ref()
    const artistId = ref('')
    const songId = ref('')
    const artistsOnly = [...new Set(mockData.ArtistsAndSongs.map(aS => aS.artistId))].sort()
    const songsOnly = [...new Set(mockData.ArtistsAndSongs.map(aS => aS.songId))].sort()
    const allArtistsAndSongs = ref()
    const getArtistsAndSongs = async() => {
      try {
        const response = await axios.get("/api/artistsAndSongs");
        console.log('responsedata', response.data)
        allArtistsAndSongs.value = response.data;
      } catch (err) {
        console.log(err);
      }
    }
    onMounted(() => {
      getArtistsAndSongs()
    })

    const onShowModal = () => {
      ArtistAndSongModal.value.show()
    }

    const onSubmit = (event) => {
      event.preventDefault()
      addArtistAndSong()
    }

    const addArtistAndSong = async() => {
      try {
        await axios.post("/api/artistsAndSongs", {
          artistId: artistId.value,
          userId: songId.value
        });
        artistId.value = ''
        songId.value = ''
      } catch (err) {
        console.log(err);
      }
      getArtistsAndSongs()
    }

    const deleteArtistAndSong = async(id) => {
      try {
        await axios.delete(`/api/artistsAndSongs/${id.artistId}/${id.songId}`)
      } catch (err) {
        console.log(err)
      }
      getArtistsAndSongs()
    }

    return {
      deleteArtistAndSong,
      onSubmit,
      onShowModal,
      songId,
      artistId,
      ArtistAndSongModal,
      artistsAndSongs: allArtistsAndSongs,
      artistsOnly,
      songsOnly,
      selectedSongs: [],
      selectedArtists: [],
      fields: [
        { key: "artistId", label: "artistId"},
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