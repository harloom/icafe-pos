import { ADD_PRODUCT, BaseMenuState, MenuActionTypes } from "./menu_types"


const initialState : BaseMenuState = {
  isNext : true,
  page : 1,
  items: []
}

const menuReducer = (
  state = initialState,
  action  : MenuActionTypes
) : BaseMenuState=>{

  switch(action.type){
      case  ADD_PRODUCT:
        return {
          ...state,
          items : [...new Set([...state?.items,...action.payload.items])],
          nextPage : action.payload.nextPage
          
        }

    default :
    return state
  }

}

export default menuReducer;