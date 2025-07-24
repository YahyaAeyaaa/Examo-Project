const IconButton = (props) => {
    const {className = ""} = props
    return (
        <>
            <button 
                className={`w-auto h-14 p-3 rounded-4xl flex gap-3 items-center justify-center cursor-pointer ${className}`
                }
                style={{ background : '#F5F8FE' }}
                >
                <img 
                    src="/image/google-removebg-preview.png" 
                    alt="Google"
                    className={`w-6 h-6 object-contain ${className}`} />
                    <h1>Google</h1>
            </button>
        </>
    )
}

export default IconButton
