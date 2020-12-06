export const GET_CART = "GET_CART";




export interface CartBaseState{
  items : Array<any>
} 

export interface iPlayLoadCart {
  value : any
}

interface UpadateCartAction {
  type: String
  payload:  iPlayLoadCart
}

export type CartActionTypes = UpadateCartAction