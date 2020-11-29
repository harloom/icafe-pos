

import React from 'react'

function CartView(  ) {
  const [isOpen, setOpen] = React.useState<boolean>(true);
  return (
    <aside className={`bg-gray-700 transform top-0  right-0 w-3/4  md:w-1/4 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30
          ${isOpen ? 'translate-x-0 ' : '-translate-x-full hidden overflow'}
          `}>
      <div className="flex flex-col p-4">
        <div className="flex flex-wrap">
          <div onClick={()=>setOpen(!isOpen)} className="cursor-pointer mr-4">
            <svg className={` h-6 w-6  fill-current text-white`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div>
            <span className="text-white">Cart</span>
          </div>

        </div>

      </div>

    </aside>
  )
}

export default CartView;
