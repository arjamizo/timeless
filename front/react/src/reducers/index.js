import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

import helloWorld from './helloWorld';


export default combineReducers({
    helloWorld: helloWorld,
    routing: routing
});