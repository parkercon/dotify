<template>
<div style="margin-top: 10%">
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
    <b-button style="margin-top: 10px;" variant="success">Add Artist</b-button>
</div>
</template>

<script>
import mockData from '../data/mockData.json'
export default {
  name: 'Artists',
  setup () {
    const artistNames = mockData.Artists.map(a => a.artistName)
    return {
      selectedArtists: [],
      artistNames,
      artists: mockData.Artists,
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