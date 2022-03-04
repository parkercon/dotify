<template>
<div style="margin-top: 10%; padding-bottom: 15vh">
    <b-container style="margin-top: 10%;">
      <v-selectize v-model="selectedArtists" :options="artistNames" placeholder="Select Artist Name" multiple/>
    </b-container>
   <b-table striped hover :items="artists" :fields="fields">
     <template #cell(edit)="data">
       <span v-if="!data.rowSelected"></span>
       <b-button variant="transparent"><b-icon icon="pencil"></b-icon></b-button> 
        <b-button class="delete" variant="transparent"><b-icon icon="trash"></b-icon></b-button>
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
    <b-button @click="onShowModal" style="margin-top: 10px;" variant="success">Add Artist</b-button>
</div>
</template>

<script>
import mockData from '../data/mockData.json'
import axios from "axios";
import { ref, onMounted } from '@vue/composition-api'
export default {
  name: 'Artists',
  setup () {
    const ArtistModal = ref()
    const artistName = ref('')
    const artistNames = mockData.Artists.map(a => a.artistName)
    const allArtists = ref()
    const getArtists = async() => {
      try {
        const response = await axios.get("/api/artists");
        console.log('responsedata', response.data)
        allArtists.value = response.data;
      } catch (err) {
        console.log(err);
      }
    }
    onMounted(() => {
      getArtists()
    })

    const onShowModal = () => {
      ArtistModal.value.show()
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
    }
    return {
      onShowModal,
      onSubmit,
      artistName,
      ArtistModal,
      selectedArtists: [],
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
</style>