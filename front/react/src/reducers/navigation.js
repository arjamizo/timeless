import { TOGGLE_NAVIGATION } from '../actions/const';


let defaultState = {
  expanded: false
};


export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return Object.assign({}, state, {expanded: !state.expanded});
    default:
      return state;
  }
};
