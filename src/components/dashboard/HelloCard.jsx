import React from 'react'

const HelloCard = () => {
  return (
    <div className='bg-gradient-to-r from-white to-[#D8EFFF] py-2 px-8 rounded-[15px] h-[150px] md:h-50 flex items-center hover:shadow'>
      <div className="flex-1 min-w-0 sm:gap-2 md:gap-4 xl:gap-10 py-2">
        <h2 className="text-[15px] md:text-xl xl:text-3xl font-semibold text-primary-black mb-2 tracking-custom">
          Halo, Sobat Examo!
        </h2>
        <p className="hidden lg:block lg:text-lg xl:text-xl font-medium text-primary-black mb-2 tracking-custom">
          apa yang akan kamu lakukan hari ini?
        </p>
        <p className="text-xs md:text-sm xl:text-base text-primary-black md:text-primary-gray tracking-custom leading-[18px]">
          Nikmati berbagai fitur menarik dan hebat dari examo.
          Buat ujianmu jadi gampang!
        </p>
      </div>
      <div className="flex-shrink-0 ml-4 sm:ml-6 md:ml-10">
        <div className="relative">
          <img src='/image/icon1.png' alt="Examo mascot illustration" 
            className="w-24 h-16 md:w-32 md:h-20 xl:w-[228px] xl:h-[152px] object-contain"
            loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default HelloCard
