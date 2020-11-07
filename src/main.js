import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueDynamicForms from '@asigloo/vue-dynamic-forms';

export const eventBus = new Vue();
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueDynamicForms);


new Vue({
  render: h => h(App),
}).$mount('#app')
