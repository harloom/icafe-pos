import { PlusCircle } from 'heroicons-react';
import React from 'react'

interface ICardProduct {
  nameProduct : string,
  image : string,
  price : number ,
  discount? : number ,
  onClick : (event:React.MouseEvent<HTMLButtonElement>)=>void

}

const CardProduct = ({discount = 0 ,price,image,nameProduct,onClick}: ICardProduct)=>{

  const discountPrice = (discount/100)*price;
  const priceTotal = price - discountPrice;

return (
  <>
        <div className="flex-none w-1/2  sm:6/12 md:1/3 lg:w-3/12 px-1 py-1">
            <div className="flex flex-col w-auto bg-white shadow-sm rounded-md p-2 ">
              <div className="flex justify-center items-center overflow-hidden bg-gray-100 ">
                <img className="object-cover h-36 w-auto" src={image} alt="img-product" />
              </div>
              <div>
                <span className="text-sm text-gray-700 font-medium">
                  <p>{nameProduct} </p>
                </span>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div className={`font-black text-xs ${discount ? 'line-through' : ''} `}>
                    $ {price}
                  </div>
                   <div className="flex flex-col transform  transition duration-200 hover:scale-110 z-1 py-2">
                    <p className="text-gray-600 text-xs font-medium">Today : </p>
                    <p className="text-gray-800  text-sm  font-black">$ {priceTotal} </p>
                  </div>
                </div>
                <div className="flex items-end align-bottom">
                  <button onClick={onClick} className=" fill-current transform focus:ring-1 ring-yellow-400 transition duration-200 text-yellow-500 border-transparent focus:outline-none hover:scale-105">
                    <PlusCircle size={26} />
                  </button>
                </div>
              </div>
            </div>
          </div>
  </>
)

}


export default CardProduct;