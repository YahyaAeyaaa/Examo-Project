import React from 'react'
import { IoMdPlay } from "react-icons/io";

const ButtonStart = () => {
  return (
   <button className="flex items-center justify-center gap-2 bg-primary-blue w-full text-white text-base font-semibold py-2.5 rounded-lg transition duration-300 mt-4">
        <IoMdPlay />
        Mulai Ujian
   </button>
  )
}

export default ButtonStart
