

const Select = ({ name, value, onChange, options = [], className = "", required }) => {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className={`p-4 w-full rounded-2xl mb-4 overflow-hidden ${className}`}
        >
        <option value=""></option> 
            {options.map((opt, index) => (
            <option key={index} value={opt.value}>{opt.label}</option>
        ))}
        </select>
    );
};

export default Select;
