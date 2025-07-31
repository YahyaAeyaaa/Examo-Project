import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Check, X } from 'lucide-react';

const InputPassword = ({
  label, 
  placeholder,
  value,              
  onChange,          
  showValidation = false,  
  validationRules = [],   
  error = ""              
}) => {
  
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div>
      <label className="block mb-1 text-base lg:text-lg">{label}</label>
      <div className="relative">
        <input 
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}          
          onChange={onChange}     
          className={`w-full border rounded-lg px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 ${
            error 
              ? 'border-red-500 focus:ring-red-400'     
              : 'border-[#D9D9D9] focus:ring-blue-400'
          } text-[#777777]`}
        />
        <button
          type="button"
          onClick={togglePassword}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {showPassword ? (
            <FaEyeSlash size={20} />
          ) : (
            <IoEyeSharp size={20} />
          )}
        </button>
      </div>

      {showValidation && validationRules.length > 0 && (
        <div className="mt-2">
          <p className="text-sm text-red-600 mb-2">
            Tambahkan semua karakter yang diperlukan untuk membuat kata sandi yang aman:
          </p>
          <ul className="space-y-1">
            {validationRules.map((rule, index) => (
              <li key={index} className="flex items-center text-sm">
                {rule.isValid ? (
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                ) : (
                  <X className="w-4 h-4 text-red-500 mr-2" />
                )}
                <span className={rule.isValid ? 'text-green-600' : 'text-red-600'}>
                  {rule.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

export default InputPassword
