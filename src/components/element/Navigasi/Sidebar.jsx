import SidebarSection from './sections/SidebarSection';
import { MdDashboard } from "react-icons/md";
import { PiNotepadFill } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const SideBar = ({ isSidebarOpen, isMobile, toggleSidebar }) => {
  return (
    <>
      <aside className={`fixed left-0 top-0 h-screen bg-white drop-shadow-sm flex flex-col items-center z-50 transition-all duration-300
          ${isMobile 
            ? `w-[242px] ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}` 
            : `${isSidebarOpen ? 'w-[242px]' : 'w-[64px]'}`
          }`}>
        <div className={`flex flex-col space-y-4 pt-4 transition-all duration-300 ${isMobile ? 'w-[180px]' : isSidebarOpen ? 'w-[180px]' : 'w-[40px]'}`}>
          <h1 className={`text-[34px] font-bold text-primary-blue tracking-custom transition-all duration-300 ${!isSidebarOpen && !isMobile ? 'text-[24px] overflow-hidden whitespace-nowrap' : ''}`}>
            {!isSidebarOpen && !isMobile ? 'Ex' : 'Examo'}
          </h1>
                  
          <nav className="space-y-4">
            <SidebarSection
              title={!isSidebarOpen && !isMobile ? 'Fitur' : 'Fitur Examo'}
              items={[
                { icon: <MdDashboard />, label: 'Dashboard', path: '/HomeGuru' },
                { icon: <PiNotepadFill />, label: 'Daftar Ujian', path: '/DaftarUjian' },
                { icon: <IoBookSharp />, label: 'Bank Soal', path: '/BankSoal' },
              ]}
              collapsed={!isSidebarOpen && !isMobile}
            />
                 
            <div className={`w-full h-[1px] bg-[linear-gradient(to_right,_#D5D5D5_5px,_transparent_5px)] bg-[length:10px_1px] bg-repeat-x my-6 transition-all duration-300 ${!isSidebarOpen && !isMobile ? 'opacity-50' : ''}`}></div>
             
            <SidebarSection
              title={!isSidebarOpen && !isMobile ? 'Sistem' : 'Sistem'}
              items={[
                { 
                  icon: <MdPayment />, 
                  label: 'Langganan', 
                  children: [
                    { label: 'Paket', path: '/LanggananGuru/paket' },
                    { label: 'Riwayat', path: '/LanggananGuru/riwayat' }
                  ]
                },
                { 
                  icon: <IoMdSettings />, 
                  label: 'Pengaturan', 
                  children: [
                    { label: 'Kredensial', path: '/SettingsGuru/kredensial' },
                    { label: 'Profile', path: '/SettingsGuru' }
                  ]
                },
              ]}
              collapsed={!isSidebarOpen && !isMobile}
            />
          </nav>
        </div>
      </aside>

      {isMobile && isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 cursor-pointer" onClick={() => {toggleSidebar()}}/>
      )}
    </>
  )
}

export default SideBar;