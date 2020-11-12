import {DECREMENT, DECREMENT_ACTION, INCREMENT, INCREMENT_ACTION} from "./types";

export const actions = {
[INCREMENT_ACTION]: ({commit}, payload) => setTimeout(() => commit(INCREMENT, payload), 2000),
    [DECREMENT_ACTION]: ({commit}, payload) => setTimeout(() => commit(DECREMENT, payload), 3000),
}
