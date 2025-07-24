import Input from "./input"

const Index = (props) => {
    const { type, placeholder, name, value, onChange, required, className } = props
    return (
        <>
        <Input 
            type={type} 
            placeholder={placeholder} 
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className={className} // terusin ke Input
        />
        </>
    )
}

export default Index
