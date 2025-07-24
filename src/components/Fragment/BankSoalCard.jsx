import Button from "../element/button/button"
import { FaRegTrashAlt } from "react-icons/fa"

const CardBankSoal = (props) => {
    const {children} = props
    return (
        <>
        <div className="flex items-center justify-center gap-5">
        <section className="rounded p-3 bg-white group overflow-hidden transition-all duration-500 hover:scale-105" style={{ width: '300px' }}>
            {children}
        </section>
        </div>
        </>
    )
}

const Header = (props) => {
    const {image} = props
    return (
            <div className="flex items-center justify-center rounded mb-3"  style={{ background : '#D5EDFF' }} >
                <div className="bg-white p-3 my-13 rounded">
                <img src={image} alt="" className=" group-hover:scale-110 transition-all duration-300"/>
                </div>
            </div>
    )
}

const Body = (props) => {
    const {title , time , description} = props
    return (
        <>
            <div className="flex justify-between items-center ">
                <h1 className="text-lg font-semibold">{title}</h1>
                    <h1 style={{ color : "#D3D3D3" , fontSize : '13px' }} >{time}</h1>
            </div>
            <p className="text-sm mb-3" style={{ color : '#5E5E5E' }}>{description}</p>
        </>
    )
}

const Footer = () => {
    return(
        <div className="flex justify-between items-center gap-2">
                <Button text="Detail" className="w-full rounded p-1 text-white" />
                <button style={{ background : '#FFEAEB' }} className="w-10 h-10 rounded flex items-center justify-center cursor-pointer">
                    <FaRegTrashAlt style={{ color : '#D21F28' , width : '17.88854217529297px' , height : '20.12461280822754px'}} />
                </button>
            </div>
    )
}

CardBankSoal.Header = Header
CardBankSoal.Body = Body
CardBankSoal.Footer = Footer

export default CardBankSoal