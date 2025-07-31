import { Lock, Eye, EyeOff, Mail, User } from 'lucide-react';

const Input = ({ 
    type, 
    placeholder, 
    name, 
    value, 
    onChange, 
    required, 
    className,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    onRightIconClick,
    error,
    ...props 
}) => {
    return (
        <div className="mb-5 mt-2">
            <div className="relative">
                {LeftIcon && (
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#A6AABB] z-10 bg-white p-1 rounded-full">
                        <LeftIcon size={18} />
                    </div>
                )}
                
                <input 
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value || ''}
                    onChange={onChange}
                    required={required}
                    className={`
                        py-3 px-4 bg-[#F5F8FE] w-full rounded-2xl 
                        focus:outline-none focus:ring-2 
                        ${error ? 'focus:ring-red-400 border border-red-300' : 'focus:ring-gray-300 text-[#444652]'}
                        ${LeftIcon ? 'pl-12' : 'pl-4'}
                        ${RightIcon ? 'pr-12' : 'pr-4'}
                        ${className}
                    `}
                    {...props}
                />
                
                {RightIcon && (
                    <button
                        type="button"
                        onClick={onRightIconClick}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10 transition-colors"
                    >
                        <RightIcon size={20} />
                    </button>
                )}
            </div>
            
            {error && (
                <p className="text-red-500 text-sm mt-2 ml-2 font-Poppins">
                    {error}
                </p>
            )}
        </div>
    )
};

export default Input