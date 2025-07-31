import React from 'react'
import { IoMail } from "react-icons/io5";
import Input from './items/Input';
import { useState } from 'react';

const ConfirmEmail = () => {
    const [email, setEmail] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
    };
  return (
    <form onSubmit={handleSubmit}>
        <Input
            type="email"
            placeholder="Masukkan email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            leftIcon={IoMail}
            required
        />
        <button className='py-4 w-full bg-primary-blue text-white text-lg font-semibold rounded-[10px]'>
            Reset Password
        </button>
    </form>
  )
}

export default ConfirmEmail
