import React from 'react'
import { RiVipCrownFill } from "react-icons/ri"

const PremiumBadge = ({ endDate = "30 Juli 2025" }) => {
  return (
    <div className="bg-amber-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full lg:w-auto"> 
      <div className="flex items-center gap-2 mb-1">
        <h1 className="text-amber-600 font-medium text-sm lg:text-base">Akun Premium</h1>
        <RiVipCrownFill className="text-amber-400 w-4 h-4 lg:w-5 lg:h-5"/>
      </div>
      <p className="text-xs lg:text-sm text-gray-600">
        Berakhir pada : {endDate}
      </p>
    </div>
  )
}

export default PremiumBadge