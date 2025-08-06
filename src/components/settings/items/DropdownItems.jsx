import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const DropdownFAQ = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border border-[#00000026] rounded-[10px] overflow-hidden ${isOpen ? 'bg-[#0081FF26]' : 'bg-white'}`}>
      <div 
        className='px-6 py-4 cursor-pointer transition-colors'
        onClick={toggleDropdown}
      >
        <div className='flex justify-between items-center'>
          <p className={`font-medium text-[15px]  ${isOpen ? 'text-primary-blue' : 'text-[#676767]'}`}>
            {question}
          </p>
          <button 
            className={`text-[#676767] transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <IoIosArrowDown />
          </button>
        </div>
      </div>
      
      <div className={`transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className='px-6 pb-4 '>
         <div className="flex items-start">
          <div className="w-1 rounded-full bg-primary-blue self-stretch"></div>
          <div className="pl-4 py-2">
            <p className="text-[14px] text-[#555555] leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

// Contoh penggunaan dengan beberapa FAQ
export default DropdownFAQ