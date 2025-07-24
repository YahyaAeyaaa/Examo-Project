import SearchInput from "../element/InputCearch/Input"
import { RiVipCrownFill } from "react-icons/ri"
import { RiStickyNoteAddFill } from "react-icons/ri"
import { FaRegTrashAlt } from "react-icons/fa"
import Button from "../element/button/button"


const DaftarCardUjian = (props) => {
    const { children } = props
    return (
    <div className="flex justify-center items-center gap-5 mb-7 flex-wrap">
        <section className="rounded p-5 bg-white group overflow-hidden transition-all duration-500 hover:scale-105 shadow-md" style={{ width: '430px' }}>
            {children}
        </section>
    </div>
    )
}

const Header = (props) => {
    const {image} = props
    return (
            <div className="flex items-center justify-center rounded mb-3"  style={{ background : '#D5EDFF' }} >
                <img src={image} alt="" className="mb-4 group-hover:scale-110 transition-all duration-300"/>
            </div>
    )
}

const Body = (props) => {
    const { title , kondisi , jumplahPertanyaan } = props
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold break-words whitespace-normal">{title}</h1>
                <div className="p-2 rounded-full w-20 h-9 flex items-center justify-center " style={{ background : '#E9FFF2' }} >
                <h1 style={{ color : "#2ECC71" }} >{kondisi}</h1>
                </div>
            </div>
            <p className="text-sm mb-3" style={{ color : '#A9A9A9' }}>{jumplahPertanyaan}</p>
        </>
    )
}

const Footer = () => {
    return (
            <div className="flex justify-between items-center gap-2">
                <Button text="Selengkapnya" className="w-full rounded p-2 text-white" />
                <button style={{ background : '#FFEAEB' }} className="w-10 h-10 rounded flex items-center justify-center cursor-pointer">
                    <FaRegTrashAlt style={{ color : '#D21F28' , width : '17.88854217529297px' , height : '20.12461280822754px'}} />
                </button>
            </div>
    )
}

DaftarCardUjian.Header = Header
DaftarCardUjian.Body = Body
DaftarCardUjian.Footer = Footer

export default DaftarCardUjian