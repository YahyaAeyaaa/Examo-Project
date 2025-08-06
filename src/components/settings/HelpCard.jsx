import React from 'react'
import SearchItems from './items/SearchItems'
import DropdownItems from './items/DropdownItems'

const dummyQuestion = [
  {
    question: "Saya lupa password, bagaimana cara mengatasinya?",
    answer: `Klik tombol "Lupa Password" di halaman login, lalu ikuti langkah-langkah reset password melalui email.`
  },
  {
    question: "Saya lupa password, bagaimana cara mengatasinya?",
    answer: `Klik tombol "Lupa Password" di halaman login, lalu ikuti langkah-langkah reset password melalui email.`
  },
  {
    question: "Saya lupa password, bagaimana cara mengatasinya?",
    answer: `Klik tombol "Lupa Password" di halaman login, lalu ikuti langkah-langkah reset password melalui email.`
  },
  {
    question: "Saya lupa password, bagaimana cara mengatasinya?",
    answer: `Klik tombol "Lupa Password" di halaman login, lalu ikuti langkah-langkah reset password melalui email.`
  },
  {
    question: "Saya lupa password, bagaimana cara mengatasinya?",
    answer: `Klik tombol "Lupa Password" di halaman login, lalu ikuti langkah-langkah reset password melalui email.`
  },
]

const HelpCard = () => {
  return (
    <div className='max-w-[740px] px-12 py-12 bg-white rounded-[20px] shadow-md'>
      <SearchItems />
      <h1 className='mt-4 font-medium'>Sering Ditanyakan</h1>
      <div className="mt-4 space-y-2">
        {dummyQuestion.map((question, index) => (
        <DropdownItems 
          key={question.id || index}
          question={question.question}
          answer={question.answer}
        />
      ))}
      </div>
    </div>
  )
}

export default HelpCard
