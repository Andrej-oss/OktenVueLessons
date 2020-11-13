import {DELETE_TODO, GET_ALL_TODO, SAVE_TODO, UPDATE_TODO} from "./types";

export const mutations = {
[SAVE_TODO]:(state, payload) => state.todo.push(payload),
    [GET_ALL_TODO]: (state, payload) => {
    const todoArray = [];
        Object.entries(payload.body).forEach(([key, value]) => todoArray.push({id: key,...value}));
    state.todo = todoArray
        console.log(state.todo)
    },
    [DELETE_TODO]: (state, payload) => {
        const todoArray = [];
        Object.entries(payload.body).forEach(([key, value]) => todoArray.push({id: key,...value}));
        state.todo = todoArray
    },
[UPDATE_TODO]: (state, payload) => { const todoArray = [];
    Object.entries(payload.body).forEach(([key, value]) => todoArray.push({id: key,...value}));
    state.todo = todoArray}
};
