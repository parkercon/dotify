<template>
<div style="margin-top: 10%; padding-bottom: 15vh">
    <b-container style="margin-top: 10%;">
    <b-button @click="onShowModal" style="margin-top: 10px; margin-bottom: 10px" variant="success">Add Artist</b-button>
      <v-selectize v-model="selectedArtists" :options="artistNames" placeholder="Select Artist Name"/>
    </b-container>
   <b-table striped hover primary-key="artists.artistId" :items="artists" :fields="fields">
     <template #cell(edit)="data">
       <b-button v-model="data.rowSelected" v-on:click="onUpdate(data.index)" v-if="!updateMode" variant="transparent"><b-icon icon="pencil"></b-icon></b-button> 
       <b-button  v-model="data.rowSelected" class="done" v-on:click="submitUpdate(data.index)" v-else-if="updateMode && !data.index" variant="transparent"><b-icon icon="check"></b-icon></b-button> 
        <b-button @click="deleteArtist(data.item.artistId)" class="delete" variant="transparent"><b-icon icon="trash"></b-icon></b-button>
     </template>
   </b-table>
    <b-modal ref=ArtistModal hide-footer>
      <b-form @submit="onSubmit">
        <b-form-group>
          <b-form-input
            v-model="artistName"
            placeholder="Enter Artist Name"
            required
          ></b-form-input>
        </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-modal>
    <b-modal ref=updateModal hide-footer>
    Update Artist
      <b-form @submit="onUpdateSubmit">
        <b-form-group>
          <b-form-input
            :placeholder="updateName"
            v-model="updateName"
            required
          ></b-form-input>
        </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-modal>
</div>
</template>

<script>
import axios from "axios";
import { ref, onMounted, watch } from '@vue/composition-api'
export default {
  name: 'Artists',
  setup () {
    const ArtistModal = ref()
    const updateId = ref()
    const updateName = ref('')
    const updateModal = ref()
    const artistName = ref('')
    const artistNames = ref([])
    const allArtists = ref()
    const selectedArtists = ref('')
    const updateMode = ref(false)

    const getArtistByName = async() => {
      try {
        const response = await axios.get(
          `/api/artists/${selectedArtists.value}`
        )
        allArtists.value = allArtists.value.filter(u => response.data.some(u2 => u.artistId == u2.artistId))
      } catch (err) {
        console.log(err)
      }
    }

    watch(selectedArtists, () => {
      getArtistByName()
      if (selectedArtists.value == null) {
        getArtists()
      }
    })
    const getArtists = async() => {
      try {
        const response = await axios.get("/api/artists");
        console.log('responsedata', response.data)
        allArtists.value = response.data;
      } catch (err) {
        console.log(err);
      }
      artistNames.value = allArtists.value.map(a => a.artistName)
    }
    onMounted(() => {
      getArtists()
    })

    const onUpdateSubmit = (e) => {
      e.preventDefault()
      console.log(updateName.value, allArtists.value[updateId.value].artistId)
      updateArtist()
    }

    const updateArtist = async() => {
      try {
        await axios.put(
          `/api/artists/${allArtists.value[updateId.value].artistId}`,
          {
            artistName: updateName.value
          }
        )
      } catch (err) {
        console.log(err)
      }
      getArtists()
    }

    const onShowModal = () => {
      ArtistModal.value.show()
    }

    const onUpdate = (idx) => {
      updateId.value = idx
      updateName.value = allArtists.value[idx].artistName
      updateModal.value.show()
    }

    const onSubmit = (event) => {
      event.preventDefault()
      addArtist()
    }

    const addArtist = async() => {
      try {
        await axios.post("/api/artists", {
          artistName: artistName.value
        });
        artistName.value = '';
      } catch (err) {
        console.log(err);
      }
      getArtists()
    }

    const toggleUpdate = (e) => {
      console.log(e)
      updateMode.value = !updateMode.value
    }

    const submitUpdate = (e) => {
      console.log(e)
      updateMode.value = !updateMode.value
    }
    const deleteArtist = async(id) => {
      try {
        await axios.delete(`/api/artists/${id}`)
      } catch (err) {
        console.log(err)
      }
      getArtists()
    }

    return {
      deleteArtist,
      onShowModal,
      onSubmit,
      toggleUpdate,
      submitUpdate,
      updateMode,
      artistName,
      ArtistModal,
      onUpdate, 
      updateModal,
      updateId,
      updateName,
      onUpdateSubmit,
      selectedArtists,
      artistNames,
      artists: allArtists,
      fields: [
        { key: "artistId", label: "artistId"},
        { key: "artistName", label: "artistName" },
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
.btn.done:hover {
  color: greenyellow!important
}
</style>