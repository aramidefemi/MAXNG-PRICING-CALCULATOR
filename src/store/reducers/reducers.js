import { combineReducers } from 'redux';
import onBoardingState from './on-boarding';
import alert from './alert';
import searchState from './search';
import landingPageState from './landing-page';

export default combineReducers({
    onBoardingState,
    alert,
    searchState,
    landingPageState
});
