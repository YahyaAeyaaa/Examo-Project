import React from 'react';
import { useState, useEffect } from 'react';
import InputItems from './items/InputItems';
import ButtonProfile from './items/ButtonProfile';
import UserName from './items/UserName';
import AvatarUser from './items/AvatarUser';
import EditHeader from './items/EditHeader';
import { editProfile, getUserProfile, editAvatar } from '../../config/api';
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const EditProfileCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    gender: ''
  })
  const [loading, setloading] = useState(true);
  const [submit, setSubmit] = useState(false)
  const [errors, setErrors] = useState({})
  const [showValidation, setShowValidation] = useState(false)

  const [selectedImage, setSelectedImage] = useState(null)
  const [avatarFile, setAvatarFile] = useState(null)
  
  
  const validateForm = (data) => {
    const newErrors = {}

    if (!data.name || data.name.trim() === '') {
      newErrors.name = 'Nama harus diisi'
    } else if (!/^[a-zA-Z\s]+$/.test(data.name)) {
      newErrors.name = 'Nama hanya boleh huruf dan spasi'
    }

    if (!data.email || data.email.trim() === '') {
      newErrors.email = 'Email harus diisi'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (data.phone_number && data.phone_number.trim() !== '') {
      if (data.phone_number.length < 10) {
        newErrors.phone_number = 'Nomor telepon minimal 10 karakter';
      } else if (data.phone_number.length > 15) {
        newErrors.phone_number = 'Nomor telepon maksimal 15 karakter';
      } else if (!/^(\+62|62|0)8[1-9][0-9]{6,10}$/.test(data.phone_number)) {
        newErrors.phone_number = 'Format nomor telepon tidak valid (contoh: 08123456789, +6281234567890)';
      }
    }

    return newErrors;
  }

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleAvatarChange = (file) => {
    if (file) {
      setAvatarFile(file)
      
      const previewUrl = URL.createObjectURL(file)
      setSelectedImage(previewUrl)
    }
  }

  const handleDeleteAvatar = () => {
    setSelectedImage(null)
    setAvatarFile(null)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try{
      setloading(true)
      const response = await getUserProfile();
      const userData = response.data.data

      setFormData({
        name: userData.name || '',
        email: userData.email || '',
        phone_number: userData.phone || '',
        gender: userData.gender || ''
      })

      if (userData.avatar_url) {
        setSelectedImage(userData.avatar_url)
      } else if (userData.avatar) {
        const avatarUrl = userData.avatar.startsWith('http') 
          ? userData.avatar 
          : `http://localhost:8000/storage/${userData.avatar}`
        setSelectedImage(avatarUrl)
      }
    } catch (error) {
      console.error('Error saat mendapatkan user data:', error)
    } finally {
      setloading(false)
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmit(true)
    setErrors({})

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmit(false)
      return
    }

    try {
      const response = await editProfile(formData)
      
      if (response.data && response.data.data) {
        const updatedData = response.data.data
        setFormData({
          name: updatedData.name || '',
          email: updatedData.email || '',
          phone_number: updatedData.phone_number || '',
          gender: updatedData.gender || ''
        })

        let finalAvatarUrl = selectedImage;

        if (avatarFile) {
          if (avatarFile instanceof File) {
            const avatarFormData = new FormData()
            avatarFormData.append('avatar', avatarFile)

            try {
              const avatarResponse = await editAvatar(avatarFormData)
              
              if (avatarResponse.data?.data?.avatar) {
                finalAvatarUrl = avatarResponse.data.data.avatar.startsWith('http')
                  ? avatarResponse.data.data.avatar
                  : `http://localhost:8000/storage/${avatarResponse.data.data.avatar}`
                
                setSelectedImage(finalAvatarUrl)
              }
              
            } catch (avatarError) {
              console.error('Error uploading avatar:', avatarError)
              
              if (avatarError.response?.data?.message) {
                alert(`Error uploading avatar: ${avatarError.response.data.message}`)
              } else if (avatarError.response?.data?.errors) {
                const errorMessages = Object.values(avatarError.response.data.errors).flat()
                alert(`Error uploading avatar: ${errorMessages.join(', ')}`)
              }
            }
          }
        }

        const updatedUser = {
          id: updatedData.id,
          name: updatedData.name,
          email: updatedData.email,
          role: updatedData.role,
          phone: updatedData.phone_number || updatedData.phone,
          gender: updatedData.gender,
          avatar: finalAvatarUrl
        };

        localStorage.setItem('user', JSON.stringify(updatedUser));
        window.dispatchEvent(new CustomEvent('userUpdated', { 
          detail: updatedUser 
        }));
      }

      setShowValidation(true)
      setTimeout(() => setShowValidation(false), 3000)

    } catch (error) {
      console.error('Error mengupdate profile:', error);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      }
    } finally {
      setSubmit(false)
      setAvatarFile(null)
    }
  }

  const handleCancel = () => {
    fetchUserData();
    setErrors({});
    setAvatarFile(null)
  }


  const inputItems = [
      {
          label: 'Username', placeholder: 'Type your username', name: 'name', type: 'text'
      },
      {
          label: 'Email', placeholder: 'Type your Email',  name: 'email', type: 'text'
      },
      {
          label: 'No. Telepon', placeholder: 'Enter your phone number', name: 'phone_number', type: 'text'
      },
      {
          label: 'Jenis Kelamin', placeholder: 'Select your gender', name: 'gender', type: 'select', 
          options: [{ value: '', label: 'Pilih jenis kelamin' }, { value: 'male', label: 'Laki-laki' }, { value: 'female', label: 'Perempuan' }]
      }
  ]

  if (loading) {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <div>
      {showValidation && (
        <div className="fixed top-4 right-4 z-50 bg-[#F3FCF9] border border-[#3ED4AF] rounded-xl shadow-lg p-6 max-w-sm animate-slide-in">
          <div className="flex items-start items-center gap-3">

            <div className="flex-shrink-0 w-11 h-11 bg-[#3ED4AF] rounded-full flex items-center justify-center">
              <FaCheckCircle className='w-[25px] h-[25px] text-white' />              
            </div>
            
            <div className="flex-1">
              <h4 className="text-base font-semibold text-gray-900">Edit Profil</h4>
              <p className="text-sm text-gray-600">Pembaruan profil anda berhasil!</p>
            </div>
            
            <button 
              onClick={() => setShowValidation(false)}
              className="flex-shrink-0 text-[#4E4E4E] hover:text-gray-600 transition-colors">
              <RxCross2 className='h-4 w-4' />
            </button>
          </div>
        </div>
      )}
    <form >
    <div className="max-w-[740px] px-12 py-12 bg-white rounded-[20px] shadow-md">
      <EditHeader selectedImage={selectedImage} onAvatarChange={handleAvatarChange} onDeleteAvatar={handleDeleteAvatar}/>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {inputItems.map((item) => (
          <div key={item.label} className="flex flex-col">
        <InputItems 
          key={item.label}
          label={item.label}
          placeholder={item.placeholder}
          type={item.type}
          options={item.options}
          name={item.name}
          value={formData[item.name]}
          onChange={handleInputChange}
          hasError={!!errors[item.name]}/>
          {errors[item.name] && (
            <span className='text-red-500 text-xs mt-1 ml-1'>
              {errors[item.name]}
            </span>
          )}
         </div>
          ))}       
      </div>
      
      <div className="flex justify-end mt-6 gap-2">
        <ButtonProfile text='Batal' onClick={handleCancel} disabled={submit} className='block p-4 md:hidden bg-[#FFEAEB] text-sm lg:text-lg text-[#D21F28]' />
        <ButtonProfile text={submit ? 'Menyimpan' : 'Simpan'} onClick={handleSubmit} disabled={submit} className='bg-gradient-to-b from-[#0081FF] to-[#025BB1] p-4 text-sm lg:text-base text-white' />
      </div>
    </div>
    </form>
    </div>
  );
};

export default EditProfileCard;
