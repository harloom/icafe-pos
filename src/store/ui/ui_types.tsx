export const UPDATE_UI_CART = 'UPDATE_UI_CART'


export enum Toogle {
  CART
}

interface UIToogleState {
  componentToogle : Toogle
  value : boolean
}

export interface UiBaseState {
  toogleCart : boolean
}


interface UpadateUiAction {
  type: String
  payload: UIToogleState
}

export type UiActionTypes = UpadateUiAction
