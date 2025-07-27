    import React from 'react';

    const FormSelect = ({ 
    label, 
    name, 
    value, 
    onChange, 
    options = [], 
    className = "",
    required = false 
    }) => {
    return (
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
        </label>
        <select
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
            required={required}
        >
            {options.map(option => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
            ))}
        </select>
        </div>
    );
    };

    export default FormSelect;