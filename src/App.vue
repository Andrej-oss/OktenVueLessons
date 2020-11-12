<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!--<ToDo/>-->
<!--    <p ref="ref">{{tittle}}</p>-->
<!--    <b-button @click="changeTittle">Update</b-button>-->
<!--    <b-button @click="destroy">Destroy</b-button>-->
<!--    <FrameWorkList/>-->
    <Result />
    <Counter />
  </div>
</template>

<script>

//import ToDo from "./components/ToDo";

//import FrameWorkList from "./components/frameworks/FrameWorkList";

import Result from "./components/Result";
import Counter from "./components/Counter";

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //ToDo
   // FrameWorkList
    Result,
    Counter
  },
  data(){
    return{
      tittle: 'Hello world',
      counter: 0
    }
  },
 /* methods: {
    changeTittle(){
      this.tittle = "fuck you world"
    },
    destroy(){
      this.$destroy();
    }
  },
    beforeCreate() {
      console.log('before create');
      console.log(this.tittle);
    },
    created() {
      console.log('created');
      console.log(this.tittle);
    },
  beforeMount() {
    console.log('before mount');
    console.log(this.tittle);
    console.log(this.$refs.ref);
  },
  mounted() {
    console.log('Mounted');
    console.log(this.tittle);
    console.log(this.$refs.ref)
  },
  updated() {
    console.log('Updated');
    console.log(this.$refs.ref);
    console.log(this.tittle);
  },
  beforeUpdate() {
    console.log('before update');
    console.log(this.$refs.ref)
    console.log(this.tittle);
  },
  destroyed() {
    console.log('Destroyed')
  },
  beforeDestroy() {
    console.log('before destroy');
  }*/
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
