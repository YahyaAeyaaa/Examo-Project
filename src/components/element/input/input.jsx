const Input = (props) => {
        const { type = "" , placeholder = "placeholder" , className = "" , name} = props
    return (
        <>
        <input 
        type={type}
        placeholder={placeholder}
        className={`p-4 bg-blue-50 w-full rounded-2xl mb-5 mt-2${className}`}
        name={name}
            /> 
        </>
    )
}
export default Input