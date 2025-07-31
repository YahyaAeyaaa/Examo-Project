import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import Input from "./items/Input";

const NewPassword
 = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === 'confirmPassword' || (name === 'password' && formData.confirmPassword)) {
            const pwd = name === 'password' ? value : formData.password;
            const confirmPwd = name === 'confirmPassword' ? value : formData.confirmPassword;
            
            if (pwd.length < 8) {
                setError('Password minimal harus 8 karakter.');
            } else if (confirmPwd && pwd !== confirmPwd) {
                setError('Password tidak cocok.');
            } else {
                setError('');
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!error && formData.password && formData.confirmPassword) {
            onSuccess();
        }
    };

    return (
            <form onSubmit={handleSubmit}>
                <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password baru"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    leftIcon={RiLockPasswordFill}
                    rightIcon={showPassword ? FaEyeSlash : IoEyeSharp}
                    onRightIconClick={() => setShowPassword(!showPassword)}
                    required
                />

                <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Konfirmasi password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    leftIcon={RiLockPasswordFill}
                    rightIcon={showConfirmPassword ? FaEyeSlash : IoEyeSharp}
                    onRightIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    error={error}
                    required
                />

                <button 
                    type="submit"
                    disabled={!formData.password || !formData.confirmPassword || error}
                    className="w-full bg-primary-blue hover:bg-blue-600 disabled:cursor-not-allowed text-white font-Poppins font-semibold py-4 rounded-2xl transition-colors"
                >
                    Ganti Kata Sandi
                </button>
            </form>
    )
};

export default NewPassword
