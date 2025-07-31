import SidebarSection from './section/SidebarSection'
import Dashboard from '../../icons/DashboardIcon'
import ExamList from '../../icons/ExamListIcon'
import Settings from '../../icons/SettingsIcon'


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
                { icon: <Dashboard />, label: 'Dashboard', path:'/siswa/home' },
                { icon: <ExamList />, label: 'Daftar Ujian', path:'/siswa/exam' },
              ]}
              collapsed={!isSidebarOpen && !isMobile}
            />
                 
            <div className={`w-full h-[1px] bg-[linear-gradient(to_right,_#D5D5D5_5px,_transparent_5px)] bg-[length:10px_1px] bg-repeat-x my-6 transition-all duration-300 ${!isSidebarOpen && !isMobile ? 'opacity-50' : ''}`}></div>
             
            <SidebarSection
              title={!isSidebarOpen && !isMobile ? 'Sistem' : 'Sistem'}
              items={[
                { icon: <Settings />, label: 'Pengaturan', path:'/siswa/setting/edit-profile' },
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