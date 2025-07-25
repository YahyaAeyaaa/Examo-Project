import React from 'react'

const EnterExamButton = ({className}) => {
  return (
    <button
      className={`bg-primary-blue text-white text-lg font-semibold tracking-custom rounded-[10px] leading-custom hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 ${className}`}>
      Masuk Ujian
    </button>
  )
}

export default EnterExamButton
