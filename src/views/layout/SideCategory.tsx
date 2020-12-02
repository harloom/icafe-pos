
import { Adjustments, X } from 'heroicons-react';
import moment from 'moment';
import React from 'react'

interface ISideCategory {
  isOpen : boolean
}

const SideCategory = ({isOpen} : ISideCategory)=>{
  return (
    <aside className={`bg-white transform   top-0  left-0 w-2/12  h-screen 
      ${isOpen ? 'translate-x-0 ease-out transition  duration-700   ' : '-translate-x-full ease-in transition  duration-700   overflow'}
       `}>
         <div className="flex flex-col justify-start  max-h-screen ">
         <div className="flex flex-row border-b border-white py-2 justify-center lg:justify-between items-center">
            <div>
              <span className="hidden lg:block  text-gray-600 text-sm font-bold px-2">Filter</span>
            </div>
            <div onClick={() => console.log("Close")} className="cursor-pointer mr-4">
                <Adjustments size={16} className="text-gray-700"/>
            </div>
          </div>
        </div>
      </aside>
  );
};

export default SideCategory;