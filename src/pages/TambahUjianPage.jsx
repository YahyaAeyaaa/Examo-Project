import { useState } from "react";
import Dashboard from "../components/element/Navigasi/Dashoard";
import Sidebar from "../components/element/Navigasi/Sidebar";
import { IoArrowBackSharp } from "react-icons/io5";

const TambahUjianPage = () => {
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
            <div className="bg-gray-100 h-screen">
            <main className=" p-5">
                <div className="flex items-center justify-evenly my-5">
                    <h1 className=" text-2xl">Tambah Ujian</h1>
                    <button className="flex  items-center justify-center gap-3 rounded-lg shadow py-2 px-3">
                        <IoArrowBackSharp />
                        <p>Kembali</p>
                    </button>
                </div>
                <div className="rounded shadow mr-64">
                    <h1>wertyuhgfds</h1>
                </div>
            </main>
            </div>
            </>
    )
}

export default TambahUjianPage

