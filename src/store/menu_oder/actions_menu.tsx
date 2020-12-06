import { resolve } from "dns";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { updateCartToogle } from "../ui/actions";
import { ADD_PRODUCT, BaseMenuState, LOADING_PRODUCT, MenuActionTypes } from "./menu_types";

interface IGetMenu {
  page: number
}


export function addMenu(object: BaseMenuState): MenuActionTypes {
  return {
    type: ADD_PRODUCT,
    payload: object
  }
}


export const getMenuNetwork = ({ page }: IGetMenu
) => async (dispatch: Dispatch<MenuActionTypes>) => {
  dispatch({
    type: LOADING_PRODUCT
  });

  const net = await exampleAPI();
  dispatch(addMenu(net));
}

function exampleAPI() {
  return new Promise<BaseMenuState>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        page :1,
        isNext : true,
        isPrev : false,
        nextPage : 2,
        items : [
          {
            _id : "112131313asdsadas",
            discount : 10,
            idMenu : "Menu1",
            name : "Burger",
            price : 2000,
            image :'/logo512.png'
          }
        ]
      });
    }, 3000)
  })
}
