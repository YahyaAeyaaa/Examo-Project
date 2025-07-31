import Index from "../element/input"
import Button from "../element/button/button"
import { useState } from "react";
import { apiRegister } from "../../config/api";
import { useNavigate } from "react-router-dom";

const FromRegister = () => {
    const navigate = useNavigate()

    const [selectedRole, setSelectedRole] = useState('');
    
    // State buat form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        role: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        general: ''
    });
    const [registerAttempted, setRegisterAttempted] = useState(false);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear validation errors saat user mengetik (tapi tetap pertahankan register errors)
        if (errors[name] && !registerAttempted) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    // Handle role selection
    const handleRoleSelect = (role) => {
        setSelectedRole(role);
        // Clear role error saat user pilih role
        if (errors.role && !registerAttempted) {
            setErrors(prev => ({ ...prev, role: "" }));
        }
    };

    // Validation function
    const validateForm = () => {
        const newErrors = {};

        // Validasi role
        if (!selectedRole) {
            newErrors.role = 'Silakan pilih role terlebih dahulu';
        }

        // Validasi nama
        if (!formData.name.trim()) {
            newErrors.name = 'Nama lengkap tidak boleh kosong';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Nama minimal 2 karakter';
        }

        // Validasi email
        if (!formData.email.trim()) {
            newErrors.email = 'Email tidak boleh kosong';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Format email tidak valid (harus ada @)';
        }

        // Validasi password
        if (!formData.password) {
            newErrors.password = 'Password tidak boleh kosong';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password minimal 8 karakter';
        }

        // Validasi confirm password
        if (!formData.password_confirmation) {
            newErrors.password_confirmation = 'Konfirmasi password tidak boleh kosong';
        } else if (formData.password !== formData.password_confirmation) {
            newErrors.password_confirmation = 'Password tidak cocok';
        }

        setErrors(prev => ({ ...prev, ...newErrors }));
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Reset state
        setRegisterAttempted(false);
        setErrors({
            role: '',
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            general: ''
        });
        
        // Validasi form
        if (!validateForm()) {
            return;
        }
        
        setLoading(true);
        
        try {
            const registerData = {
                ...formData,
                role: selectedRole === 'user' ? 'user' : 'guru'
            };
            
            const response = await apiRegister(registerData);
            console.log('Register success:', response.data);
            
            navigate("/Login");
            
        } catch (error) {
            console.error('Register failed:', error);
            setRegisterAttempted(true);
            
            if (error.response) {
                const status = error.response.status;
                const message = error.response.data?.message || 'Register gagal';
                
                switch (status) {
                    case 422:
                        // Validation errors dari server
                        if (error.response.data?.errors) {
                            const serverErrors = error.response.data.errors;
                            setErrors(prev => ({ 
                                ...prev, 
                                ...serverErrors 
                            }));
                        } else {
                            setErrors(prev => ({ 
                                ...prev, 
                                general: message 
                            }));
                        }
                        break;
                    case 409:
                        // Email already exists
                        setErrors(prev => ({ 
                            ...prev, 
                            email: 'Email sudah terdaftar' 
                        }));
                        break;
                    default:
                        setErrors(prev => ({ 
                            ...prev, 
                            general: message 
                        }));
                }
            } else if (error.request) {
                setErrors(prev => ({ 
                    ...prev, 
                    general: 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.' 
                }));
            } else {
                setErrors(prev => ({ 
                    ...prev, 
                    general: 'Terjadi kesalahan yang tidak terduga.' 
                }));
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* General error message */}
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
                            selectedRole === 'user' 
                                ? 'ring-2 ring-blue-500 shadow-lg' 
                                : 'hover:ring-1 hover:ring-blue-300'
                        } ${
                            errors.role ? 'border-2 border-red-300' : ''
                        }`}
                    >
                        <img src="/image/Siswa.png" alt="Siswa" className="w-12 h-12 object-contain group-hover:scale-110 transition-all duration-300" />
                    </button>
                    
                    <button 
                        type="button"
                        onClick={() => handleRoleSelect('guru')}
                        className={`rounded-2xl p-4 group flex items-center justify-center transition-all duration-200 hover:shadow-md ${
                            selectedRole === 'guru' 
                                ? 'ring-2 ring-blue-400 shadow-lg' 
                                : 'hover:ring-1 hover:ring-blue-300'
                        } ${
                            errors.role ? 'border-2 border-red-300' : ''
                        }`}
                        style={{ 
                            background: '#0081FF'
                        }}
                    >
                        <img src="/image/GuruIcon.png" alt="Guru" className="w-12 h-12 object-contain group-hover:scale-110 transition-all duration-300" />
                    </button>
                </div>
                
                {selectedRole && !errors.role && (
                    <p className="text-sm mt-2 text-blue-600 font-medium">
                        Role dipilih: {selectedRole === 'user' ? 'Siswa' : 'Guru'}
                    </p>
                )}
                
                {errors.role && (
                    <p className="text-red-500 text-sm mt-2">{errors.role}</p>
                )}
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
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
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
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
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
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
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
                    {errors.password_confirmation && (
                        <p className="text-red-500 text-sm mt-1">{errors.password_confirmation}</p>
                    )}
                </div>

                <Button 
                    text={loading ? "Loading..." : "Register"} 
                    type="submit"
                    disabled={loading}
                    className={`w-full rounded-2xl p-3 text-white transition-all duration-200 ${
                        loading 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                />
            </form>
        </>
    )
}

export default FromRegister