export default (state = {}, action) => {
 switch (action.type) {
  case 'UPDATE_SEARCH':
	  state[action.payload['path']] = {
	  	      address: action.payload['address'],
	          lat: action.payload['lat'], 
	          lng: action.payload['lng']

	  }
   return state
  default:
   return state
 }
} 