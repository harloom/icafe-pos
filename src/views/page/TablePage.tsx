import React from 'react'
import CardTable from '../../components/Card/CardTable'

interface ITablePage {

}

const TablePage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col h-screen space-y-2 ">
      <div className="flex-none ml-10 mt-2">
        <div className="w-full flex flex-row space-x-1 ">
          <div className="flex items-center w-auto h-10 bg-yellow-500 px-2  py-3 text-center text-white rounded-md text-xs"> Available </div>
          <div className="flex items-center w-auto h-10 bg-gray-500 px-2 py-3 text-center text-white rounded-md text-xs"> Not  Available </div>
        </div>  
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-transparen">
        <div className="w-full flex flex-wrap  pt-10 pb-20  px-10">

          <CardTable
            label="A-10"
            isUse={false}
          />
          <CardTable
            label="A-10"
            isUse={false}
          />
          <CardTable
            label="A-10"
            isUse={true}
          />
          <CardTable
            label="A-10"
            isUse={false}
          />
          <CardTable
            label="A-10"
            isUse={false}
          />
          <CardTable
            label="A-10"
            isUse={false}
          />
          <CardTable
            label="A-10"
            isUse={false}
          />
          <CardTable
            label="4"
            isUse={false}
          />
          <CardTable
            label="4"
            isUse={false}
          />
          <CardTable
            label="4"
            isUse={false}
          />
        </div>

      </div>

    </div>
  )
}

export default TablePage;

