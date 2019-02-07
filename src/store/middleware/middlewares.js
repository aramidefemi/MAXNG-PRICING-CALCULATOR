import axios from "axios";
function checkIsSet(value) {
  if (value != null) {
    return value;
  } else {
    alert("Please fill al forms accurately");
    return;
  }
}
export default store => next => action => {
  var state = store.getState();

  switch (action.type) {
    case "UPDATE_SEARCH":
      store.dispatch({
        type: "TOGGLE_MAP",
        payload: false
      });
      return next(action);
      break;
    case "RUN_RESULTS":
      store.dispatch({
        type: "SHOW_RESULT_MODAL"
      });

      var origin = state.search.origin;
      var destination = state.search.destination;
      var params = {
        origin: {
          lat: checkIsSet(origin.lat),
          lng: checkIsSet(origin.lng)
        },
        destination: {
          lat: checkIsSet(destination.lat),
          lng: checkIsSet(destination.lng)
        },
        service_id: state.search.service_id
      };
      axios
        .post("https://sandbox.max.ng/v1/pricings/estimate", params)
        .then(res => {
          console.log(res);
          res = res.data;
          if (res.status == "success") {
            action["payload"] = res.data;
            return next(action);
          } else {
            alert("error");
          }
        })
        .catch(err => {
          console.log(err.response);
          alert(err.response.data.message);
        });

    default:
      return next(action);
  }
};
