import React from 'react'

const HeaderAbout = () => {
  return (
    <div>
      <h1 className='text-xl font-semibold mb-6'>Tentang Examo</h1>
      <div className="flex gap-1 items-center">
        <p className='text-base'><span className='font-semibold text-primary-blue'>Examo</span> adalah platform ujian online yang dirancang untuk memudahkan guru dan siswa dalam membuat, mengikuti, dan mengelola ujian secara digital. Dengan tampilan yang sederhana dan fitur yang lengkap, Examo membantu proses ujian menjadi lebih cepat, aman, dan efisien.</p>
        <img src="/image/examCard.png" alt="" className='w-[210px] h-[210px]' />
      </div>
    </div>
  )
}

export default HeaderAbout
