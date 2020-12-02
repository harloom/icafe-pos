import React from 'react'
import CardProduct from '../../components/Card/CardProduct'
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
  return (  
    <div className="flex flex-row  min-w-full bg-gray-300">
      <SideCategory isOpen={true} />
      <div className="w-full  h-screen min-h-screen flex ">
        <div className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-transparent ">
          <div className="w-full flex flex-wrap justify-center md:justify-center lg:justify-start  pb-20">

            {
              exampleData.map((value, index ) => {
                return <CardProduct
                  key={index}
                  discount={value.discount}
                  nameProduct={value.name + ` ${index}`}
                  image={value.image}
                  price={value.price}
                  onClick={(event) => {
                    console.log(event);
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