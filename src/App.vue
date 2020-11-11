<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<!--    <ToDo/>-->
    <div>
      <label>Email</label>
    <input v-model="user.email" placeholder="email" type="text"/>
    </div>
    <div>
      <label>Password</label>
    <input v-model="user.password" placeholder="password" type="text"/>
    </div>
    <button class="btn-primary" @click="onSave">Save</button>
    <button class="btn-primary" @click="onGet">Get Users</button>
    <ul >
      <li v-for="user in users" :key="user.id">
        {{user.email}} -- {{user.password}}
        <button class="btn-primary" @click="onDelete(user.id)">Delete user</button>
        <button class="btn-primary" @click="onUpdate(user.id)">Update</button>
      </li>
    </ul>
    <button @click="onLogin">login</button>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link class="nav-link" to="/" active-class="active" exact>Main</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/users" active-class="active">Users</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

//import ToDo from "./components/ToDo";

import {Api} from "./components/api";

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //ToDo
  },
  data(){
    return{
     user:
    {
      email:'',
      password: ''
    },
      users: []
    }
  },
  methods:{
    async onSave(){
      await Api.Users.createUser(this.user);
     // this.$http.post('user.json', this.user)
    },
    async onGet(){
      const users = await  Api.Users.getUsers();
      console.log(users.body);
      Object.entries(users.body).forEach(([key, value]) =>this.users.push({...value, id: key}));

    },
     async onDelete(id){
      await Api.Users.deleteUser(id);
      this.users= [];
      await this.onGet();
    },
    async onUpdate(id){
      await Api.Users.updateUser(id, this.user);
      this.users= [];
      await this.onGet();
    },
    onLogin(){
      localStorage.setItem('token', 'jhghjgjhgjhgiuiuhio.jhiulgiuygutfygcffgxddx')
    }
  },
  async beforeMount() {
    await this.onGet();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
