import React from 'react'
import ButtonIcon from '../components/Button/ButtonIcon';
import Moment from 'moment';

interface ICartView {
  isOpen  : boolean
  onClose : Function
}


function CartView({isOpen = true,onClose} : ICartView) {

  return (
    <aside className={`bg-gray-700 transform   top-0  right-0 w-3/4  lg:w-1/4 fixed min-h-screen  overflow-auto  z-30 
          ${isOpen ? 'translate-x-0 ease-out transition  duration-700   ' : '-translate-x-full ease-in transition  duration-700   hidden overflow'}
          `}>
      <div className="flex flex-col justify-between h-screen "> 
        {/* content */}
        <div className="h-5/6 flex flex-col  justify-start px-4 pt-2 pb-2   ">
          {/* //#region header */}
          <div className="flex flex-wrap border-b border-white py-2">
            <div onClick={() => onClose()} className="cursor-pointer mr-4">
              <svg className={` h-6 w-6  fill-current text-white`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
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
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Aliquam rerum itaque error enim vero praesentium ipsa cumque sit minus laboriosam velit molestiae quia nihil accusantium totam facilis unde, non dignissimos.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, maxime sequi qui veritatis ad impedit voluptatibus enim? Qui voluptate voluptatum aliquam vel quam dicta praesentium impedit, obcaecati officiis similique quod!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aspernatur eveniet illo quaerat sed qui quos velit voluptatum, architecto a nesciunt in ad quam ea ducimus pariatur ipsum corporis veritatis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorum perspiciatis minima ducimus impedit ad asperiores illo necessitatibus neque, tenetur iure repellendus quasi itaque delectus dicta accusantium laboriosam veritatis error.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sapiente quae ex sequi vero. Dolores illo nemo itaque vitae, soluta, voluptatibus, accusantium rem cum necessitatibus voluptate ipsum. Voluptate, dolor sed?
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
          <ButtonIcon
            label="PROCESS ORDER"
          />
        </div>
        {/* //#endregion bottom */}

      </div>
    </aside>
  )
}

export default CartView;
