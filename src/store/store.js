import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/reducers";
import middlewares from "./middleware/middlewares";

const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

export default function configureStore() {
  return createStore(
    rootReducer,
    {
      search: {
        "modal-show": false,
        result: null,
        origin: {
          address: "", //lagos nigeria
          lat: "", //6.436259,
          lng: "" //3.450753
        },
        destination: {
          address: "", //lagos nigeria
          lat: "", //6.434324,
          lng: "" //3.476765
        },
        service_id: "e6f9a0b7-8f03-431f-a3da-7fbc914bbb72"
      },
      map: {
        "modal-show": false,
        address: "",
        lat: "", //6.436259,
        lng: "", //3.450753
        path: "" //origin || destination
      }
    },
    applyMiddleware(thunk, logger, middlewares)
  );
}
