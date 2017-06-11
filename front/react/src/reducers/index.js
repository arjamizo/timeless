import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

import galleries from './galleries';


export default combineReducers({
  galleries: galleries,
  routing: routing
});