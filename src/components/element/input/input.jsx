const Input = (props) => {
        const { type, placeholder, name, value, onChange, required , className} = props
    return (
        <>
        <input 
        type={type}
        placeholder={placeholder}
        name={name}
        value={value || ''}
        onChange={onChange}
        required={required}
        className={`p-4 bg-blue-50 w-full rounded-2xl mb-5 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
            /> 
        </>
    )
}
export default Input