<template>
<div>
  <b-container style="margin-top: 10%;">
    <b-input-group prepend="Search" class="mb-2">
      <b-form-input placeholder="Artist Name"></b-form-input>
    </b-input-group>
  </b-container>
  <b-container class="bv-example-row" style="background-color:floralwhite; outline:solid">
    <b-row style="border-bottom: 1px solid black;">
      <b-col style="font-weight:bold; border-right:1px solid black">Artist Id</b-col>
      <b-col style="font-weight:bold; border-right:1px solid black">Artist Name</b-col>
      <b-col style="font-weight:bold;">Edit Artist</b-col>
    </b-row>
    <b-row style="border-bottom: 1px solid black;" v-for="artist in artists" :key="artist.id">
      <b-col style="border-right:1px solid black">{{artist.artistId}}</b-col>
      <b-col style="border-right:1px solid black">{{artist.artistName}}</b-col>
      <b-col><b-button variant="transparent"><b-icon icon="pencil"></b-icon></b-button>  <b-button class="delete" variant="transparent"><b-icon icon="trash"></b-icon></b-button></b-col>
    </b-row>
  </b-container>
  <b-button style="margin-top: 10px;" variant="success">Add Artist</b-button>
</div>
</template>

<script>
import mockData from '../data/mockData.json'
export default {
  name: 'Artists',
  setup () {
    return {
      artists: mockData.Artists
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