import React from 'react'
import ExamRuleCard from '../../components/exam-detail/ExamRuleCard'
import DetailCard from '../../components/exam-detail/DetailCard'
import ExamHeader from '../../components/exam-detail/ExamHeader'

const ExamDetail = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-9 py-8 lg:pt-12 max-w-[1198px] mx-[10px] xl:mx-auto'>
      <ExamHeader />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6'>
        <DetailCard />
        <ExamRuleCard />
      </div>
    </div>

  )
}

export default ExamDetail
