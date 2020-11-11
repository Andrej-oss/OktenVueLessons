import VueRouter from "vue-router";
import Vue from 'vue';
import {routes} from "./vuerouter";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes
})
