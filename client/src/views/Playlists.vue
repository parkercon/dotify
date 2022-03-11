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
        <b-button @click="deletePlaylist(data.item.playlistId)" class="delete" variant="transparent"><b-icon icon="trash"></b-icon></b-button>
     </template>
   </b-table>
  <b-modal ref=PlaylistModal hide-footer>
  <b-form @submit="onSubmit">
    <b-form-group>
      <b-form-input
        v-model="playlistName"
        placeholder="Enter Playlist Name"
        required
      ></b-form-input>
        <b-form-input
        v-model="userId"
        placeholder="Enter User Id"
        required
      ></b-form-input>
      <b-form-input
        v-model="playlistDate"
        placeholder="Enter Playlist Date"
        type="date"
        required
      ></b-form-input>
    </b-form-group>
  <b-button type="submit" variant="primary">Submit</b-button>
  </b-form>
  </b-modal>
  <b-button @click="onShowModal" style="margin-top: 10px;" variant="success">Add Playlist</b-button>
</div>
</template>

<script>
import mockData from '../data/mockData.json'
import axios from "axios";
import { ref, onMounted } from '@vue/composition-api'
export default {
  name: 'Playlists',
  setup () {
    const PlaylistModal = ref()
    const playlistName = ref('')
    const userId = ref('')
    const playlistDate = ref('')
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

    const onShowModal = () => {
      PlaylistModal.value.show()
    }

    const onSubmit = (event) => {
      event.preventDefault()
      addPlaylist()
    }

    const addPlaylist = async() => {
      try {
        await axios.post("/api/playlists", {
          playlistName: playlistName.value,
          userId: userId.value,
          playlistDate: playlistDate.value
        });
          playlistName.value = ''
          userId.value = ''
          playlistDate.value = ''
      } catch (err) {
        console.log(err);
      }
      getPlaylists()
    }

    const deletePlaylist = async(id) => {
      try {
        await axios.delete(`/api/playlists/${id}`)
      } catch (err) {
        console.log(err)
      }
      getPlaylists()
    }

    return {
      deletePlaylist,
      onSubmit,
      onShowModal,
      playlistDate,
      userId,
      playlistName,
      PlaylistModal,
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