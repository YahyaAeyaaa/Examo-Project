import React from 'react'
import { RiStickyNoteAddFill } from "react-icons/ri"

const TotalUjianCard = ({ totalUjian = 19 }) => {
  return (
    <div className="bg-[#FBF2EF] rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 h-[200px] lg:h-[224px] p-4 lg:p-6 flex flex-col justify-between">
      <div className="flex justify-start">
        <div className="rounded-2xl w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center bg-[#FE9479]">
          <RiStickyNoteAddFill className="text-white w-6 h-6 lg:w-7 lg:h-7"/>
        </div>
      </div>
      
      <div className="flex flex-col justify-end">
        <p className="text-3xl lg:text-4xl xl:text-[40px] font-semibold text-[#2A2A2A] mb-1">
          {totalUjian}
        </p>
        <p className="text-base lg:text-lg font-semibold text-[#151D48] mb-1">
          Total Ujian
        </p>
        <p className="text-sm text-[#425166]">
          Dibuat Admin
        </p>
      </div>
    </div>
  )
}

export default TotalUjianCard