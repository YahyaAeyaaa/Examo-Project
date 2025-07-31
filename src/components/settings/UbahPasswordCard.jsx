import React, { useState } from 'react'
import ButtonProfile from './items/ButtonProfile'
import InputPassword from './items/InputPassword'
import { changePassword } from '../../config/api'

const UbahPasswordCard = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  const validatePassword = (password) => {
  return [
    { text: 'Karakter minimal 8', isValid: password.length >= 8 },
    { text: 'Satu karakter huruf besar', isValid: /[A-Z]/.test(password) },
    { text: 'Satu karakter huruf kecil', isValid: /[a-z]/.test(password) },
    { text: 'Satu karakter angka', isValid: /\d/.test(password) },
    { text: 'Satu karakter simbol', isValid: /[!@#$%^&*(),.?":{}|<>]/.test(password) }
  ];
};

const handleSubmit = async (e) => {
  e.preventDefault();

    const newErrors = {};
    
    if (!oldPassword) {
      newErrors.oldPassword = 'Password lama harus diisi';
    } 

    const passwordRules = validatePassword(newPassword);
    const isPasswordValid = passwordRules.every(rule => rule.isValid);
    
    if (!newPassword) {
      newErrors.newPassword = 'Password baru harus diisi';
    } else if (!isPasswordValid) {
      newErrors.newPassword = 'Password tidak memenuhi kriteria';
    }
    
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Konfirmasi password harus diisi';
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Password tidak cocok';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      return;
    } 

      setIsLoading(true)
      try {
        const response = await changePassword({
          current_password: oldPassword,
          new_password: newPassword,
          new_password_confirmation: confirmPassword
        })
        console.log(response)

        if (response.data.message === 'password salah') {
          setErrors({ oldPassword: 'Password lama tidak sesuai'});
          return;
        }

        alert('Password berhasil diubah!');

        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('')
        setErrors({});
      } catch (error) {
        const errorMessage = error.response?.data?.message || 'Terjadi kesalahan';
        alert(errorMessage);        
      } finally {
        setIsLoading(false)
      }
    
  }

  return (
    <div className="max-w-[740px] px-12 py-12 bg-white rounded-[20px] shadow-md">
      <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-x-8 gap-y-4">
       <InputPassword 
          label="Password Lama"
          placeholder="Masukkan Password Lama"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          showValidation={false} 
          validationRules={[]}
          error={errors.oldPassword}
        />

        <InputPassword 
          label="Password Baru"
          placeholder="Masukkan Password Baru"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          showValidation={true}   
          validationRules={validatePassword(newPassword)}
          error={errors.newPassword}
        />

        <InputPassword 
          label="Konfirmasi Password"
          placeholder="Masukkan Konfirmasi Password Baru"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          showValidation={false}  
          validationRules={[]}
          error={errors.confirmPassword}
        />    
      </div>

      <div className="flex justify-end mt-6 gap-2">
        <ButtonProfile type='button' text='Batal' className='block md:hidden bg-[#FFEAEB] text-sm lg:text-lg text-[#D21F28]' />
        <ButtonProfile type="submit" text={isLoading ? 'Menyimpan...' : 'Simpan'} disabled={isLoading} className='bg-gradient-to-b from-[#0081FF] to-[#025BB1] text-sm lg:text-lg text-white' />
      </div>
      </form>
    </div>
  )
}

export default UbahPasswordCard
