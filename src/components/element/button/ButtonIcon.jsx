const IconButton = (props) => {
    const {className = ""} = props
    return (
        <>
            <button 
                className={`bg-gray-300 w-14 h-14 p-3 rounded-full flex items-center justify-center cursor-pointer ${className}`}>
                <img 
                    src="/image/google-removebg-preview.png" 
                    alt="Google"
                    className={`w-6 h-6 object-contain ${className}`} />
            </button>
            <button 
                className={`bg-gray-300 w-14 h-14 p-3 rounded-full flex items-center justify-center cursor-pointer ${className}`}>
                <img 
                    src="/image/Group8.png" 
                    alt="Group8"
                    className={`w-6 h-6 object-contain ${className}`} />
            </button>
            <button 
                className={`bg-gray-300 w-14 h-14 p-3 rounded-full flex items-center justify-center cursor-pointer ${className}`}>
                <img 
                    src="/image/apple.png" 
                    alt="Apple"
                    className={`w-6 h-6 object-contain ${className}`} />
            </button>
        </>
    )
}

export default IconButton
