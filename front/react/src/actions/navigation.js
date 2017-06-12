import { TOGGLE_NAVIGATION } from './const';


function createToggleNavigationAction() {
  return { type: TOGGLE_NAVIGATION };
}


module.exports.toggleNavigation = () => {
  return (dispatch) => {
    dispatch(createToggleNavigationAction())
  };
};
