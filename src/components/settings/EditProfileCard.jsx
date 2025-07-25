import React from 'react';
import InputItems from './items/InputItems';
import ButtonProfile from './items/ButtonProfile';
import UserName from './items/UserName';
import AvatarUser from './items/AvatarUser';

const inputItems = [
    {
        label: 'Username', placeholder: 'Type your username'
    },
    {
        label: 'Email', placeholder: 'Type your Email'
    },
    {
        label: 'No. Telepon', placeholder: 'Enter your phone number'
    },
    {
        label: 'Jenis Kelamin', placeholder: 'Type your username'
    }
]

const EditProfileCard = () => {
  return (
    <div className="max-w-[740px] px-12 py-12 bg-white rounded-[20px] shadow-md">
      <div className="flex flex-row items-center gap-10 mb-10 justify-center md:justify-start">
        <AvatarUser />
        <div className='hidden md:flex flex-col md:items-start gap-2'>
        <UserName />
        <div className="flex gap-3 mt-4">
          <ButtonProfile text='Edit Foto' className='bg-primary-blue text-white text-base xl:text-lg' />
          <ButtonProfile text='Hapus Foto' className='bg-white text-primary-blue border border-blue-500 hover:bg-blue-50 text-base xl:text-lg' />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {inputItems.map((item) => (
        <InputItems 
          key={item.label}
          label={item.label}
          placeholder={item.placeholder}/>
          ))}       
      </div>

      <div className="flex justify-end mt-6 gap-2">
        <ButtonProfile text='Batal' className='block md:hidden bg-[#FFEAEB] text-sm lg:text-lg text-[#D21F28]' />
        <ButtonProfile text='Simpan' className='bg-gradient-to-b from-[#0081FF] to-[#025BB1] text-sm lg:text-lg text-white' />
      </div>
    </div>
  );
};

export default EditProfileCard;
