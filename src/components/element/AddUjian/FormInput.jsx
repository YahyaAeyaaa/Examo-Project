    import React from 'react';

    const FormInput = ({ 
    label, 
    name, 
    type = "text", 
    value, 
    onChange, 
    placeholder, 
    required = false,
    min,
    max,
    rows,
    className = ""
    }) => {
    const baseClasses = "w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
    
    const renderInput = () => {
        if (type === "textarea") {
        return (
            <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows || 4}
            className={`${baseClasses} resize-none ${className}`}
            required={required}
            />
        );
        }
        
        return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${baseClasses} ${className}`}
            required={required}
            min={min}
            max={max}
        />
        );
    };

    return (
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
        </label>
        {renderInput()}
        </div>
    );
    };

    export default FormInput;