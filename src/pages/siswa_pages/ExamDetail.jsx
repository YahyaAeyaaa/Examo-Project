import React, { useEffect, useState } from 'react'
import ExamRuleCard from '../../components/exam-detail/ExamRuleCard'
import DetailCard from '../../components/exam-detail/DetailCard'
import ExamHeader from '../../components/exam-detail/ExamHeader'
import { useParams } from 'react-router-dom'
import  { getExamDetail } from '../../config/api'

const ExamDetail = () => {
  const {id} = useParams();
  const [examData, setExamData] = useState(null)

  useEffect(() => {
    console.log('Exam ID:', id)
    fetchExamDetail(id)
  }, [id])

  const fetchExamDetail = async (examId) => { 
  try {
    const response = await getExamDetail(examId); 
    console.log('API Response:', response.data);
    setExamData(response.data);
  } catch (error) {
    console.error('Error fetching exam:', error);
  }
};

  return (
    <div className='px-4 sm:px-6 lg:px-9 py-8 lg:pt-12 max-w-[1198px] mx-[10px] xl:mx-auto'>
      <ExamHeader />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6'>
        <DetailCard examData={examData} />
        <ExamRuleCard />
      </div>
    </div>

  )
}

export default ExamDetail
