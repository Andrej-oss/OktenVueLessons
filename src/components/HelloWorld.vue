<template>
<div >
  {{tittle}}
  {{name + tittle}}
  <p v-once>{{tittle}}</p>
  <p>{{seyHello()}}</p>
  <a v-bind:href="link">Google</a>
  <p v-html="html"></p>
  <button v-on:click="increase(2, $event)">click</button>
  <button v-on:click="increament">Increment</button>
  <button v-on:click="decrement">Decrement</button>
  <p>{{counter}}</p>
  <p>computedResult {{computedResult}}</p>
  <p v-on:mousemove="onChangeCoordinates">Coordinates: {{coordinateX}} / {{coordinateY}}
  <span v-on:mousemove="spot">Dead spot</span></p>
  <input type="text" v-on:keyup.enter="alertMe" v-model="name"/>
  <div class="demo" @click="attached = !attached"></div>
  <div class="demo"></div>
  <div class="demo" :class="{red:attached, yellow:!attached}"></div>
  <input type="text" v-model="colorClass"/>
  <div class="demo" :class="colorClass"></div>
  <div class="demo" :style="{backgroundColor: colorClass}"></div>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

data(){
    return{
      tittle: 'Hello world',
      name: 'Joe',
      link: 'http://google.com',
      html: '<p>say hello again</p>',
      counter: 0,
      coordinateX: 0,
      coordinateY: 0,
      attached: false,
      colorClass:''
    }
}
,
  computed: {
computedResult(){
  return this.counter > 5 ?  'greater then 5' : 'lower then 5';
    }
  },

  methods:{
    seyHello(){
      return this.tittle = 'Buy World';
    },
    increase(step, event){
      console.log(this.counter, event)
     this.counter += step;
    },
    onChangeCoordinates($event){
      this.coordinateX = $event.clientX;
      this.coordinateY = $event.clientY;
      console.log(this.coordinateX,this.coordinateY)
    },
    spot($event){
      $event.stopPropagation();
    },
    alertMe(){
      alert("dsfdsfs")
    },
    increament(){
      this.counter++;
    },
    decrement(){
      this.counter--;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo{
width: 100px;
height: 100px;
  background-color: darkcyan;
  display: inline-block;
  margin:10px;
}
  .red{
    background-color: red;

  }
.yellow{
  background-color: yellow;
}
.green{
  background-color: green;

}
</style>
