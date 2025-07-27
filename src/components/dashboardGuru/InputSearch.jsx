import { CiSearch } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { HiOutlineAcademicCap, HiOutlineDocumentText } from "react-icons/hi";
import { BiBook } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

// Base IconInput component (sama kayak sebelumnya)
function IconInput ({ children = "", placeholder = "text", type = "text", className = "", value, onChange, onKeyDown, name, disabled }) {
    return (
        <div className={`relative ${className}`}>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
                {children}
            </div>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                name={name}
                disabled={disabled}
                className={`lg:w-80 lg:rounded-2xl lg:p-3 lg:pl-12 pl-10 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white w-full ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
        </div>
    )
}

// Komponen input dengan icon built-in
export const SearchInput = ({ placeholder = "Telusuri...", value, onChange, onSearch, name, disabled = false, className }) => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && onSearch && !disabled) {
            onSearch(e.target.value);
        }
    };

    return (
        <IconInput 
            placeholder={placeholder}
            type="text"
            className={className}
            value={value}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            name={name}
            disabled={disabled}
        >
            <CiSearch size={20}/>
        </IconInput>
    );
};

export default SearchInput;