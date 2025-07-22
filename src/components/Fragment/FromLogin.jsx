import Index from "../element/input/index"
import Button from "../element/button/button"



function FromLogin ()  {
        const handleRegister = (e) => {
        e.preventDefault
        window.location.href = 'HomeGuru'
        localStorage.setItem('email' , event.target.email.value)
        localStorage.setItem('password' , event.target.password.value)
    }
    return (
        <form onSubmit={handleRegister}>
            <Index 
                type="email"
                name="email"
                placeholder="email"
            />
            <Index 
                type="password"
                name="password"
                placeholder="password"
            />
            <p className="text-blue-500 text-right mb-5 cursor-pointer">
                Lupa Password?
            </p>
            <Button text="Login" type="submit" />
        </form>
    )
}

export default FromLogin
