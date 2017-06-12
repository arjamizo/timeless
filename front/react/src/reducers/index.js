import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

import galleries from './galleries';
import navigation from './navigation';


export default combineReducers({
  galleries: galleries,
  navigation: navigation,
  routing: routing
});