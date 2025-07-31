import React from 'react'
import ChangePassword from '../components/forgot-password/NewPassword'
import ForgotPassword from '../components/Layout/ForgotPassword'

const ChangePasswordPage = () => {
  return (
    <ForgotPassword title="Buat Kata Sandi Baru" desc="Silakan buat kata sandi baru yang aman dan mudah diingat.">
        <ChangePassword />
    </ForgotPassword>
  )
}

export default ChangePasswordPage
