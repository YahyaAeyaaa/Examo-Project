import React from 'react'
import ProfileCard from '../../components/settings/ProfileCard'
import EditProfileCard from '../../components/settings/EditProfileCard'
import { useState } from 'react'

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState('edit-profile')
  return (
    <div className='px-4 sm:px-6 lg:px-8 pt-6 lg:pt-12 max-w-[1198px] mx-[10px] xl:mx-auto '>
        <div className='grid grid-cols-1 lg:grid-cols-[310px_1fr] xl:grid-cols-[349px_1fr] gap-8 items-start justify-center'>
            <div className='w-full max-w-md mx-auto lg:mx-0 mb-8'>
            <ProfileCard active={activeSection} onChange={setActiveSection} />
            </div>
            <div className='w-full max-w-2xl mx-auto lg:mx-0'>
            <EditProfileCard />
            </div>
        </div>
        </div>

  )
}

export default SettingsPage
