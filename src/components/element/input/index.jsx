import Input from "./input"

const Index = (props) => {
    const { type , placeholder , name } = props
    return (
        <>
        <Input type={type} placeholder={placeholder} name={name} />
        </>
    )
}

export default Index