<template>
<div style="margin-top: 10%; padding-bottom: 15vh">
  <b-container style="margin-top: 10%;">
  <b-button @click="onShowModal" style="margin-top: 10px; margin-bottom: 10px" variant="success">Add Playlist</b-button>
    <v-selectize v-model="selectedNames" :options="playlistNames" placeholder="Select Playlist Name"/>
  </b-container>
   <b-table striped hover :items="playlists" :fields="fields">
     <template #cell(edit)="data">
       <span v-if="!data.rowSelected"></span>
       <b-button v-model="data.rowSelected" v-on:click="onUpdate(data.index)" variant="transparent"><b-icon icon="pencil"></b-icon></b-button> 
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
    <b-modal ref=updateModal hide-footer>
    Update Playlist
      <b-form @submit="onUpdateSubmit">
        <b-form-group>
          <b-form-input
            :placeholder="updateName"
            v-model="updateName"
            required
          ></b-form-input>
          <b-form-input
            :placeholder="updateUserId.toString()"
            v-model="updateUserId"
            required
          ></b-form-input>
          <b-form-input
            :placeholder="updateDate"
            v-model="updateDate"
            type="date"
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
import { ref, onMounted, watch } from '@vue/composition-api'
export default {
  name: 'Playlists',
  setup () {
    const PlaylistModal = ref()
    const playlistName = ref('')
    const userId = ref('')
    const playlistDate = ref('')
    const selectedNames = ref([])
    const userIds = mockData.Playlists.map(p => p.userId)
    const playlistDates = mockData.Playlists.map(p => p.playlistDate)
    const allPlaylists = ref()
    const updateName = ref('')
    const updateModal = ref()
    const updateUserId = ref('')
    const updateDate = ref()
    const updateId = ref()
    const playlistNames = ref([])

    const getPlaylistsByName = async() => {
      try {
        const response = await axios.get(
          `/api/playlists/${selectedNames.value}`
        )
        allPlaylists.value = allPlaylists.value.filter(u => response.data.some(u2 => u.playlistId == u2.playlistId))
      } catch (err) {
        console.log(err)
      }
    }

    watch(selectedNames, () => {
      getPlaylistsByName()
      if (selectedNames.value == null) {
        getPlaylists()
      }
    })

    const getPlaylists = async() => {
      try {
        const response = await axios.get("/api/playlists");
        console.log('responsedata', response.data)
        allPlaylists.value = response.data;
        for (let i = 0; i<allPlaylists.value.length; i++) {
          const formattedDate = new Date(allPlaylists.value[i].playlistDate).toLocaleDateString(
          'en-us'
          );
          allPlaylists.value[i].playlistDate = formattedDate
        }
        playlistNames.value = allPlaylists.value.map(p => p.playlistName)
      } catch (err) {
        console.log(err);
      }
    }
    onMounted(() => {
      getPlaylists()
    })
    const onUpdateSubmit = (e) => {
      e.preventDefault()
      updatePlaylist()
    }

    const updatePlaylist = async() => {
      try {
        await axios.put(
          `/api/playlists/${allPlaylists.value[updateId.value].playlistId}`,
          {
            playlistName: updateName.value,
            playlistDate: updateDate.value,
            userId: updateUserId.value
          }
        )
      } catch (err) {
        console.log(err)
      }
      getPlaylists()
    }

    const onUpdate = (idx) => {
      updateId.value = idx
      updateName.value = allPlaylists.value[idx].playlistName
      updateDate.value = allPlaylists.value[idx].playlistDate
      updateUserId.value = allPlaylists.value[idx].userId
      updateModal.value.show()
    }

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
      selectedNames, 
      selectedUserIds: [],
      selecteDates: [],
      playlistNames, 
      userIds,
      updateDate,
      updateName, 
      updateUserId,
      updateModal, 
      playlistDates,
      onUpdateSubmit,
      updateId,
      onUpdate,
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