import React from 'react'

const MainFeature = () => {
  return (
    <div>
      <h1 className='text-xl font-semibold mb-4'>Fitur Utama</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className='flex flex-col items-center text-center shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-6'>
            <div className='rounded-full w-15 h-15 bg-[#D9EFFF] mb-4'></div>
            <h1 className='font-semibold mb-2'>Buat Ujian</h1>
            <p className='text-sm text-[#676767]'>Susun ujian dengan mudah dan cepat.</p>
        </div>
        <div className='flex flex-col items-center text-center shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-6'>
            <div className='rounded-full w-15 h-15 bg-[#D9EFFF] mb-4'></div>
            <h1 className='font-semibold mb-2'>Buat Ujian</h1>
            <p className='text-sm text-[#676767]'>Susun ujian dengan mudah dan cepat.</p>
        </div>
        <div className='flex flex-col items-center text-center shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-6'>
            <div className='rounded-full w-15 h-15 bg-[#D9EFFF] mb-4'></div>
            <h1 className='font-semibold mb-2'>Buat Ujian</h1>
            <p className='text-sm text-[#676767]'>Susun ujian dengan mudah dan cepat.</p>
        </div>
      </div>
    </div>
  )
}

export default MainFeature
