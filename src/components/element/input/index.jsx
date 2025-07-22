import Input from "./input"

const Index = (props) => {
    const { type, placeholder, name, value, onChange, required } = props
    return (
        <>
        <Input 
            type={type} 
            placeholder={placeholder} 
            name={name}
            value={value}
            onChange={onChange}
            required={required}
        />
        </>
    )
}

export default Index