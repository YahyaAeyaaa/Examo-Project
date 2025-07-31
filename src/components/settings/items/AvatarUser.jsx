import React from 'react'
import { Pencil } from 'lucide-react'

const AvatarUser = () => {
  return (
    <div className="relative">
        <img src='/image/pfp.jpg' alt="Profile" className="w-37.5 h-37.5 lg:w-30 lg:h-30 xl:w-[130px] xl:h-[130px] rounded-full object-cover"/>
        <button className="absolute block md:hidden w-[38px] h-[38px] md:h-[25px]  bottom-0 right-0 bg-primary-blue p-1 rounded-full text-white" title="Edit Photo">
    <Pencil className='w-5 h-5 absolute left-2 bottom-2' />
    </button>
    </div>
  )
}

export default AvatarUser
