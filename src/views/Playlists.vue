<template>
<div style="margin-top: 10%">
  <b-container style="margin-top: 10%;">
    <b-input-group prepend="Search" class="mb-2">
      <b-form-input placeholder="Playlist Name"></b-form-input>
      <b-form-input placeholder="User Id" type="number"></b-form-input>
      <b-form-input type="date"></b-form-input>
    </b-input-group>
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
export default {
  name: 'Playlists',
  setup () {
    return {
      playlists: mockData.Playlists,
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