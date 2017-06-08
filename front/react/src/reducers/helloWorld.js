import { HELLO_WORLD } from './../actions/const';


let defaultState = {
    message: 'Hello'
};


export default (state = defaultState, action) => {
    switch (action.type) {
        case HELLO_WORLD:
            return Object.assign({}, state, { message: 'Hello, World!' });
        default:
            return state;
    }
};
