import { useState, useCallback, useEffect } from 'react';
import { getUserProfile } from './api';

const useAvatar = () => {
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAvatar = useCallback(async () => {
    try {
      setLoading(true);
      
      const response = await getUserProfile();
      
      const userData = response.data.data;
      
      if (userData.avatar_url) {
        setAvatar(userData.avatar_url);
      } else if (userData.avatar) {
        const avatarUrl = userData.avatar.startsWith('http')
          ? userData.avatar
          : `http://localhost:8000/storage/${userData.avatar}`;
        setAvatar(avatarUrl);
      } else {
        setAvatar(null);
      }
    } catch (error) {
      console.error(error);
      setAvatar(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const handleUserUpdate = () => {
      fetchAvatar();
    };

    window.addEventListener('userUpdated', handleUserUpdate);
    
    return () => {
      window.removeEventListener('userUpdated', handleUserUpdate);
    };
  }, [fetchAvatar]);

  return { avatar, loading, fetchAvatar };
};

export default useAvatar;