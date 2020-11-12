import {DECREMENT, INCREMENT} from "./types";

export const mutations = {
[INCREMENT]: (state, payload) => state.counter += payload,
[DECREMENT]: (state, payload) => state.counter -= payload,
}
