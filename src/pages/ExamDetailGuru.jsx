import React from 'react'
import ExamHeaderGuru from '../components/element/Detail-Ujian-Guru/ExamHeaderTeacher'
import ExamCardGuru from '../components/element/Detail-Ujian-Guru/ExamCardGuru'
import ExamListGuru from '../components/element/Detail-Ujian-Guru/ExamListGuru'


const ExamDetailGuru = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-9 py-8 lg:pt-12 max-w-[1198px] mx-[10px] xl:mx-auto'>
        <ExamHeaderGuru />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6'>
        <ExamCardGuru />
        <ExamListGuru />
      </div>
    </div>

  )
}

export default ExamDetailGuru
