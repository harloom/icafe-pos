export const ADD_PRODUCT = "GET_PRODUCT";
export const LOADING_PRODUCT = "LOADING_PRODUCT";

interface IMenuModel {
  _id : string,
  idMenu : string,
  name : string,
  price : number,
  discount :number,
  image? : string
}


export interface BaseMenuState {
  page : number,
  nextPage? : number,
  prevPage? : number,
  isNext? : boolean,
  isPrev? : boolean,
  items : Array<IMenuModel>
}


interface  ActionGET {
  type : string,
  payload? : any,
  error ? : string
}

export type MenuActionTypes = ActionGET;