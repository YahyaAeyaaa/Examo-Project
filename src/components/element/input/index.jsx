import Input from "./input";

const Index = (props) => {
    const { type, placeholder, name, value, onChange, required, className, error } = props;

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
            {error && (
                <p className="text-red-500 text-sm mt-1 ml-2">{error}</p>
            )}
        </>
    );
};

export default Index;
