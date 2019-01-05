import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducers';
import alerts from './middleware/alerts';
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}
export default function configureStore() {
 return createStore(
  rootReducer,
  {
    onBoardingState: {
      step : 0,
      form : {},
      modal: {
        show : false,
        type: 'done'
      }
    },
    alert: {
      show:  false,
      details: null
    },
    searchState : {
      filter: {}
    },
    landingPageState : {
      step:  0
    }
  },
   applyMiddleware(thunk,logger,alerts)
 );
}