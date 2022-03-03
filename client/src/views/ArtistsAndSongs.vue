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
        <b-button class="delete" variant="transparent"><b-icon icon="trash"></b-icon></b-button>
     </template>
   </b-table>
    <b-button style="margin-top: 10px;" variant="success">Add Artists & Songs</b-button>
</div>
</template>

<script>
import mockData from '../data/mockData.json'
import axios from "axios";
import { ref, onMounted } from '@vue/composition-api'
export default {
  name: 'ArtistsAndSongs',
  setup () {
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
    return {
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