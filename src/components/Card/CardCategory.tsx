import React from 'react'

interface ICardCategory {
  label: string
  isActive? : boolean
  
}

const CardCategory = (props: ICardCategory) => {
  return (

    < div className ="flex flex-wrap items-center justify-center shadow my-1 " >
      <button className="w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none  focus:ring focus:ring-yellow-400 bg-orange bg-gradient-to-r from-yellow-600 to-yellow-400 px-2 py-3 rounded ">
        <p className="font-medium text-gray-200 align-baseline text-xs md:text-sm text-justify  overflow-hidden">{props.label}</p>
      </button>
            
  </div >
  )
}

export default CardCategory;