import React from 'react'
import BookIcon from '../../icons/BookIcon'

const TotalCard = () => {
  return (
  <div className="relative bg-[#FEF5E5] py-6 px-4 h-[150px] rounded-[15px] flex flex-col md:justify-between md:h-[200px] hover:shadow">
    <div className="absolute top-4 right-4 lg:pr-5 lg:pt-5">
      <div className="w-[50px] h-[50px]  xl:w-[55px] xl:h-[55px] bg-[#FEC53D] rounded-xl flex items-center justify-center">
        <BookIcon className="w-7 h-7  xl:w-[31px] xl:h-[31px] text-white" />
      </div>
    </div>

    <div className="flex flex-col justify-end h-full">
      <h3 className="text-[40px] xl:text-[50px] font-semibold text-primary-black tracking-custom">
        25
      </h3>
      <p className="text-base xl:text-lg font-medium text-[#151D48] tracking-custom">
        Total Ujian
      </p>
      <p className="text-sm text-[#425166] tracking-custom">
        Yang dikerjakan anda
      </p>
    </div>
  </div>


  )
}

export default TotalCard
