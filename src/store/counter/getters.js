import {DOUBLE_COUNTER} from "./types";

export const getters = {
[DOUBLE_COUNTER]: state => state.counter * 2
};
