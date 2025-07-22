import { Link } from "react-router-dom"
import IconButton from "../element/button/ButtonIcon"
import Button from "../element/button/button";

const AuthCoyy = (props) => {
    const { children , title1 , title2 , type } = props
    return (
        <>
        <div className="min-h-screen flex items-center relative overflow-hidden max-w-full">
            <div className="w-1/2 flex items-center justify-center">
                <div className="w-120 h-auto rounded-2xl p-5">
                    <h1 className="font-Poppins font-semibold text-2xl text-center">
                        {title1}
                    </h1>
                    <p className="font-Poppins text-slate-500 text-center mb-4">
                        {title2}
                    </p>
                    {children}
                    <Nav type={type} />
                </div>
            </div>
                    <div className="w-1/2 relative flex items-center left-20">
            <div className="bg-blue-100 w-350 h-350 absolute rounded-full flex items-center justify-center">
            <div className="bg-blue-200 w-300 h-300 rounded-full flex items-center justify-center">
                <div className="bg-blue-300 w-250 h-250 rounded-full">
                <img src="/image/gmbr.png" alt="" className="relative flex items-center right-65 top-25"/>
                </div>
            </div>
            </div>
        </div>
            </div>
        </>
    )
}; 

function Nav({ type }) {
    if (type === 'Login') {
        return (
            <>
                <div className="flex items-center my-6">
                    <hr className="flex-1 border-gray-300" />
                    <span className="px-4 text-sm text-gray-500">Atau Login Dengan</span>
                    <hr className="flex-1 border-gray-300" />
                </div>
                <div className="flex justify-center gap-3 items-center ">
                    <IconButton />
                </div>
                <p className="text-sm mt-8 text-center">
                    Belum punya akun ?{" "}
                    <Link to="/" className="text-blue-500 cursor-pointer">Daftar</Link>
                </p>
            </>
        )
    } else {
        return (
            <>
                <div className="flex items-center my-6">
                    <hr className="flex-1 border-gray-300" />
                    <span className="px-4 text-sm text-gray-500">Atau Register Dengan</span>
                    <hr className="flex-1 border-gray-300" />
                </div>
                <div className="flex justify-center gap-3 items-center ">
                    <IconButton />
                </div>
                <p className="text-sm mt-8 text-center">
                    Sudah punya akun ?{" "}
                    <Link to="/Login" className="text-blue-500 cursor-pointer">Login</Link>
                </p>
            </>
        )
    }
}



export default AuthCoyy
