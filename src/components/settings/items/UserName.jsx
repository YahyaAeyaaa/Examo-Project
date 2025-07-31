import React from 'react'
import { useState, useEffect } from 'react';

const UserName = () => {
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
    <div>
      <h2 className="text-xl xl:text-2xl font-semibold mb-1">{user?.name || 'Loading...'}</h2>
      <p className="text-lg xl:text-xl text-[#707070]">{user?.email || 'Loading...'}</p>
    </div>
  )
}

export default UserName
