<template>
<div style="margin-top: 10%">
    <b-input-group prepend="Search" class="mb-2">
      <b-form-input placeholder="Password" type="password"></b-form-input>
      <b-form-input placeholder="User First Name"></b-form-input>
      <b-form-input placeholder="User Last Name"></b-form-input>
      <b-form-input placeholder="User Email" type="email"></b-form-input>
      <b-form-input type="date"></b-form-input>
    </b-input-group>
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
    return {
      users: mockData.Users,
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