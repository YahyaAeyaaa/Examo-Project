import React from 'react'
import ForgotPassword from '../components/Layout/ForgotPassword'
import ConfirmEmail from '../components/forgot-password/ConfirmEmail'

const ConfirmEmailPage = () => {
  return (
    <ForgotPassword title="Lupa Kata Sandi?" desc="Masukkan email kamu, dan kami kirimkan link untuk atur ulang sandi.">
        <ConfirmEmail />
    </ForgotPassword>
  )
}

export default ConfirmEmailPage
