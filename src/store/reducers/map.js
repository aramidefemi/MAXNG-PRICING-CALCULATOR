export default (state = {}, action) => {
 switch (action.type) {
 case 'TOGGLE_MAP':
 state['modal-show'] = action.payload;
   return state;
  case 'POP_MAP':
  	state['modal-show'] = true;
  	state['state'] = action.payload;

   return state;

  case 'UPDATE_PARAMS':
  	state['address'] = action.payload.address
     state['lat'] =action.payload.lat
     state['lng'] =action.payload.lng
   return state
  default:
   return state
 }
} 