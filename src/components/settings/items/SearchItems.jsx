import React from 'react'
import { Search } from 'lucide-react'

const SearchItems = () => {
  return (
    <div className='relative w-full'>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#AAAAAA] w-5 h-5" />
      <input
        type="text"
        placeholder="Ketik kata kunci"
        // value={searchTerm}
        // onChange={handleInputChange}
        className='w-full bg-white pl-10 pr-4 py-3 text-[#AAAAAA] text-base border border-[#00000026] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'/>
    </div>
  )
}

export default SearchItems
