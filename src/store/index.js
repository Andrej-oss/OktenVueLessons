import Vue from 'vue'
import Vuex from 'vuex'
import {todo, todoModule} from "./todo";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        [todoModule]: todo
    }
})
