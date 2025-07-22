import { MdDashboard } from "react-icons/md";
import { PiNotepadFill } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineExpandMore } from "react-icons/md";


const Sidebar = ({sidebarToggle}) => {
    return (
        <>
        <div className={`transition-all duration-300  ${sidebarToggle ? "hidden" : "block"} w-64 fixed h-full p-8 bg-white filter drop-shadow-lg`}>
            <div>
                <h1 className="font-bold text-4xl text-blue-500 mb-8">Examo</h1>
                <p className="mb-7">Fitur Examo</p>
            </div>
            <ul className="text-lg">
                <li className="mb-7">
                    <MdDashboard className="inline-block mr-2 w-7 h-7"/> Dashboard
                </li>
                <li className="mb-7">
                    <PiNotepadFill className="inline-block mr-2 w-7 h-7" /> Daftar Ujian
                </li>
                <li className="mb-7">
                    <IoBookSharp className="inline-block mr-2 w-7 h-7" /> Bank Soal
                </li>
            </ul>
            <hr className="border-dashed border-t-2 border-gray-300" />
            <p className="my-5 text-slate-700" >Sistem</p>
            <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-2 space-x-2 ">
                        <MdPayment className="w-7 h-7"/>
                            <span>Langganan</span>
                            <MdOutlineExpandMore className="group-open:rotate-180 transition-transform" />
                </summary>
    
                <div className="flex mt-2">
                    <div className="border-l-2 border-dashed border-gray-300 ml-2 mr-4 h-20"></div>
                    <div className="space-y-3 py-2">
                        <div className="flex items-center space-x-3 text-gray-600">
                            <span>Paket</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                            <span>Riwayat</span>
                        </div>
                    </div>
                </div>
            </details>
            <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-2 space-x-2 ">
                        <IoMdSettings className="w-7 h-7"/>
                            <span>Pengaturan</span>
                            <MdOutlineExpandMore className="group-open:rotate-180 transition-transform" />
                </summary>
    
                <div className="flex mt-2">
                    <div className="border-l-2 border-dashed border-gray-300 ml-2 mr-4 h-20"></div>
                    <div className="space-y-3 py-2">
                        <div className="flex items-center space-x-3 text-gray-600">
                            <span>Kredensial</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                            <span>Profile</span>
                        </div>
                    </div>
                </div>
            </details>
            
                </div>
        </>
    )
}

export default Sidebar