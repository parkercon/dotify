<template>
<b-container class="bv-example-row" style="margin-top: 10%; background-color:floralwhite; outline:solid">
  <b-row style="border-bottom: 1px solid black;">
    <b-col style="font-weight:bold; border-right:1px solid black">Song Id</b-col>
    <b-col style="font-weight:bold; border-right:1px solid black">Song Name</b-col>
    <b-col style="font-weight:bold;">Song Date</b-col>
  </b-row>
  <b-row style="border-bottom: 1px solid black;" v-for="song in songs" :key="song.id">
    <b-col style="border-right:1px solid black">{{song.songId}}</b-col>
    <b-col style="border-right:1px solid black">{{song.songName}}</b-col>
    <b-col>{{song.songDate}}</b-col>
  </b-row>
</b-container>
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

<style>

</style>