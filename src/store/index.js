import Vuex from "vuex"
import Vue from 'vue'
import {counter, counterModule} from "./counter";

Vue.use(Vuex);
/*export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => state.counter * 2,
    },
    mutations:{
        increment: (state, payload) => state.counter+=payload,
        decrement: (state, payload) => state.counter-=payload
    },
    actions:{
       // incrementAction: context => console.log(context)
        incrementAction: ({commit}, payload) => setTimeout(() => commit('increment', payload), 1500),
        decrementAction: ({commit}, payload) => setTimeout(() => commit('decrement', payload), 2000)
    }
});*/
export const store = new Vuex.Store({
modules:{
[counterModule]:counter
}
});
