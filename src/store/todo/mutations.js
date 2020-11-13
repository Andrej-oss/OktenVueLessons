import {DELETE_TODO, GET_ALL_TODO, SAVE_TODO, UPDATE_TODO} from "./types";

export const mutations = {
    [SAVE_TODO]: (state, payload) => {
        console.log(payload);
        return state.todo.push(payload)
    },
    [GET_ALL_TODO]: (state, payload) => {
        const todoArray = [];
        Object.entries(payload.body).forEach(([key, value]) => todoArray.push({id: key, ...value}));
        state.todo = todoArray
        console.log(state.todo)
    },
    [DELETE_TODO]: (state, payload) => {
        // const todoArray = [];
        // Object.entries(payload.body).forEach(([key, value]) => todoArray.push({id: key, ...value}));
        // state.todo = todoArray
        state.todo.splice(payload, 1);
    },
    [UPDATE_TODO]: (state, payload) => {
        //const number = state.todo.findIndex(todo => todo.id === payload.id);
       // console.log(number);
       // console.log(state.todo[number])
        //return state.todo[payload.i] = {id: payload.id, tittle: payload.body.tittle, name: payload.body.name, completed: payload.body.completed}
        //return state.todo;
        console.log(state.todo[payload.i])
             state.todo.splice(payload.i, 1, {id: payload.id, tittle: payload.body.tittle, name: payload.body.name, completed: payload.body.completed})
    }
};
