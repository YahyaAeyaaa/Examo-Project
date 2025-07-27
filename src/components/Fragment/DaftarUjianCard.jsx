import { RiVipCrownFill } from "react-icons/ri"
import { RiStickyNoteAddFill } from "react-icons/ri"
import { FaRegTrashAlt } from "react-icons/fa"
import Button from "../element/button/button"
import { cn } from "../../lib/utils"
import { Link } from "react-router-dom"

const DaftarCardUjian = (props) => {
    const { children } = props
    return (
        <div className="flex justify-center items-center">
            <section className="rounded-[10px] p-5 bg-white group overflow-hidden transition-all duration-500 hover:scale-105 shadow-md w-[356px] lg:w-[430px]">
                {children}
            </section>
        </div>
    )
}

const Header = (props) => {
    const {image} = props
    return (
        <div className="flex items-center justify-center rounded-[10px] mb-3 py-3" style={{ background : '#D5EDFF' }}>
            <img src={image} alt="" className="mb-4 group-hover:scale-110 transition-all duration-300 w-40 h-auto object-cover"/>
        </div>
    )
}

const Body = (props) => {
    const { title, kondisi, jumlahPertanyaan } = props
    
    // Function untuk styling status
    const getStatusStyle = (status) => {
        return cn(
            "text-xs lg:text-[13px] px-3 lg:px-4 py-1 rounded-full font-medium text-center min-w-[80px]",
            {
                "bg-[#E9FFF2] text-[#2ECC71]": status?.toLowerCase() === "aktif",
                "bg-[#FFEAEB] text-[#D21F28]": status?.toLowerCase() === "nonaktif", 
                "bg-[#FFF9E5] text-[#F8BD00]": status?.toLowerCase() === "berlangsung",
                "bg-gray-100 text-gray-600": !["aktif", "nonaktif", "berlangsung"].includes(status?.toLowerCase())
            }
        );
    };

    return (
        <>
            <div className="flex justify-between items-start mb-3">
                <h1 className="text-base md:text-lg font-semibold break-words whitespace-normal flex-1 mr-3">
                    {title}
                </h1>
                <div className={getStatusStyle(kondisi)}>
                    <span>{kondisi}</span>
                </div>
            </div>
            <p className="text-sm mb-4" style={{ color : '#A9A9A9' }}>{jumlahPertanyaan}</p>
        </>
    )
}

const Footer = (props) => {
    const { examData, onDelete, showDelete = true } = props
    
    // Check if exam is nonaktif to disable button
    const isNonaktif = examData?.status?.toLowerCase() === "nonaktif"
    
    return (
        <div className="flex justify-between items-center gap-2">
            <Link 
                to={isNonaktif ? "#" : `/ujian/${examData?.id || ''}`}
                className={cn(
                    "flex-1 text-center rounded-[5px] p-2 text-white font-semibold transition duration-300",
                    {
                        "bg-gradient-to-b from-[#0081FF] to-[#025BB1] hover:brightness-110": !isNonaktif,
                        "bg-gray-300 text-gray-500 cursor-not-allowed": isNonaktif,
                    }
                )}
                onClick={isNonaktif ? (e) => e.preventDefault() : undefined}
            >
                {isNonaktif ? "Tidak Tersedia" : "Selengkapnya"}
            </Link>
            
            {showDelete && (
                <button 
                    onClick={() => onDelete && onDelete(examData?.id)}
                    style={{ background : '#FFEAEB' }} 
                    className="w-12 h-10 rounded-[5px] flex items-center justify-center cursor-pointer hover:bg-red-100 transition-colors"
                >
                    <FaRegTrashAlt style={{ color : '#D21F28', width : '16px', height : '18px'}} />
                </button>
            )}
        </div>
    )
}

DaftarCardUjian.Header = Header
DaftarCardUjian.Body = Body
DaftarCardUjian.Footer = Footer

export default DaftarCardUjian