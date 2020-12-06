import { CartActionTypes, CartBaseState } from "./cart_types";


const initialState : CartBaseState={
  items : [{test : 'aja'}]
}
 function cartReducer(
  state = initialState,
  action  : CartActionTypes
) : CartBaseState{
  console.log(action);
  switch(action.type){
    default :
      return state;
    
  }
}

export default cartReducer;