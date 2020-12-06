import { UPDATE_UI_CART , UiActionTypes, Toogle} from './ui_types'

export function updateCartToogle(value : boolean): UiActionTypes {
  return {
    type: UPDATE_UI_CART,
    payload: {
      componentToogle : Toogle.CART,
      value : value
    }
  }
}