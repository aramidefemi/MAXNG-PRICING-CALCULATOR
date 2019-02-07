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
        origin: {
          lat: '', //6.436259,
          lng: '' //3.450753
        },
        destination: {
          lat: '', //6.434324,
          lng: '' //3.476765
        },
        service_id: "e6f9a0b7-8f03-431f-a3da-7fbc914bbb72"
      },
      map : {
        'modal-show':  true,
         location: ''
      }
    },
    applyMiddleware(thunk, logger, middlewares)
  );
}
