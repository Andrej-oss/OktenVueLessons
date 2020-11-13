import {
    ACTIONS_DELETE_TODO,
    ACTIONS_GET_ALL_TODO,
    ACTIONS_SAVE_TODO,
    ACTIONS_UPDATE_TODO,
    DELETE_TODO,
    GET_ALL_TODO, UPDATE_TODO
} from "./types";
import {Api} from "../../components/api";

export const actions = {
[ACTIONS_SAVE_TODO]: async ({commit}, payload) =>{
    console.log(payload);
    await Api.toDo.createTodo(payload);
     const todo = await Api.toDo.getAllTodo();
     commit(GET_ALL_TODO, todo);
    console.log(payload)
},
[ACTIONS_UPDATE_TODO]: async ({commit}, payload) => {

    await Api.toDo.upDateTodo(payload.id, payload.body);
    const todo = await Api.toDo.getAllTodo();
    commit(UPDATE_TODO, todo);
},
[ACTIONS_GET_ALL_TODO]: async ({commit}) => {
    const payload = await Api.toDo.getAllTodo();
    commit(GET_ALL_TODO, payload)
},
[ACTIONS_DELETE_TODO]: async ({commit}, i) => {
    console.log(i)
    await Api.toDo.deleteTodo(i);
     const payload = await Api.toDo.getAllTodo();
     commit(DELETE_TODO, payload)
}
};
