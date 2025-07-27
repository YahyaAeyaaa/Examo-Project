import React from 'react'

const HelloCardGuru = () => {
  return (
    <div className='bg-gradient-to-r from-white to-[#D8EFFF] py-6 px-8 rounded-2xl h-[200px] lg:h-[224px] flex items-center shadow hover:shadow-lg transition-shadow duration-300'>
      <div className="flex-1 min-w-0 pr-4">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 lg:mb-3 text-[#2A2A2A] tracking-custom">
          Halo, Sobat Examno!
        </h1>
        <p className="hidden lg:block text-base lg:text-lg font-medium text-[#2A2A2A] mb-2 tracking-custom">
          apa yang akan kamu lakukan hari ini?
        </p>
        <p className="text-sm md:text-base text-[#2A2A2A] tracking-custom leading-relaxed">
          nikmati berbagai fitur menarik dan hebat dari examo. Buat ujianmu jadi gampang!
        </p>
      </div>
      
      <div className="flex-shrink-0">
        <img 
          src="/image/icon1.png" 
          alt="Examo mascot illustration" 
          className="w-20 h-16 md:w-28 md:h-20 lg:w-auto lg:h-auto max-w-[120px] lg:max-w-none object-contain"
          loading="lazy" 
        />
      </div>
    </div>
  )
}

export default HelloCardGuru