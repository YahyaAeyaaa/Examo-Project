import Index from "../element/input"
import Button from "../element/button/button"
import { useState } from "react";
import { apiRegister } from "../../config/api";
import { useNavigate } from "react-router-dom";

const FromRegister = () => {
    const navigate = useNavigate()
    const [selectedRole, setSelectedRole] = useState('');
    const [formData, setFormData] = useState({
        name: '', email: '', password: '', password_confirmation: ''
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    // Handle input changes & clear errors
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
    };

    // Handle role selection & clear error
    const handleRoleSelect = (role) => {
        setSelectedRole(role);
        if (errors.role) setErrors(prev => ({ ...prev, role: "" }));
    };

    // Simplified validation
    const validateForm = () => {
        const newErrors = {};
        
        if (!selectedRole) newErrors.role = 'Silakan pilih role terlebih dahulu';
        if (!formData.name.trim()) newErrors.name = 'Nama lengkap tidak boleh kosong';
        else if (formData.name.trim().length < 2) newErrors.name = 'Nama minimal 2 karakter';
        else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) newErrors.name = "Nama hanya huruf dan spasi"
        
        if (!formData.email.trim()) newErrors.email = 'Email tidak boleh kosong';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Format email tidak valid';
        
        if (!formData.password) newErrors.password = 'Password tidak boleh kosong';
        else if (formData.password.length < 8) newErrors.password = 'Password minimal 8 karakter';
        
        if (!formData.password_confirmation) newErrors.password_confirmation = 'Konfirmasi password tidak boleh kosong';
        else if (formData.password !== formData.password_confirmation) newErrors.password_confirmation = 'Confirm Password tidak cocok dengan Password Sebelumnya';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        
        if (!validateForm()) return;
        
        setLoading(true);
        
        try {
            const registerData = { ...formData, role: selectedRole === 'user' ? 'user' : 'guru' };
            await apiRegister(registerData);
            navigate("/Login");
        } catch (error) {
            console.error('Register failed:', error);
            
            if (error.response?.status === 422 && error.response.data?.errors) {
                setErrors(error.response.data.errors);
            } else {
                setErrors({ general: error.response?.data?.message || 'Terjadi kesalahan, coba lagi.' });
            }
        } finally {
            setLoading(false);
        }
    };



    return (
        <>
            {errors.general && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{errors.general}</p>
                </div>
            )}

            <div className="mb-4" style={{ color: '#585858' }}>
                <h1 className="mb-3">Pilih Role :</h1>
                <div className="flex justify-start items-center gap-4">
                    <button 
                        type="button"
                        onClick={() => handleRoleSelect('user')}
                        className={`rounded-2xl p-4 flex group items-center justify-center transition-all duration-200 hover:shadow-md ${
                            selectedRole === 'user' ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:ring-1 hover:ring-blue-300'
                        } ${errors.role ? 'border-2 border-red-300' : ''}`}
                    >
                        <img src="/image/Siswa.png" alt="user" className="w-12 h-12 object-contain group-hover:scale-110 transition-all duration-300" />
                    </button>
                    
                    <button 
                        type="button"
                        onClick={() => handleRoleSelect('guru')}
                        className={`rounded-2xl p-4 flex group items-center justify-center transition-all duration-200 hover:shadow-md ${
                            selectedRole === 'guru' ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:ring-1 hover:ring-blue-300'
                        } ${errors.role ? 'border-2 border-red-300' : ''}`}
                        style={{ background: '#0081FF' }}
                    >
                        <img src="/image/GuruIcon.png" alt="guru" className="w-12 h-12 object-contain group-hover:scale-110 transition-all duration-300" />
                    </button>
                </div>
                
                {selectedRole && !errors.role && (
                    <p className="text-sm mt-2 text-blue-600 font-medium">
                        Role dipilih: {selectedRole === 'user' ? 'Siswa' : 'Guru'}
                    </p>
                )}
                {errors.role && <p className="text-red-500 text-sm mt-2">{errors.role}</p>}
            </div>
            
            <form onSubmit={handleSubmit}>
                {/* Nama Field */}
                <div className="mb-4">
                    <Index 
                        type="text"
                        name="name"
                        placeholder="Nama Lengkap"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`bg-blue-50 focus:ring-blue-300 focus:ring-2 outline-none ${
                            errors.name ? 'border-red-300 bg-red-50' : ''
                        }`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <Index 
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`bg-blue-50 focus:ring-blue-300 focus:ring-2 outline-none ${
                            errors.email ? 'border-red-300 bg-red-50' : ''
                        }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <Index 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`bg-blue-50 focus:ring-blue-300 focus:ring-2 outline-none ${
                            errors.password ? 'border-red-300 bg-red-50' : ''
                        }`}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                {/* Confirm Password Field */}
                <div className="mb-4">
                    <Index 
                        type="password"
                        name="password_confirmation"
                        placeholder="Confirm Password"
                        value={formData.password_confirmation}
                        onChange={handleInputChange}
                        className={`bg-blue-50 focus:ring-blue-300 focus:ring-2 outline-none ${
                            errors.password_confirmation ? 'border-red-300 bg-red-50' : ''
                        }`}
                    />
                    {errors.password_confirmation && <p className="text-red-500 text-sm mt-1">{errors.password_confirmation}</p>}
                </div>

                <Button 
                    text={loading ? "Loading..." : "Register"} 
                    type="submit"
                    disabled={loading}
                    className={`w-full rounded-2xl p-3 text-white transition-all duration-200 ${
                        loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                />
            </form>
        </>
    )
}

export default FromRegister