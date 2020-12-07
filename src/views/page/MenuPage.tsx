import { stat } from 'fs';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardProduct from '../../components/Card/CardProduct'
import { addToCart } from '../../store/cart/actions_cart';
import { getMenuNetwork } from '../../store/menu_oder/actions_menu';
import { RootState } from '../../store/store';
// import { getMenuNetwork } from '../../store/menu_oder/actions_menu';
import SideCategory from '../layout/SideCategory'

const exampleData = [{
  name: "Burger Max Count",
  discount: 10,
  price: 2,
  image: '/logo512.png',

},
{
  name: "Burger Max Count",
  discount: 10,
  price: 2,
  image: '/logo512.png',

},
{
  name: "Burger Max Count",
  discount: 10,
  price: 2,
  image: '/logo512.png',

},

{
  name: "Burger Max Count",
  discount: 10,
  price: 2,
  image: '/logo512.png',

},

{
  name: "Burger Max Count",
  discount: 10,
  price: 2,
  image: '/logo512.png',

},
{
  name: "Burger Max Count",
  discount: 10,
  price: 2,
  image: '/logo512.png',

},
]


const MenuPage = () => {
  
  const dispatch = useDispatch();
  const selectMenu = (state : RootState) => state.menu;
  const  storeMenu = useSelector(selectMenu);


  useEffect(()=>{
    console.log("Menu page");
      dispatch(getMenuNetwork({page:1}));
      // setInterval(()=>{
      //     dispatch(getMenuNetwork({page:2}));
      // },5000);
  },[])

  return (  
    <div className="flex flex-row  min-w-full bg-gray-200">
      <SideCategory isOpen={true} />
      <div className="w-full  h-screen min-h-screen flex ">
        <div className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-transparent ">
          <div className="w-full flex flex-wrap justify-center md:justify-center lg:justify-start  pb-20">

            {
              storeMenu.items.map((value, index ) => {
                return <CardProduct
                  key={index}
                  discount={value.discount}
                  nameProduct={value.name + ` ${index}`}
                  image={value?.image || ''}
                  price={value.price}
                  onClick={(event) => {
                      dispatch(addToCart(value));
                  }}
                />
              })
            }

          </div>
        </div>

      </div>
    </div>
  )
};

export default MenuPage;