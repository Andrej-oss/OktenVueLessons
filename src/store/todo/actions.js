import {
    ACTIONS_DELETE_TODO,
    ACTIONS_GET_ALL_TODO,
    ACTIONS_SAVE_TODO,
    ACTIONS_UPDATE_TODO,
    DELETE_TODO,
    GET_ALL_TODO, SAVE_TODO, UPDATE_TODO
} from "./types";
import {Api} from "../../components/api";

export const actions = {
[ACTIONS_SAVE_TODO]: async ({commit}, payload) =>{
    console.log(payload)
    try {
        await Api.toDo.createTodo(payload);
        commit(SAVE_TODO, payload);
    }
    catch (e) {
        console.log(e)
    }
    // console.log(payload);
    // await Api.toDo.createTodo(payload);
    //  const todo = await Api.toDo.getAllTodo();
    //  commit(GET_ALL_TODO, todo);
    // console.log(payload)
},
[ACTIONS_UPDATE_TODO]: async ({commit}, payload) => {
try{
    await Api.toDo.upDateTodo(payload.id, payload.body);
    console.log(payload)
    commit(UPDATE_TODO, payload);
}
catch (e) {
    console.log(e)
}
    // await Api.toDo.upDateTodo(payload.id, payload.body);
    // const todo = await Api.toDo.getAllTodo();
    // commit(UPDATE_TODO, todo);
},
[ACTIONS_GET_ALL_TODO]: async ({commit}) => {
    try{
        const payload = await Api.toDo.getAllTodo();
        commit(GET_ALL_TODO, payload)
    }
    catch(e){
        console.log(e)
    }
},
[ACTIONS_DELETE_TODO]: async ({commit}, payload) => {
    console.log(payload)
    try{
        await Api.toDo.deleteTodo(payload.id);
        commit(DELETE_TODO, payload.i)
    }
    catch(e){
        console.log(e)
    }
    // await Api.toDo.deleteTodo(i);
    //  const payload = await Api.toDo.getAllTodo();
    //  commit(DELETE_TODO, payload)
}
};
