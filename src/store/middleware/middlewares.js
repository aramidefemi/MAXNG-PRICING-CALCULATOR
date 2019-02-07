export default store => next => action => {
  var state = store.getState();
  
  switch (action.type) {
    case "UPDATE_SEARCH'":
     	store.dispatch({
     		type: "TOGGLE_MAP",
      		payload: false
     	})
      break;
    default:
      return next(action);
  }

};
