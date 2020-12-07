import { IMenuModel } from "../menu_oder/menu_types";
import { ITableModel } from "../table/types_table";

export const GET_CART = "GET_CART";
export const LOADING_CART = "LOADING_CART";
export const UPDATE_CART = "UPDATE_CART";


export  interface ICartModel extends IMenuModel{
  count : number
}

export interface CartBaseState{
  items : Array<ICartModel>,
  totals : number,
  table? : ITableModel
  isLoading? :boolean
} 

interface iPlayLoadCart {
  error? : string
  value? : CartBaseState
}

interface UpadateCartAction {
  type: String
  payload?:  iPlayLoadCart
}

export type CartActionTypes = UpadateCartAction