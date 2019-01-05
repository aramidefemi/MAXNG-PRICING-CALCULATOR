export default (state = {}, action) => {
 switch (action.type) {
  case 'UPDATE_FILTER':
   return {
     filter:  action.payload
   } 
  default:
   return state
 }
} 