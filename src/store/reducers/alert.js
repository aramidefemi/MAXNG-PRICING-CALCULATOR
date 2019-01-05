export default (state = {}, action) => {
 switch (action.type) {
  case 'SHOW_ALERT':
   return {
     show: true,
     details:  action.payload
   }
  case 'HIDE_ALERT':
   return {
     show:  false,
     details:  null
   }
  default:
   return state
 }
} 