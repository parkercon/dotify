<template>
<div style="margin-top: 10%; padding-bottom: 15vh">
  <b-container style="margin-top: 10%;">
      <v-selectize v-model="selectedNames" :options="names" placeholder="Select Song Names" multiple/>
      <v-selectize v-model="selectedDates" :options="dates" placeholder="Select Song Dates" multiple/>
  </b-container>
   <b-table striped hover :items="songs" :fields="fields">
     <template #cell(edit)="data">
       <span v-if="!data.rowSelected"></span>
       <b-button variant="transparent"><b-icon icon="pencil"></b-icon></b-button> 
        <b-button class="delete" variant="transparent"><b-icon icon="trash"></b-icon></b-button>
     </template>
   </b-table>
    <b-button style="margin-top: 10px;" variant="success">Add Song</b-button>
</div>
</template>

<script>
import mockData from '../data/mockData.json'
export default {
  name: 'Songs',
  setup () {
    const names = mockData.Songs.map(s => s.songName)
    const dates = mockData.Songs.map(s => s.songDate)
    return {
      songs: mockData.Songs,
      selectedNames: [],
      selectedDates: [],
      names, 
      dates,
      fields: [
        { key: "songId", label: "songId"},
        { key: "songName", label: "songName" },
        { key: "songDate", label: "songDate" },
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