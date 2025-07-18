const Button = (props) => {
    const { text = "Tombol Nich" , className = "" , type} = props
    return (
        <>
            <button className={`cursor-pointer bg-blue-500 p-2 rounded-2xl w-full text-white${className}`}
            type={type}
            >
            {text}
            </button>
        </>
    )
}

export default Button