import { useState } from "react"
import Sidebar from "../components/element/Navigasi/Sidebar"
import Dashboard from "../components/element/Navigasi/Dashoard"
import { RiVipCrownFill } from "react-icons/ri";  
import { RiStickyNoteAddFill } from "react-icons/ri";
import Button from "../components/element/button/button";
import { FaRegTrashAlt } from "react-icons/fa";
import SearchInput from "../components/element/InputCearch/Input";






const HomeGuru = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);
    return (
        <>
        <div className="flex">
            <Sidebar 
                sidebarToggle={sidebarToggle}
            />
            <Dashboard 
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
            />
            </div>
            <main className={`bg-gray-100 min-h-screen transition-all duration-300 ${sidebarToggle ? "ml-0" : "ml-64"}`}>
                {/* Header Section dengan Search dan Premium Badge */}
                <div className="lg:flex lg:items-center lg:justify-between lg:p-8 sm:block">

                        <SearchInput />
                        
                    <div className="bg-amber-50 p-4 rounded-lg shadow-sm"> 
                        <div className="flex items-center gap-2 mb-1">
                            <h1 className="text-amber-600 font-medium">Akun Premium</h1>
                            <RiVipCrownFill className="text-amber-400"/>
                        </div>
                        <p className="text-sm text-gray-600">Berakhir pada : 30 Juli 2025</p>
                    </div>
                </div>
                {/* Main Content Area */}
                <div className="px-8 pb-8">
    {/* Stats Cards */}
    <div className="grid grid-cols-4 gap-10 md:cols-span-3 sm:cols-span-1 mb-10">
        <div 
        className="rounded-2xl shadow min-h-56 md:col-span-2 sm:col-span-1 p-11 flex justify-between items-start" 
        style={{ background: 'linear-gradient(to right, #FFFFFF, #D8EFFF)' }}>
            {/* Text Content */}
            <div className="flex-1 pr-4">
                <h1 className="text-2xl font-semibold mb-3" style={{ color : '#2A2A2A' }}>Halo, Sobat Examno!</h1>
                <p className="text-lg mb-2" style={{ color : '#2A2A2A' }}>apa yang akan kamu lakukan hari ini?</p>
                <p className="text-wrap" style={{ color : '#2A2A2A' }}>nikmati berbagai fitur menarik dan hebat dari examo. Buat ujianmu jadi gampang!</p>
            </div>
            
            {/* Image */}
            <div className="flex-shrink-0">
                <img src="/image/icon1.png" alt="" className="w-auto h-auto"/>
            </div>
        </div>
        <div className=" rounded-2xl shadow min-h-56 p-4" style={{background : '#FBF2EF'}}>
            <div className="rounded-2xl h-13 w-13 flex justify-center items-center mb-4"
            style={{ background : '#FE9479' }}
            >
                <RiStickyNoteAddFill className="text-white w-7 h-7"/>
            </div>
            <p className="font-semibold" style={{ fontSize : '32px' }} >19</p>
            <p style={{ fontSize : "18px", color : '#151D48'}} className="font-semibold">Total Ujian</p>
            <p>Dibuat Admin</p>

        </div>
        <div className=" rounded-2xl shadow min-h-56 p-4" style={{ background : '#FEF5E5'}} >
            <div className="rounded-2xl h-13 w-13 flex justify-center items-center mb-4"
            style={{ background : '#FEC53D' }}
            >
                <img src="/image/people.png" alt="" />
            </div>
            <p className="font-semibold" style={{ fontSize : '32px' }} >60</p>
            <p style={{ fontSize : "18px", color : '#151D48'}} className="font-semibold" >Total Siswa</p>
            <p>Mengikuti Ujian</p>
        </div>
    </div>
    <div className="flex justify-between mb-4">
        <h1 style={{ fontSize : '24px' }} >Ujian Aktif</h1>
        <h1 style={{ fontSize : '20px' , color : '#0081FF' }}  className="hover:underline transition duration-300" >Lihat Semua</h1>
    </div>
    <div className="flex justify-center gap-5 mb-7">
        <section className="rounded p-5 bg-white group overflow-hidden transition-all duration-500 hover:scale-105" style={{ width: '430px' }}>
            <div className="flex items-center justify-center rounded mb-3"  style={{ background : '#D5EDFF' }} >
                <img src="/image/book1.png" alt="" className="mb-4 group-hover:scale-110 transition-all duration-300"/>
            </div>
            <div className="flex justify-between items-center ">
                <h1 className="text-lg font-semibold">Ujian Bab 2</h1>
                <div className="p-2 rounded-full w-20 h-9 flex items-center justify-center " style={{ background : '#E9FFF2' }} >
                    <h1 style={{ color : "#2ECC71" }} >Aktif</h1>
                </div>
            </div>
            <p className="text-sm mb-3" style={{ color : '#A9A9A9' }}>25 Pertanyaan</p>
            <div className="flex justify-between items-center gap-2">
                <Button text="Selengkapnya" />
                <button style={{ background : '#FFEAEB' }} className="w-10 h-10 rounded flex items-center justify-center cursor-pointer">
                    <FaRegTrashAlt style={{ color : '#D21F28' , width : '17.88854217529297px' , height : '20.12461280822754px'}} />
                </button>
            </div>
        </section>
    </div>
    <div>
        <div className="flex items-center justify-between mb-4">
            <h1 style={{ fontSize : '24px' }}>Bank Soal</h1>
            <h1 style={{ fontSize : '20px' , color : '#0081FF' }}  className="hover:underline transition duration-300" >Lihat Semua</h1>
        </div>
        <div className="flex items-center justify-center gap-5">
        <section className="rounded p-3 bg-white group overflow-hidden transition-all duration-500 hover:scale-105" style={{ width: '300px' }}>
            <div className="flex items-center justify-center rounded mb-3"  style={{ background : '#D5EDFF' }} >
                <div className="bg-white p-3 my-13 rounded">
                <img src="/image/bank-soal-icon.png" alt="" className=" group-hover:scale-110 transition-all duration-300"/>
                </div>
            </div>
            <div className="flex justify-between items-center ">
                <h1 className="text-lg font-semibold">Informatika</h1>
                    <h1 style={{ color : "#D3D3D3" , fontSize : '13px' }} >2j lalu</h1>
            </div>
            <p className="text-sm mb-3" style={{ color : '#5E5E5E' }}>Sistem operasi dan sistem....</p>
            <div className="flex justify-between items-center gap-2">
                <Button text="Detail" />
                <button style={{ background : '#FFEAEB' }} className="w-10 h-10 rounded flex items-center justify-center cursor-pointer">
                    <FaRegTrashAlt style={{ color : '#D21F28' , width : '17.88854217529297px' , height : '20.12461280822754px'}} />
                </button>
            </div>
        </section>
        </div>
    </div>
</div>
            </main>
        </>
    );
};

export default HomeGuru;

{/* <main className="bg-gray-100 h-screen">
                <div className="flex items-center justify-between">
                    <div>
                <input 
                type="text" 
                name="" 
                id="" 
                placeholder="Telusuri" 
                className="w-100 rounded-2xl p-3 shadow mt-15 ml-70"/>
                    </div>
                    <div className="bg-amber-50 w-auto h-auto p-3 mt-13 rounded mr-10"> 
                        <div className="flex items-center gap-2">
                            <h1 className="text-amber-400">
                            Akun Premium</h1>
                            <RiVipCrownFill  className="text-amber-400"/>
                            </div>
                        <p className="text-sm">Berakhir pada : 30 Juli 2025</p>
                    </div>
                </div>
            </main> */}