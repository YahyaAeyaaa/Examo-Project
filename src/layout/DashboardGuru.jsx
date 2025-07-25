import { useState } from "react";
import Sidebar from "../components/element/Navigasi/Sidebar";
import Dashboard from "../components/element/Navigasi/Dashoard";
import { Outlet } from "react-router-dom";


const DashboardGuru = () => {
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
            <main className={`bg-[#F5F5F5] min-h-screen transition-all duration-300 ${sidebarToggle ? "ml-0" : "ml-64"}`}>
               <Outlet />
            </main>
        </>
    )   
}

export default DashboardGuru