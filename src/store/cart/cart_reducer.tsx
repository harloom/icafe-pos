import { CartActionTypes, CartBaseState, LOADING_CART, UPDATE_CART } from "./cart_types";

export const initialState : CartBaseState={
  items : [],
  totals : 0,

}

function cartReducer(
  state = initialState,
  action  : CartActionTypes
) : CartBaseState
{
  console.log(action);
  switch(action.type)
    {
      case LOADING_CART :
        return {
          ...state,
          isLoading : true
        }
      
      case UPDATE_CART:{
          if(action.payload){
            return {
              ...state,
              ...action.payload.value
            }
          }
          return {
            ...state,
            isLoading : false
          }
      }

      default :
        return state;
      
    }
}

export default cartReducer;