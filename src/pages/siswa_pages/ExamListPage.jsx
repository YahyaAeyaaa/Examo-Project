import React, { useCallback, useState, useMemo } from 'react'
import SearchItem from '../../components/dashboard/SearchItem'
import FilterItem from '../../components/exam-list/FilterItem'
import ExamCard from '../../components/dashboard/ExamCard'
import EnterExamButton from '../../components/exam-list/ExamEnterButton'
import { getUserExam } from '../../config/api'
import { useEffect } from 'react'
import { IoIosSearch } from "react-icons/io";
// import { useNavigate } from 'react-router-dom'



const ExamListPage = () => {
  // const navigate = useNavigate()
  const [exams, setExams] = useState([])
  const [filteredExams, setFilteredExams] = useState([]) 
  const [filters, setFilters] = useState({
    search: '',
    startDate: null,
    endDate: null,
    status: 'all'
  })

// const handleDetail = (examId) => {
//   navigate(`/exam/${examId}`)
// }

const applyAllFilters = useCallback(() => {
  let result = [...exams]

  if (filters.search.trim()) {
    result = result.filter(exam => 
      exam.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      (exam.subject && exam.subject.toLowerCase().includes(filters.search.toLowerCase()))
    )
  }

  if (filters.startDate || filters.endDate) {
    result = result.filter(exam => {
      const examStartStr = exam.startDate.split(' ')[0] 
      
      let passesDateFilter = true
      
      if (filters.startDate) {
        passesDateFilter = passesDateFilter && (examStartStr >= filters.startDate)
      }
      
      if (filters.endDate) {
        passesDateFilter = passesDateFilter && (examStartStr <= filters.endDate)
      }
      
      return passesDateFilter
    })
  }

  if (filters.status !== 'all') {
    if (Array.isArray(filters.status) && filters.status.length > 0) {
      
      result = result.filter(exam => {
        const examStatus = exam.status;
        return filters.status.includes(examStatus);
      });
      
    }
  }

  setFilteredExams(result)
}, [exams, filters])


  useEffect(() => {
    applyAllFilters() 
  }, [applyAllFilters])

  const fetchExam = async () => {
    try {
      const response = await getUserExam()

      const examData = response.data.data || []

      const mapped = examData.map((data) => ({
      id: data.id,
      title: data.titles,
      questions: data.total_questions,
      status: data.status,
      subject: data.category?.name,
      startDate: data.start_time || null,
      endDate: data.end_time || null,
    }));
    setExams(mapped);
    setFilteredExams(mapped);
    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(() => {
    fetchExam()
  }, [])

  const handleSearchChange = (searchTerm) => {
    setFilters(prev => ({
      ...prev,
      search: searchTerm
    }))
  }

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }))
  }

  const resetAllFilters = () => {
    setFilters({
    search: '',
    startDate: null,
    endDate: null,
    status: 'all'
    })
  }

  const hasActiveFilters = useMemo(() => {
  const hasStatusFilter = Array.isArray(filters.status) 
    ? filters.status.length > 0 && filters.status.length < 3
    : filters.status !== 'all';
    
  return filters.search.trim() !== '' ||
          filters.startDate !== null ||
          filters.endDate !== null ||
          hasStatusFilter
}, [filters])

  const isSearching = hasActiveFilters

  return (
    <div className='px-4 sm:px-6 lg:px-8 py-6 lg:py-10 max-w-[1198px] mx-[10px] xl:mx-auto min-h-screen'>
      <div className="flex justify-between items-center mb-6 lg:mb-6">
        <p className="block sm:hidden text-xl font-medium text-black">Pilih Ujian</p>
        <p className="hidden sm:block text-xl lg:text-2xl font-medium text-black tracking-custom leading-custom">Daftar Ujian</p>
        <div className="hidden sm:block">
        <EnterExamButton className='px-6.5 py-4' />
        </div>
      </div>
      <div className="flex justify-between items-center mb-6 lg:mb-8 gap-3 md:gap-0 ">
        <SearchItem onSearchChange={handleSearchChange}
          delay={500}/>
        <FilterItem 
        onFilterChange={handleFilterChange}
        filters={filters}
        onReset={resetAllFilters}/>     
      </div>
      <div className="block sm:hidden w-full flex justify-end mb-4">
        <EnterExamButton className="w-full max-w-[120px] text-sm py-3 px-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredExams.length > 0 ? (
          filteredExams.map((exam) => (
          <div key={exam.id} className="flex justify-center">
            <ExamCard exam={exam} />
          </div>
        ))
      ) : isSearching ? (
        <div className="col-span-full text-center py-12">
          <div className="text-gray-400 mb-4 flex justify-center">
            <img src="/image/data-not-found.png" alt="" />
          </div>
            <h3 className="text-[22px] font-semibold text-[#373737] mb-2">
             Oops! Data tidak ditemukan
            </h3>    
            <p className='text-lg text-[#828282]'>Silahkan periksa kembali <br /> filter atau kata kunci.</p>        
          </div>
      ) : null}
      </div>
    </div>
  )
}

export default ExamListPage
