const Button = (props) => {
    const { 
        text = "Tombol Nich",
        className = "",
        type,
        color = "bg-blue-500" ,
        texts = ""
    } = props
    
    return (
        <button 
            type={type}
            className={`${color} ${className} px-4 py-2 ${texts} rounded hover:opacity-80`}
        >
            {text}
        </button>
    )
}

export default Button