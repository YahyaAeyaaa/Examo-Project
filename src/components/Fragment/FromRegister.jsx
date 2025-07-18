import Index from "../element/input"
import Button from "../element/button/button"

const FromRegister = () => {
    return (
        <form>
            <Index 
                type="text"
                name="username"
                placeholder="Username"
            />
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
            <Index 
                type="password"
                name="confirmPassword"
                placeholder="confirm Password"
            />
            <Button text="Register" type="submit" />
        </form>
    )
}

export default FromRegister
