<template>
<div style="margin-top: 10%; padding-bottom: 15vh">
  <b-container style="margin-top: 10%;">
      <v-selectize v-model="selectedPasswords" :options="passwords" placeholder="Select Passwords" multiple/>
      <v-selectize v-model="selectedfNames" :options="fNames" placeholder="Select First Names" multiple/>
      <v-selectize v-model="selectedlNames" :options="lNames" placeholder="Select Last Names" multiple/>
      <v-selectize v-model="selectedBirthdays" :options="birthdays" placeholder="Select Birthdays" multiple/>
      <v-selectize v-model="selectedEmails" :options="emails" placeholder="Select Emails" multiple/>
  </b-container>
   <b-table striped hover :items="users" :fields="fields">
     <template #cell(edit)="data">
       <span v-if="!data.rowSelected"></span>
       <b-button variant="transparent"><b-icon icon="pencil"></b-icon></b-button> 
        <b-button class="delete" variant="transparent"><b-icon icon="trash"></b-icon></b-button>
     </template>
   </b-table>
    <b-button style="margin-top: 10px;" variant="success">Add User</b-button>
</div>
</template>

<script>
import mockData from '../data/mockData.json'
export default {
  name: 'Users',
  setup () {
    const passwords = mockData.Users.map(u => u.userPassword)
    const fNames = mockData.Users.map(u => u.userfName)
    const lNames = mockData.Users.map(u => u.userlName)
    const birthdays = mockData.Users.map(u => u.userBirthday)
    const emails = mockData.Users.map(u => u.userEmail)
    return {
      users: mockData.Users,
      selectedPasswords: [], 
      selectedfNames: [],
      selectedlNames: [],
      selectedBirthdays: [],
      selectedEmails: [],
      passwords, 
      fNames, 
      lNames, 
      birthdays, 
      emails,
      fields: [
        { key: "userId", label: "userId"},
        { key: "userPassword", label: "userPassword" },
        { key: "userfName", label: "userfName" },
        { key: "userlName", label: "userlName" },
        { key: "userBirthday", label: "userBirthday" },
        { key: "userEmail", label: "userEmail" },
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