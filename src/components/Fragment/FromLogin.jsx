import Index from "../element/input/index"
import Button from "../element/button/button"

const FromLogin = () => {
    return (
        <form>
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
