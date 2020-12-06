import { Toogle, UiActionTypes ,UiBaseState, UPDATE_UI_CART} from './ui_types';



const initialState : UiBaseState={
  toogleCart : false
}
 function uiReducer(
  state = initialState,
  action  : UiActionTypes
) : UiBaseState{
  switch(action.type){
  
    case UPDATE_UI_CART: 
      if(action.payload.componentToogle === Toogle.CART){
        return {
          toogleCart : action.payload.value
        }
      }
      return {...state}
    default :
      return state;
    
  }
}

export default uiReducer;