import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.root = "https://todotask3.firebaseio.com/"
