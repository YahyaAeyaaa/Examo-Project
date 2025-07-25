import { Search } from 'lucide-react'

const SearchInput = ({ className = '', inputClassName = '', ...props }) => {
  return (
    <div className={`relative w-full max-w-[347px] h-10 ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#AAAAAA] w-5 h-5" />
      <input
        type="text"
        placeholder="Telusuri"
        className={`w-full bg-white pl-10 pr-4 py-2 text-[#AAAAAA] text-sm border border-gray-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${inputClassName}`}
        {...props}
      />
    </div>
  )
}

export default SearchInput
