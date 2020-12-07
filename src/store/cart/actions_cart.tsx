import { Dispatch } from "redux";
import { IMenuModel } from "../menu_oder/menu_types";
import { initialState } from "./cart_reducer";
import { CartActionTypes, CartBaseState, GET_CART, ICartModel, LOADING_CART, UPDATE_CART } from "./cart_types";



export function updateCart(): CartActionTypes {
  return {
    type: GET_CART,
  }
}

  export const addToCart = (props: IMenuModel)  =>
  async (dispatch: Dispatch<CartActionTypes>) => {
    dispatch({ type: LOADING_CART });
    const state = saveToStorage(props);
    
    dispatch({type:UPDATE_CART,payload:{
      value:state
    }})

  }
  export const changeValueItem = (props : ICartModel,changeValue:number)=>
  async (dispatch: Dispatch<CartActionTypes>) => {
    dispatch({ type: LOADING_CART });
    const prevState = getFromStorage();

    /**
     * get id and filet
     * 
     */
 
    const id = props.idMenu;

    if(changeValue <1){
        /**
         * remove form list
         */
        const removeState = prevState.items.filter((value)=>value.idMenu !== id);
        const state = {items : removeState, totals : countTotals(removeState)};
        save(state);
        dispatch({type :UPDATE_CART,payload:{value : state}});
        return;
    }

    // const items =  prevState.items.filter((value)=> value.idMenu === id);
    
    prevState.items.map((value,index)=>{
      if(value.idMenu === id){
        value.count = changeValue;
      }
    })

    console.log("JALAN")
    const  totals = countTotals(prevState.items)
    save({...prevState,totals :totals});

    dispatch({type:UPDATE_CART,payload:{
      value:{...prevState,totals:totals}
    }})

  }

  export const getCart = ()  =>
  async (dispatch: Dispatch<CartActionTypes>) => {
    dispatch({ type: LOADING_CART });
    const state = getFromStorage();
    dispatch({type:UPDATE_CART,payload:{
      value:state
    }})

  }


 const checkDuplicate = (args : ICartModel[] ,id:string ) :boolean=>{
  console.log(`${args[0]?.idMenu} test ${id}`);
  const items =  args.filter((value)=> value.idMenu === id);
  return items.length === 1 ;
}


const saveToStorage = (props: IMenuModel): CartBaseState => {
  const localCarts = localStorage.getItem('carts');

  if (localCarts) {
    const localJson : CartBaseState= JSON.parse(localCarts);

    /**
     * check double
     */

    const isDuplicate = checkDuplicate(localJson.items,props.idMenu);
    if(isDuplicate){ return localJson; };


    const arr :Array<ICartModel> = [{
      _id :props._id,
      count :1,
      discount : props.discount,
      idMenu : props.idMenu,
      name : props.name,
      price : props.price,
      image : props.image
    }];

    const merge = [...new Set([...localJson.items,...arr])];
    const totals = countTotals(merge);
    const carts : CartBaseState= {
      items : merge,
      totals : totals,
    };

    save(carts);
    return carts;
  }

  save(initialState);
  return initialState;

} 

const getFromStorage = () : CartBaseState =>{
  const localCarts = localStorage.getItem('carts');
  if (localCarts) {
    const localJson : CartBaseState= JSON.parse(localCarts);
    const totals = countTotals(localJson.items);
    return {
      ...localJson,
      totals : totals
    }
  }
  save(initialState);
  return initialState;

}
function countTotals (args :  ICartModel[]) : number {
  return args.reduce((acc,current)=> acc +( current.price * current.count),0);
}

function save(props : CartBaseState){
  localStorage.setItem('carts',JSON.stringify(props));
}