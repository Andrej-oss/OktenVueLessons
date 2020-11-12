import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueDynamicForms from '@asigloo/vue-dynamic-forms';
import {store} from "./store";


Vue.config.productionTip = false;
export const eventBus = new Vue();

Vue.filter('toLowerCase', (value) => value.toLowerCase());
Vue.directive('heightLight', {
  bind(el, binding, vNode){
    console.log(el, binding, vNode)
    console.log(binding.expression);
    const color = binding.value;
    el.style.backgroundColor = color;
  }
})
 Vue.use(BootstrapVue);
 Vue.use(IconsPlugin);
 Vue.use(VueDynamicForms)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
