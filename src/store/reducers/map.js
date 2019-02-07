export default (state = {}, action) => {
 switch (action.type) {
  case 'TOGGLE_MAP':
   return {
   	'map-show': action.payload
   }
  default:
   return state
 }
} 