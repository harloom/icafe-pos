import React from 'react'
interface ICardTable {
  label: string,
  isUse?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const defaultValue: ICardTable = {
  isUse: false,
  label: ''
}


const CardTable = (props = defaultValue) => {
  const syleUse = (() => {
    return props.isUse ?
      ' border-gray-500' : ' border-yellow-500 hover:bg-gray-50 transform hover:scale-95 transition duration-200 hover:translate-y-2'

  })();

  


  return (
    <div className="flex-none w-1/2  sm:6/12 md:1/3 lg:w-3/12 px-1 py-1 cursor-pointer ">
       <div className={`flex flex-col w-auto py-12 bg-white shadow-sm rounded-md justify-center items-center border-b-4 ${syleUse} `}>
        <div>
          <span className="text-3xl font-black">{props.label}</span>
        </div>
        <div className="inline-block">
          <p className="text-gray-500 text-xs">4 Chair</p>
        </div>
      </div>
    </div>
  );
}

export default CardTable;