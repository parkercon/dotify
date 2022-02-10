<template>
<div>
  <b-container style="margin-top: 10%;">
    <b-input-group prepend="Search" class="mb-2">
      <b-form-input placeholder="Password" type="password"></b-form-input>
      <b-form-input placeholder="User Name"></b-form-input>
      <b-form-input placeholder="User Last Name"></b-form-input>
      <b-form-input placeholder="User Email" type="email"></b-form-input>
      <b-form-input type="date"></b-form-input>
    </b-input-group>
  </b-container>
  <b-container class="bv-example-row" style="background-color:floralwhite; outline:solid">
    <b-row style="border-bottom: 1px solid black;">
      <b-col style="font-weight:bold; border-right:1px solid black">User Id</b-col>
      <b-col style="font-weight:bold; border-right:1px solid black">User Password</b-col>
      <b-col style="font-weight:bold; border-right:1px solid black">User Name</b-col>
      <b-col style="font-weight:bold; border-right:1px solid black">User Last Name</b-col>
      <b-col style="font-weight:bold; border-right:1px solid black">User Birthday</b-col>
      <b-col cols="2" style="font-weight:bold; border-right:1px solid black">User Email</b-col>
      <b-col style="font-weight:bold;">Edit User</b-col>
    </b-row>
    <b-row style="border-bottom: 1px solid black;" v-for="user in users" :key="user.id">
      <b-col style="border-right:1px solid black">{{user.userId}}</b-col>
      <b-col style="border-right:1px solid black">{{user.userPassword}}</b-col>
      <b-col style="border-right:1px solid black">{{user.userfName}}</b-col>
      <b-col style="border-right:1px solid black">{{user.userlName}}</b-col>
      <b-col style="border-right:1px solid black">{{user.userBirthday}}</b-col>
      <b-col cols="2" style="border-right:1px solid black">{{user.userEmail}}</b-col>
      <b-col><b-button variant="transparent"><b-icon icon="pencil"></b-icon></b-button>  <b-button class="delete" variant="transparent"><b-icon icon="trash"></b-icon></b-button></b-col>
    </b-row>
  </b-container>
  <b-button style="margin-top: 10px;" variant="success">Add User</b-button>
</div>
</template>

<script>
import mockData from '../data/mockData.json'
export default {
  name: 'Users',
  setup () {
    return {
      users: mockData.Users
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