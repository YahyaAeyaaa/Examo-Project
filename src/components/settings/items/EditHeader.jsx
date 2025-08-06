import React, { useRef } from 'react'
import AvatarUser from './AvatarUser'
import UserName from './UserName'
import ButtonProfile from './ButtonProfile'

const EditHeader = ({ selectedImage, onAvatarChange, onDeleteAvatar }) => {
  const fileInputRef = useRef(null)

  const handleEditFoto = (e) => {
    e.preventDefault()
    e.stopPropagation()
    fileInputRef.current?.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file && onAvatarChange) {
      onAvatarChange(file) 
    }
  }

  return (
    <div className="flex flex-row items-center gap-10 mb-10 justify-center md:justify-start">
      <AvatarUser 
        customImage={selectedImage} 
        onEditClick={handleEditFoto}
      />
      
      <div className='hidden md:flex flex-col md:items-start gap-2'>
        <UserName />
        <div className="flex gap-3">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
          
          <ButtonProfile 
            text='Edit Foto' 
            className='bg-primary-blue p-1 text-white text-base xl:text-lg'
            onClick={handleEditFoto}
          />
          
          <ButtonProfile 
            text='Hapus Foto' 
            className='bg-white p-1 text-primary-blue border border-blue-500 hover:bg-blue-50 text-base xl:text-lg'
            onClick={onDeleteAvatar}
          />
        </div>
      </div>
    </div>
  )
}

export default EditHeader