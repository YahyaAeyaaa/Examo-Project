import React from 'react'

const InputItems = ({label, placeholder}) => {
  return (
    <div>
        <label className="block mb-1 text-base lg:text-lg">{label}</label>
        <input type="text" placeholder={placeholder} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
    </div>
  )
}

export default InputItems
