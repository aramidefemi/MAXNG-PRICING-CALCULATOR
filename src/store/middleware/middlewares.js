export default store => next => action => {
  var state = store.getState();
  
  switch (action.type) {
    case "INCREASE_STEP":
     
      break;
    default:
      return next(action);
  }

};
