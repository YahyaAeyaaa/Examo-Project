import React, { useState, useEffect } from 'react'
import Navbar from '../components/element/Navigasi/Navbar'
import SideBar from '../components/element/Navigasi/Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardUser = () => {   
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)   
  const [isMobile, setIsMobile] = useState(false)    

  useEffect(() => {     
    const checkMobile = () => {       
      const mobile = window.innerWidth < 1024       
      setIsMobile(mobile)       
      setIsSidebarOpen(!mobile)     
    }      

    checkMobile()     
    window.addEventListener('resize', checkMobile)          
    return () => window.removeEventListener('resize', checkMobile)   
  }, [])    

  const toggleSidebar = () => {     
    setIsSidebarOpen(!isSidebarOpen)   
  }    

  return (     
    <div className="min-h-screen">       
      <Navbar          
        isSidebarOpen={isSidebarOpen}         
        toggleSidebar={toggleSidebar}         
        isMobile={isMobile}       
      />       
      <SideBar          
        isSidebarOpen={isSidebarOpen}         
        isMobile={isMobile}         
        toggleSidebar={toggleSidebar}       
      />       
      <main className={`pt-20 bg-[#F5F5F5] transition-all duration-300 ${
        isMobile 
          ? 'ml-0 w-full' 
          : isSidebarOpen 
            ? 'ml-[242px] w-[calc(100%-242px)]' 
            : 'ml-[64px] w-[calc(100%-64px)]'  
      }`}>         
        <Outlet />       
      </main>     
    </div>   
  ) 
}

export default DashboardUser