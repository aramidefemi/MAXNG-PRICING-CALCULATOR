export default (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_MAP":
      return {
        "modal-show": action.payload
      };
    case "POP_MAP":
      return {
        "modal-show": true,
        path: action.payload
      };
    case "UPDATE_PARAMS":
      return {
        address: action.payload.address,
        lat: action.payload.lat,
        lng: action.payload.lng,
        "modal-show": state["modal-show"],
        path: state.path
      };
    default:
      return state;
  }
};
