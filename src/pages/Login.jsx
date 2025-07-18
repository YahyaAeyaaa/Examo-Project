import AuthCoyy from "../components/Layout/AuthCoyy"
import FromLogin from "../components/Fragment/FromLogin"

const Login = () => {
    return (
        <AuthCoyy title1="Selamat Datang!" 
        title2="Masuk untuk menikmati layanan kami"
        type="Login"
        >
            <FromLogin />
        </AuthCoyy>
    )
}

export default Login