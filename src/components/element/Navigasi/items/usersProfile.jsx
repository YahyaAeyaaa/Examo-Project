import { useState, useEffect } from "react"

const UserProfiles = () => {
 const [user, setUser] = useState(null);

  useEffect(() => {
   
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  return (
    <div className="flex items-center gap-4 justify-end sm:justify-start">
      <div className="flex items-center gap-4">
        <img src='/image/pfp.png' alt="User" className="w-10 h-10 rounded-full object-cover"/>
        <div className="text-left hidden md:block">
          <p className="font-semibold text-sm">{user?.name || 'Loading...'}</p>
          <p className="font-normal text-black text-xs">{user?.email || 'Loading...'}</p>
        </div>
      </div>
    </div>

  )
}

export default UserProfiles
