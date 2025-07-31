import React from 'react'
import { Link } from 'react-router-dom'

const UnauthorizedPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div><img src="/image/unauthorized.png" alt="" /></div>
      <h1 className='text-[22px] font-semibold'>Oops! Kamu tidak memiliki akses ke halaman ini</h1>
      <p className='text-lg text-[#828282] align-center'>Halaman ini hanya bisa diakses oleh guru!!</p>
      <Link
        to="/siswa/home"
        className="text-lg text-primary-blue mt-2 hover:underline transition"
        >
        Kembali Ke Dashboard Siswa
        </Link>
    </div>
  )
}

export default UnauthorizedPage
