import AuthCoyy from "../components/Layout/AuthCoyy"
import FromRegister from "../components/Fragment/FromRegister"

const Register = () => {
        return (
        <AuthCoyy title1="Siap Bergabung!" 
        title2="Ayo buat akun anda sekarang"
        type="Register"
        >
            <FromRegister />
        </AuthCoyy>
    )
}

export default Register