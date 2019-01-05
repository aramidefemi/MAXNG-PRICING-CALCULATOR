export default store => next => action => {
  var state = store.getState();
  switch (action.type) {
    case "INCREASE_STEP":
      if (state[action.claim.state].form[action.claim.name]) {
        return next(action);
      } else {
        store.dispatch({
          type: "SHOW_ALERT",
          payload: `${action.claim.name} is empty`
        });
      }
      break;
    case "UPDATE_FORM":


      if (action.payload["start_date"] && action.payload["end_date"]) {

              var date1 = new Date(action.payload["start_date"]);
              var date2 = new Date(action.payload["end_date"]);
              var timeDiff = Math.abs(date2.getTime() - date1.getTime());
              var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
              action.payload["duration"] = `${diffDays} days`;

              // store.dispatch({
              //     type: "SHOW_ALERT",
              //     payload: `Your campaign would run for ${diffDays} days`
              // });

              return next(action);
            
      }
      // if (action.payload["budget"]){
      //   const formatter = new Intl.NumberFormat('en-US', {
      //     style: 'decimal',
      //     currency: 'NGN',
      //     minimumFractionDigits: 2
      //   })

      //   if(isNaN(action.payload["budget"])){
      //     store.dispatch({
      //       type: "SHOW_ALERT",
      //       payload: `Please enter a numeric value`
      //     });
      //   }else{
      //     action.payload["budget"] = formatter.format(action.payload["budget"]);
      //   } 
      //   return next(action);
      // }

      return next(action);

    default:
      return next(action);
  }

  //        var date1 = new Date("7/13/2010");
  // var date2 = new Date("12/15/2010");
  // var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  // var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  // alert(diffDays);
  // console.log('dispatching', action)
  // let result = next(action)
  // console.log('next state', store.getState())
  // return result
};
