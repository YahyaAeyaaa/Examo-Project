import React from 'react'
import { ArrowLeft } from 'lucide-react'

const ExamHeader = () => {
  return (
    <div className='flex justify-between items-center mb-4'>
      <p className='text-2xl font-medium tracking-custom'>Detail Ujian</p>
      <button className='flex items-center justify-center gap-2 p-2 bg-white w-[116px] rounded-[5px] text-sm'>
        <ArrowLeft className='w-4 h-4' />
        Kembali
      </button>
    </div>
  )
}

export default ExamHeader
