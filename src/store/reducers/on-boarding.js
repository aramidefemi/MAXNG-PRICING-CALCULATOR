export default (state = {}, action) => {
 switch (action.type) {
  case 'INCREASE_STEP':
   return {
     step:  state.step + 1,
     form:  state.form,
     modal:  state.modal
   }
  case 'CHANGE_STEP':
   return {
     step:  action.payload,
     form:  state.form,
     modal:  state.modal
   }
  case 'UPDATE_FORM':
   return {
      step:  state.step,
      form: action.payload,
      modal:  state.modal
    }  
  case 'OPEN_MODAL':
   return {
      step: state.step,
      form: state.form,
      modal: {
        show: true,
        type: action.payload
      }
    }  
  case 'HIDE_MODAL':
   return {
      step: state.step,
      form: state.form,
      modal: {
        show: false,
        type: 'done'
      }
    }
  default:
   return state
 }
} 