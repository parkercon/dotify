<template>
<div style="margin-top: 10%">
    <b-container style="margin-top: 10%;">
    <b-input-group prepend="Search" class="mb-2">
      <b-form-input placeholder="Playlist Id" type="number"></b-form-input>
      <b-form-input placeholder="Song Id" type="number"></b-form-input>
    </b-input-group>
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
export default {
  name: 'PlaylistsAndSongs',
  setup () {
    return {
      playlistsAndSongs: mockData.PlaylistsAndSongs,
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