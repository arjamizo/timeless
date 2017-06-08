import { HELLO_WORLD } from './const';


function createHelloWorldAction() {
    return {
        type: HELLO_WORLD
    };
}


module.exports.helloWorld = () => {
    return (dispatch) => {
        dispatch(createHelloWorldAction());
    };
};