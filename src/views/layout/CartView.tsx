import React from 'react'
import ButtonIcon, { ButtonStyle } from '../../components/Button/ButtonIcon';
import Moment from 'moment';
import { Check, Trash, X } from "heroicons-react";
import { ButtonSIze } from '../../components/Button/Size';
import ItemCart from '../../components/Cart/ItemCart';

interface ICartView {
  isOpen: boolean
  onClose: Function
}


function CartView({ isOpen = true, onClose }: ICartView) {

  return (
    <aside className={`bg-gray-700 transform   top-0  right-0 w-3/4  lg:w-1/4 fixed min-h-screen  overflow-auto  z-30 
          ${isOpen ? 'translate-x-0 ease-out transition  duration-700   ' : 'translate-x-full ease-in transition  duration-700   overflow'}
          `}>
      <div className="flex flex-col justify-between h-screen ">
        {/* content */}
        <div className="h-5/6 flex flex-col  justify-start pl-4 pt-2 pb-2   ">
          {/* //#region header */}
          <div className="flex flex-wrap border-b border-white py-2">
            <div onClick={() => onClose()} className="cursor-pointer mr-4">
                <X size={16} className="text-white"/>
            </div>
            <div>
              <span className="text-white text-sm">{Moment(Date.now()).toLocaleString()}</span>
            </div>
          </div>
          {/* //#endregion header */}

          {/* //#region  table */}
          <div className="h-auto px-4 py-2 flex flex-col border-b border-white ">
            <span className="text-gray-300 text-xs">Tabel</span>
            <span className="text-white text-sm font-black">A10</span>
          </div>
          {/* //#endregion table */}

          {/* //#region  list cart */}
          <div className="mt-4 text-white overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
            {
              [1, 2, 3, 4, 5, 6].map((ele,index) =>
                <ItemCart
                  key={index}
                  count={1}
                  name="Burger"
                  price={10000}
                   onValueChange= {(value:number)=>{
                    console.log(value);
                  }}
                />)
            }
          </div>
          {/* //#endregion list cart*/}

        </div>
        {/* //#region  Bottom  */}
        <div className=" h-auto bg-gray-500 w-full flex flex-col  items-center justify-center py-3">
          <div className="w-full flex flex-row justify-between px-4 ">
            <div>
              <span className="text-gray-300 text-xs">Total</span>
            </div>
            <div>
              <span className="text-white text-base font-semibold">Rp 1000</span>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-evenly">
            <ButtonIcon
              label="Remove All"
              size={ButtonSIze.Small}
              icon={<Trash size={12} />}
              style={ButtonStyle.LigthDark}

            />
            <ButtonIcon
              label="PROCESS ORDER"
              size={ButtonSIze.Small}
              icon={<Check size={12} />}
            />

          </div>
        </div>
        {/* //#endregion bottom */}

      </div>
    </aside>
  )
}

export default CartView;
