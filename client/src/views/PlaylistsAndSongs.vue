<template>
<div style="margin-top: 10%; padding-bottom: 15vh">
    <b-container style="margin-top: 10%;">
      <v-selectize v-model="selectedPlaylists" :options="playlists" placeholder="Select Playlist ID" multiple/>
      <v-selectize v-model="selectedSongs" :options="songs" placeholder="Select Song ID" multiple/>
    </b-container>
   <b-table striped hover :items="playlistsAndSongs" :fields="fields">
     <template #cell(edit)="data">
       <span v-if="!data.rowSelected"></span>
       <b-button variant="transparent"><b-icon icon="pencil"></b-icon></b-button> 
        <b-button class="delete" variant="transparent"><b-icon icon="trash"></b-icon></b-button>
     </template>
   </b-table>
    <b-button style="margin-top: 10px;" variant="success">Add Playlists & Songs</b-button>
</div>
</template>

<script>
import mockData from '../data/mockData.json'
import axios from "axios";
import { ref, onMounted } from '@vue/composition-api'
export default {
  name: 'PlaylistsAndSongs',
  setup () {
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
    return {
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