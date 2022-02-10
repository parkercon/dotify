<template>
<div>
  <b-container class="bv-example-row" style="margin-top: 10%; background-color:floralwhite; outline:solid">
    <b-row style="border-bottom: 1px solid black;">
      <b-col style="font-weight:bold; border-right:1px solid black">Song Id</b-col>
      <b-col style="font-weight:bold; border-right:1px solid black">Song Name</b-col>
      <b-col style="font-weight:bold; border-right:1px solid black">Song Date</b-col>
      <b-col style="font-weight:bold;">Edit Song</b-col>
    </b-row>
    <b-row style="border-bottom: 1px solid black;" v-for="song in songs" :key="song.id">
      <b-col style="border-right:1px solid black">{{song.songId}}</b-col>
      <b-col style="border-right:1px solid black">{{song.songName}}</b-col>
      <b-col style="border-right:1px solid black">{{song.songDate}}</b-col>
      <b-col><b-button variant="transparent"><b-icon icon="pencil"></b-icon></b-button>  <b-button class="delete" variant="transparent"><b-icon icon="trash"></b-icon></b-button></b-col>
    </b-row>
  </b-container>
  <b-button style="margin-top: 10px;" variant="success">Add Song</b-button>
</div>
</template>

<script>
import mockData from '../data/mockData.json'
export default {
  name: 'Songs',
  setup () {
    return {
      songs: mockData.Songs
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