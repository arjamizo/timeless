import { FETCH_GALLERIES } from './../actions/const';


let defaultState = [];


export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_GALLERIES:
            return action.galleries;
        default:
            return state;
    }
};
