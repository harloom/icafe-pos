import { CartActionTypes, GET_CART } from "./cart_types";



export function updateCart(): CartActionTypes {
  return {
    type: GET_CART,
    payload: {
      value : true
    }
  }
}