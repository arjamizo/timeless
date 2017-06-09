import { FETCH_GALLERIES } from './../actions/const';


let defaultState = {
    galleries: []
};


export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_GALLERIES:
            return Object.assign({}, state, {galleries: action.galleries});
        default:
            return state;
    }
};
