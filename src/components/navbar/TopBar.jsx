import React from 'react'
import { AlignJustify } from 'lucide-react'
import UserProfile from './section/UserProfile'

const TopBar = ({ isSidebarOpen, toggleSidebar, isMobile }) => {
  const topbarStyle = {     
  width: isMobile 
    ? '100%' 
    : isSidebarOpen 
      ? 'calc(100% - 242px)' 
      : 'calc(100% - 64px)',  
  marginLeft: isMobile 
    ? '0' 
    : isSidebarOpen 
      ? '242px'
      : '64px'  
}
  return (
    <nav className="fixed top-0 h-20 flex justify-between items-center px-4 drop-shadow-sm bg-white z-50 transition-all duration-300" style={topbarStyle}>
      <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Toggle Sidebar">
        <AlignJustify className='w-[26px] h-[26px]' />
      </button>
      <UserProfile />
    </nav>
  )
}

export default TopBar