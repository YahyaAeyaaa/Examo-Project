import React from 'react'
import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const InputItems = ({label, placeholder, type = 'text', options = [], value, onChange, name}) => {
  const [isOpen, setIsOpen] = useState(false)

  if (type === 'select') {
    const getDisplayText = () => {
      if (!value) return placeholder;
      const selectedOption = options.find(option => option.value === value)
      return selectedOption ? selectedOption.label : value
    }
    return (
      <div>
        <label htmlFor="" className="block mb-1 text-base lg:text-lg">{label}</label>
        <div className="relative">
          <div onClick={() => setIsOpen(!isOpen)}
            className='w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer flex justify-between items-center bg-white'>
          <span className={value ? 'text-gray-900' : 'text-gray-400'}> {getDisplayText()} </span>
          <button 
            className={`text-[#676767] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
              <IoIosArrowDown />
          </button>
          </div>
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 mt-1">
              {options.map((option) => (
                <div key={option.value}  
                  className="px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer first:rounded-t-lg last:rounded-b-lg"
                  onClick={() => {
                    onChange(name, option.value);  
                    setIsOpen(false);
                  }}>
                  {option.label}  
                </div>
              ))}
           </div>
          )}
        </div>
      </div>
    )
  }
  return (
    <div>
        <label className="block mb-1 text-base lg:text-lg">{label}</label>
        <input type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(name, e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
    </div>
  )
}

export default InputItems
