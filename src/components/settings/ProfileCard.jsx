import { LogOut, User, Lock, Newspaper, Info, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProfileItem from './items/ProfileItem';
import UserName from './items/UserName';
import { useState } from 'react';

const menuItems = [
  {
    label: 'Edit Profile',
    icon: <User className="w-[33px] h-[33px]" />,
    value: 'edit-profile',
    path: "/siswa/setting/edit-profile",
  },
  {
    label: 'Ubah Password',
    path: "/siswa/setting/ubah-password",
    icon: <Lock className="w-[33px] h-[33px]" />,
    value: 'ubah-password',
  },
  {
    label: 'Syarat dan Ketentuan',
    icon: <Newspaper className="w-[33px] h-[33px]" />,
    value: 'syarat-ketentuan',
  },
  {
    label: 'Tentang Examo',
    icon: <Info className="w-[33px] h-[33px]" />,
    value: 'tentang',
  },
  {
    label: 'Bantuan',
    icon: <HelpCircle className="w-[33px] h-[33px]" />,
    value: 'bantuan',
  },
];

const ProfileCard = ({ active, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleConfirmLogout = () => {
    setIsOpen(true)
  }

  const handleCancelLogout = () => {
    setIsOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsOpen(false)

    navigate('/login')
  }

  return (
    <div className="px-6 py-12 rounded-[25px] bg-white w-full max-w-sm mx-auto">
      <div className="flex flex-col items-center gap-2">
        <img src='/image/pfp.jpg' alt="Profile" className="w-45 h-45 object-cover rounded-full" />
        <div className="text-center mt-6">
          <UserName />
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#EBEBEB] my-6"></div>

      <ul className="mt-10 px-[10px] space-y-5">
        {menuItems.map((item) => (
          <ProfileItem key={item.value} item={item} active={active} onClick={onChange} />
        ))}
        <li onClick={handleConfirmLogout} className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-red-100 text-red-600 transition-all duration-200">
          <LogOut className="w-[33px] h-[33px]" />
          <span className="text-base xl:text-lg">Keluar</span>
        </li>
      </ul>
       {isOpen && (
            <div className="fixed inset-0 bg-black/10 flex justify-center items-center z-50 pointer-none">
              <div className='py-8 px-16 w-[460px] bg-white flex flex-col items-center justify-center rounded-[20px] '>
              <h1 className='text-[32px] text-black font-semibold mb-8'>Keluar</h1>
              <p className='text-[#8D8D8D] text-base text-center mb-8'>Apakah Anda yakin ingin keluar? Setelah keluar, Anda akan dikembalikan ke layar masuk</p>
              <button onClick={handleLogout} className='py-2 w-full bg-[#FF0004] text-base font-semibold text-white leading-custom tracking-custom mb-2 rounded-[7px] cursor-pointer'>Keluar</button>
              <button onClick={handleCancelLogout} className='py-2 w-full bg-[#FFE6E6] text-base font-semibold text-[#FF0004] leading-custom tracking-custom mb-2 rounded-[7px] cursor-pointer'>Batal</button>
              </div>
            </div>
          )}
    </div>
  );
};

export default ProfileCard;
