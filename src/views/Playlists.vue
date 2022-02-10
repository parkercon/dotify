<template>
<div>
  <b-container style="margin-top: 10%;">
    <b-input-group prepend="Search" class="mb-2">
      <b-form-input placeholder="Playlist Name"></b-form-input>
      <b-form-input placeholder="User Id" type="number"></b-form-input>
      <b-form-input type="date"></b-form-input>
    </b-input-group>
  </b-container>
  <b-container class="bv-example-row" style="background-color:floralwhite; outline:solid">
    <b-row style="border-bottom: 1px solid black;">
      <b-col style="font-weight:bold; border-right:1px solid black">Playlist Id</b-col>
      <b-col style="font-weight:bold; border-right:1px solid black">Playlist Name</b-col>
      <b-col style="font-weight:bold; border-right:1px solid black">User Id</b-col>
      <b-col style="font-weight:bold; border-right:1px solid black">Playlist Date</b-col>
      <b-col style="font-weight:bold;">Edit Playlist</b-col>
    </b-row>
    <b-row style="border-bottom: 1px solid black;" v-for="playlist in playlists" :key="playlist.id">
      <b-col style="border-right:1px solid black">{{playlist.playlistId}}</b-col>
      <b-col style="border-right:1px solid black">{{playlist.playlistName}}</b-col>
      <b-col style="border-right:1px solid black">{{playlist.userId}}</b-col>
      <b-col style="border-right:1px solid black">{{playlist.playlistDate}}</b-col>
      <b-col><b-button variant="transparent"><b-icon icon="pencil"></b-icon></b-button>  <b-button class="delete" variant="transparent"><b-icon icon="trash"></b-icon></b-button></b-col>
    </b-row>
  </b-container>
  <b-button style="margin-top: 10px;" variant="success">Add Playlist</b-button>
</div>
</template>

<script>
import mockData from '../data/mockData.json'
export default {
  name: 'Playlists',
  setup () {
    return {
      playlists: mockData.Playlists
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