<template>
<div style="margin-top: 10%; padding-bottom: 15vh">
  <b-container style="margin-top: 10%;">
    <b-button @click="onShowModal" style="margin-top: 10px; margin-bottom: 10px" variant="success">Add User</b-button>
    <v-selectize v-model="selectedEmails" :options="emails" placeholder="Select Emails"/>
  </b-container>
   <b-table striped hover :items="users" :fields="fields">
     <template #cell(edit)="data">
       <span v-if="!data.rowSelected"></span>
       <b-button v-model="data.rowSelected" v-on:click="onUpdate(data.index)" variant="transparent"><b-icon icon="pencil"></b-icon></b-button> 
        <b-button @click="deleteUser(data.item.userId)" class="delete" variant="transparent"><b-icon icon="trash"></b-icon></b-button>
     </template>
   </b-table>
    <b-modal ref=UserModal hide-footer>
    <b-form @submit="onSubmit">
      <b-form-group>
        <b-form-input
          v-model="userPassword"
          placeholder="Enter User Password"
          type="password"
          required
        ></b-form-input>
          <b-form-input
          v-model="userfName"
          placeholder="Enter User FirstName"
          required
        ></b-form-input>
          <b-form-input
          v-model="userlName"
          placeholder="Enter User LastName"
          required
        ></b-form-input>
          <b-form-input
          v-model="userBirthday"
          placeholder="Enter User Birthday"
          type="date"
          required
        ></b-form-input>
          <b-form-input
          v-model="userEmail"
          placeholder="Enter User Email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    </b-modal>
    <b-modal ref=updateModal hide-footer>
    Update User
      <b-form @submit="onUpdateSubmit">
        <b-form-group>
          <b-form-input
            :placeholder="updatePassword"
            v-model="updatePassword"
            required
          ></b-form-input>
          <b-form-input
            :placeholder="updatefName"
            v-model="updatefName"
            required
          ></b-form-input>
          <b-form-input
            :placeholder="updatelName"
            v-model="updatelName"
            required
          ></b-form-input>
          <b-form-input
            :placeholder="updateEmail"
            v-model="updateEmail"
            required
          ></b-form-input>
          <b-form-input
            :placeholder="updateDate"
            v-model="updateDate"
            type="date"
            required
          ></b-form-input>
        </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-modal>
</div>
</template>

<script>
import axios from "axios";
import { ref, onMounted, watch } from '@vue/composition-api'
export default {
  name: 'Users',
  setup () {
    const UserModal = ref()
    const userPassword = ref('')
    const userfName = ref('')
    const userlName = ref('')
    const userBirthday = ref('')
    const userEmail = ref('')
    const emails = ref([])
    const allUsers = ref()

    const updatefName = ref('')
    const updateModal = ref()
    const updatelName = ref('')
    const updateDate = ref()
    const updateEmail = ref()
    const updatePassword = ref()
    const updateId = ref()
    const selectedEmails = ref('')

    const onUpdateSubmit = (e) => {
      e.preventDefault()
      updateUser()
    }

    const getUserByEmail = async() => {
      try {
        const response = await axios.get(
          `/api/users/${selectedEmails.value}`
        )
        allUsers.value = allUsers.value.filter(u => response.data.some(u2 => u.userId == u2.userId))
      } catch (err) {
        console.log(err)
      }
    }

    watch(selectedEmails, () => {
      getUserByEmail()
      if (selectedEmails.value == null) {
        getUsers()
      }
    })

    const updateUser = async() => {
      try {
        await axios.put(
          `/api/users/${allUsers.value[updateId.value].userId}`,
          {
            userfName: updatefName.value,
            userlName: updatelName.value,
            userPassword: updatePassword.value,
            userBirthday: updateDate.value,
            userEmail: updateEmail.value
          }
        )
      } catch (err) {
        console.log(err)
      }
      getUsers()
    }

    const onUpdate = (idx) => {
      updateId.value = idx
      updatefName.value = allUsers.value[idx].userfName
      updatelName.value = allUsers.value[idx].userlName
      updateDate.value = allUsers.value[idx].userBirthday
      updatePassword.value = allUsers.value[idx].userPassword
      updateEmail.value = allUsers.value[idx].userEmail
      updateModal.value.show()
    }  

    const getUsers = async() => {
      try {
        const response = await axios.get("/api/users");
        console.log('responsedata', response.data)
        allUsers.value = response.data;
        for (let i = 0; i<allUsers.value.length; i++) {
          const formattedDate = new Date(allUsers.value[i].userBirthday).toLocaleDateString(
          'en-us'
          );
          allUsers.value[i].userBirthday = formattedDate
        }
        emails.value = allUsers.value.map(u => u.userEmail)
      } catch (err) {
        console.log(err)
      }
    }
    onMounted(() => {
      getUsers()
    })

    const onShowModal = () => {
      UserModal.value.show()
    }

    const onSubmit = (event) => {
      event.preventDefault()
      addUser()
    }

    const addUser = async() => {
      try {
        await axios.post("/api/users", {
          userPassword: userPassword.value,
          userfName: userfName.value,
          userlName: userlName.value,
          userBirthday: userBirthday.value,
          userEmail: userEmail.value
        });
          userPassword.value = ''
          userfName.value = ''
          userlName.value = ''
          userBirthday.value = ''
          userEmail.value = ''
      } catch (err) {
        console.log(err)
      }
      getUsers()
    }

    const deleteUser = async(id) => {
      try {
        await axios.delete(`/api/users/${id}`)
      } catch (err) {
        console.log(err)
      }
      getUsers()
    }

    return {
      deleteUser,
      onSubmit,
      onShowModal,
      UserModal,
      userPassword,
      userfName,
      userlName ,
      userBirthday,
      userEmail,
      onUpdateSubmit,
      updatefName,
      updatelName,
      updateDate,
      updateEmail,
      updatePassword,
      updateModal,
      onUpdate,
      users: allUsers,
      selectedEmails,
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