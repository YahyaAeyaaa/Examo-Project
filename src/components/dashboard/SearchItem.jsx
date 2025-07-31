import { Search } from 'lucide-react'
import { useEffect, useState, useRef } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    }
  }, [value, delay])
  
  return debouncedValue
}

const SearchInput = ({ className = '', inputClassName = '', onSearchChange, delay = 500, ...props }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, delay)
  
  const onSearchChangeRef = useRef(onSearchChange)
  
  useEffect(() => {
    onSearchChangeRef.current = onSearchChange
  }, [onSearchChange])

  useEffect(() => {
    if (onSearchChangeRef.current) {
      onSearchChangeRef.current(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm]) 

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className={`relative w-full max-w-[347px] h-10 ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#AAAAAA] w-5 h-5" />
      <input
        type="text"
        placeholder="Telusuri"
        value={searchTerm}
        onChange={handleInputChange}
        className={`w-full bg-white pl-10 pr-4 py-2 text-[#AAAAAA] text-sm border border-gray-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${inputClassName}`}
        {...props}
      />
    </div>
  )
}

export default SearchInput