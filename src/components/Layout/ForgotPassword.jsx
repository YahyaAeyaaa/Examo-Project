import { Link } from "react-router-dom"
import IconButton from "../element/button/ButtonIcon"
import { FaArrowLeft } from "react-icons/fa6";

const ForgotPassword = (props) => {
    const { children , title , desc } = props
    return (
        <>
        <div className="min-h-screen flex md:items-center relative overflow-hidden max-w-full">
            <div className="w-full md:w-1/2 flex md:items-center justify-center">
                <div className="w-[450px] h-auto rounded-2xl py-12 px-8">
                    <button className="p-4 rounded-full text-[#555555] bg-[#F5F8FE] mb-8 border-shadow">
                        <FaArrowLeft />       
                    </button>
                    <div className="block md:hidden flex justify-center">
                    <img className="" src="/image/rafiki.png" alt="" />
                    </div>
                    <h1 className="font-Poppins font-semibold text-[28px] lg:text-[40px] text-left mb-6">
                        {title}
                    </h1>
                    <p className="font-Poppins text-[#585858] text-sm lg:text-lg text-left mb-8">
                        {desc}
                    </p>
                    {children}
                </div>
            </div>
                    <div className="w-1/2 relative md:flex items-center left-20 hidden">
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


export default ForgotPassword
