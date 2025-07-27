import React from 'react'

const TotalSiswaCard = ({ totalSiswa = 60 }) => {
  return (
    <div className="bg-[#FEF5E5] rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 h-[200px] lg:h-[224px] p-4 lg:p-6 flex flex-col justify-between">
      <div className="flex justify-start">
        <div className="rounded-2xl w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center bg-[#FEC53D]">
          <img 
            src="/image/people.png" 
            alt="People icon" 
            className="w-6 h-6 lg:w-7 lg:h-7 object-contain"
          />
        </div>
      </div>
      
      <div className="flex flex-col justify-end">
        <p className="text-3xl lg:text-4xl xl:text-[40px] font-semibold text-[#2A2A2A] mb-1">
          {totalSiswa}
        </p>
        <p className="text-base lg:text-lg font-semibold text-[#151D48] mb-1">
          Total Siswa
        </p>
        <p className="text-sm text-[#425166]">
          Mengikuti Ujian
        </p>
      </div>
    </div>
  )
}

export default TotalSiswaCard