export default (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      state[action.payload["path"]] = {
        address: action.payload["address"],
        lat: action.payload["lat"],
        lng: action.payload["lng"]
      };
      return {
        ...state
      };
    case "RUN_RESULTS":
      state["result"] = action.payload;
      return {
        ...state
      };

    case "SHOW_RESULT_MODAL":
      state["modal-show"] = true;
      return {
        ...state
      };
    case "HIDE_RESULT_MODAL":
      state["modal-show"] = false;
      return {
        ...state
      };
    default:
      return state;
  }
};
