function Label(props) {
    const { children, className = "" , htmlFor = "" , name = "" } = props
    return (
            <label htmlFor={htmlFor} name={name} className={`block mb-1 ${className}`}>
        {children}
            </label>
    )
}

export default Label;