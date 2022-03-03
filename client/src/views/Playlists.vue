<template>
<div style="margin-top: 10%; padding-bottom: 15vh">
  <b-container style="margin-top: 10%;">
    <v-selectize v-model="selectedNames" :options="playlistNames" placeholder="Select Playlist Name" multiple/>
    <v-selectize v-model="selectedUserIds" :options="userIds" placeholder="Select User ID" multiple/>
    <v-selectize v-model="selecteDates" :options="playlistDates" placeholder="Select Playlist Dates" multiple/>
  </b-container>
   <b-table striped hover :items="playlists" :fields="fields">
     <template #cell(edit)="data">
       <span v-if="!data.rowSelected"></span>
       <b-button variant="transparent"><b-icon icon="pencil"></b-icon></b-button> 
        <b-button class="delete" variant="transparent"><b-icon icon="trash"></b-icon></b-button>
     </template>
   </b-table>
    <b-button style="margin-top: 10px;" variant="success">Add Playlist</b-button>
</div>
</template>

<script>
import mockData from '../data/mockData.json'
import axios from "axios";
import { ref, onMounted } from '@vue/composition-api'
export default {
  name: 'Playlists',
  setup () {
    const playlistNames = mockData.Playlists.map(p => p.playlistName)
    const userIds = mockData.Playlists.map(p => p.userId)
    const playlistDates = mockData.Playlists.map(p => p.playlistDate)
    const allPlaylists = ref()
    const getPlaylists = async() => {
      try {
        const response = await axios.get("/api/playlists");
        console.log('responsedata', response.data)
        allPlaylists.value = response.data;
      } catch (err) {
        console.log(err);
      }
    }
    onMounted(() => {
      getPlaylists()
    })
    return {
      playlists: allPlaylists,
      selectedNames: [], 
      selectedUserIds: [],
      selecteDates: [],
      playlistNames, 
      userIds, 
      playlistDates,
      fields: [
        { key: "playlistId", label: "playlistId"},
        { key: "playlistName", label: "playlistName" },
        { key: "userId", label: "userId"},
        { key: "playlistDate", label: "playlistDate" },
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