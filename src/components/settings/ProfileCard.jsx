import { LogOut, User, Lock, Newspaper, Info, HelpCircle } from 'lucide-react';
import ProfileItem from './items/ProfileItem';
import UserName from './items/UserName';

const menuItems = [
  {
    label: 'Edit Profile',
    icon: <User className="w-[33px] h-[33px]" />,
    value: 'edit-profile',
    activeColor: 'bg-gradient-to-r from-[#025BB1] to-[#0081FF] text-white',
  },
  {
    label: 'Ubah Password',
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

const ProfileSidebar = ({ active, onChange }) => {
  return (
    <div className="px-6 py-12 rounded-[25px] bg-white w-full max-w-sm mx-auto">
      <div className="flex flex-col items-center gap-2">
        <img src='./image/pfp.jpg' alt="Profile" className="w-45 h-45 object-cover rounded-full" />
        <div className="text-center mt-6">
          <UserName />
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#EBEBEB] my-6"></div>

      <ul className="mt-10 px-[10px] space-y-5">
        {menuItems.map((item) => (
          <ProfileItem key={item.value} item={item} active={active} onClick={onChange} />
        ))}
        <li className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-red-100 text-red-600 transition-all duration-200">
          <LogOut className="w-[33px] h-[33px]" />
          <span className="text-base xl:text-lg">Keluar</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
