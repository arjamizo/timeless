import { LOCATION_CHANGE } from 'react-router-redux';

import { TOGGLE_NAVIGATION } from '../actions/const';


let defaultState = {
  expanded: false
};


export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return Object.assign({}, state, {expanded: !state.expanded});
    case LOCATION_CHANGE:
      console.log("FOO BAR BAZ");
      return Object.assign({}, state, {expanded: false});
    default:
      return state;
  }
};