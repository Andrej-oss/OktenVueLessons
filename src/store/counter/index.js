import {getters} from '../counter/getters'
import {actions} from '../counter/actions'
import {mutations} from "./matations";
import {state} from '../counter/store'

const namespaced = true;
export const counterModule = 'counter';

export const counter = {
    namespaced,
    getters,
    mutations,
    actions,
    state
};
