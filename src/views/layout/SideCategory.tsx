
import { Adjustments } from 'heroicons-react';
import React from 'react'
import CardCategory from '../../components/Card/CardCategory';

interface ISideCategory {
  isOpen : boolean
}

const SideCategory = ({isOpen} : ISideCategory)=>{
  return (
    <aside className={`flex flex-auto bg-white transform   top-0  left-0  h-screen 
      ${isOpen ? 'translate-x-0 ease-out transition  duration-700 ' : '-translate-x-full ease-in transition  duration-700   overflow'}`}>
      <div className="flex flex-col justify-start  max-h-screen px-2 ">
          <div className="flex flex-row border-b mb-3 border-yellow-500 py-2 justify-center lg:justify-between items-center">
            <div>
              <span className="hidden lg:block  text-gray-600 text-sm font-bold px-2">Kategori</span>
            </div>
            <div onClick={() => console.log("Close")} className="cursor-pointer mr-4">
                <Adjustments size={16} className="text-gray-700"/>
            </div>
          </div>
          <div className="flex rounded-md shadow-sm mb-3">
              <input type="text" name="search" id="search" className="px-3 py-2 focus:ring-yellow-500 border border-gray-300 focus:outline-none focus:border-yellow-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm " placeholder="Search"/>
          </div>  
          <CardCategory label="Food"/>
          <CardCategory label="Drink"/>
          <CardCategory label="Snack"/>

        </div>
      </aside>
  );
};

export default SideCategory;