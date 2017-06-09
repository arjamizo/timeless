import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

import helloWorld from './helloWorld';
import galleries from './galleries';


export default combineReducers({
    helloWorld: helloWorld,
    galleries: galleries,
    routing: routing
});