import React from 'react'
import SearchItem from '../../components/dashboard/SearchItem'
import FilterItem from '../../components/exam-list/FilterItem'
import ExamCard from '../../components/dashboard/ExamCard'
import EnterExamButton from '../../components/exam-list/ExamEnterButton'

const contohUjian = [
  {
    id: 1,
    title: "Ujian Bab 2 matematika sangat sulit",
    subject: "Matematika",
    questions: 25,
    status: "nonaktif",
    path:'/exam-detail'
    
  },
  {
    id: 2, 
    title: "Quiz Bab 5",
    subject: "Bahasa Indonesia",
    questions: 20,
    status: "berlangsung",
    path:'/exam-detail'
  },
  {
    id: 3,
    title: "Ujian Semester",
    subject: "Fisika", 
    questions: 30,
    status: "aktif",
    
  },
  {
    id: 4,
    title: "Ujian Semester",
    subject: "Fisika", 
    questions: 30,
    status: "aktif",
    
  },
  {
    id: 5,
    title: "Ujian Semester",
    subject: "Fisika", 
    questions: 30,
    status: "aktif",
    
  },
  {
    id: 6,
    title: "Ujian Semester",
    subject: "Fisika", 
    questions: 30,
    status: "aktif",    
  }
];

const ExamListPage = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8 pt-6 lg:pt-10 max-w-[1198px] mx-[10px] xl:mx-auto'>
      <div className="flex justify-between items-center mb-6 lg:mb-6">
        <p className="block sm:hidden text-xl font-medium text-black">Pilih Ujian</p>
        <p className="hidden sm:block text-xl lg:text-2xl font-medium text-black tracking-custom leading-custom">Daftar Ujian</p>
        <div className="hidden sm:block">
        <EnterExamButton className='px-6.5 py-4' />
        </div>
      </div>
      <div className="flex justify-between items-center mb-6 lg:mb-8 gap-3 md:gap-0 ">
        <SearchItem />
        <FilterItem />     
      </div>
      <div className="block sm:hidden w-full flex justify-end mb-4">
        <EnterExamButton className="w-full max-w-[120px] text-sm py-3 px-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {contohUjian.map((exam) => (
          <div key={exam.id} className="flex justify-center">
            <ExamCard key={exam.id} exam={exam} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExamListPage
