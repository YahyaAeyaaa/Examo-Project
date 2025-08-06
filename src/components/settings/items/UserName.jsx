import React from 'react'
import { useState, useEffect } from 'react';

const UserName = () => {
  const [user, setUser] = useState(null);
  
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
   
   const handleUserUpdate = (event) => {
      setUser(event.detail);
    };

    window.addEventListener('userUpdated', handleUserUpdate);

    return () => {
      window.removeEventListener('userUpdated', handleUserUpdate);
    };
  }, []);

  return (
    <div>
      <h2 className="text-xl xl:text-2xl font-semibold mb-1">{user?.name || 'Loading...'}</h2>
      <p className="text-lg xl:text-xl text-[#707070]">{user?.email || 'Loading...'}</p>
    </div>
  )
}

export default UserName
