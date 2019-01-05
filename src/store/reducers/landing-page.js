export default (state = {}, action) => {
 switch (action.type) {
  case 'LANDINGPAGE_SLIDER_STEP':
    var  newStep =  action.payload;
      if(newStep < 0) {
        newStep = 2
      }else if (newStep > 2) {
        newStep = 0
      }

   return {
     step:  newStep, 
   } 
  default:
   return state
 }
} 