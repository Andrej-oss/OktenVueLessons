import {actions} from "./actions";
import {state} from "./state";
import {mutations} from "./mutations";

const namespaced = true;
export const todoModule = "todo";

export const todo = {
    namespaced,
    state,
    actions,
    mutations
};
