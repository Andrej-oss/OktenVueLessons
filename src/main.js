import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueDynamicForms from '@asigloo/vue-dynamic-forms';
import '../src/vue_resources/index'
import {router} from "./router";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueDynamicForms);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
