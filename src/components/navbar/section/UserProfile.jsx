import { useState, useEffect } from "react"
import useAvatar from "../../../config/avatar";
import { FaCircleUser } from "react-icons/fa6";

const UserProfile = () => {
 const [user, setUser] = useState(null);
 const { avatar, loading, fetchAvatar } = useAvatar();
 const [imageError, setImageError] = useState(false);

 const loadUserData = () => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  };

  useEffect(() => {
    loadUserData();
    fetchAvatar();

    const handleUserUpdate = (event) => {
      setUser(event.detail);
      setImageError(false);
    };

    window.addEventListener('userUpdated', handleUserUpdate);
    
    return () => {
      window.removeEventListener('userUpdated', handleUserUpdate);
    };
  }, []);

  return (
    <div className="flex items-center gap-4 justify-end sm:justify-start">
      <div className="flex items-center gap-4">
        {loading ? (
          <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
          ) : avatar && !imageError ? (
          <img 
            src={avatar} 
            alt="User" 
            className="w-10 h-10 rounded-full object-cover"
            onError={() => setImageError(true)}
          />
          ) : (
          <FaCircleUser className="w-10 h-10 text-gray-400" />
        )}
        <div className="text-left hidden md:block">
          <p className="font-semibold text-sm">{user?.name || 'Loading...'}</p>
          <p className="font-normal text-black text-xs">{user?.email || 'Loading...'}</p>
        </div>
      </div>
    </div>

  )
}

export default UserProfile
