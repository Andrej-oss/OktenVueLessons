import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.root = 'https://todotask3.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
    request.headers.set('Authorization', localStorage.getItem('token'));
    next()
});
//for refreshing token
/*Vue.http.interceptors.push((response, next) => {
    if(response.error === 401){
        request.headers.set('Authorization', localStorage.getItem('refresh'))
    }
    localStorage.clear()
    next()
})*/
