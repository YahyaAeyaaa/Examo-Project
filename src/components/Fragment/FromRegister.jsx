import Index from "../element/input"
import Button from "../element/button/button"
import { useState } from "react";
import { apiRegister } from "../../config/api";
import { useNavigate } from "react-router-dom";

const FromRegister = () => {
    const navigate = useNavigate()

    const [selectedRole, setSelectedRole] = useState('');
    
    // Tambahin state buat form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Handle input changes
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        // Validasi
        if (!selectedRole) {
            setError('Pilih role dulu!');
            return;
        }
        
        if (formData.password !== formData.password_confirmation) {
            setError('Password salah ! silahkan coba lagi');
            return;
        }
        
        setLoading(true);
        
        try {
            const registerData = {
                ...formData,
                role: selectedRole === 'siswa' ? 'user' : 'guru'
            };
            
            const response = await apiRegister(registerData);
            console.log('Register success:', response.data);
            
            navigate("/Login");
            
        } catch (error) {
            console.error('Register failed:', error);
            setError(error.response?.data?.message || 'Register gagal!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="mb-3" style={{ color: '#585858' }}>
                <h1 className="mb-3">Pilih Role :</h1>
                <div className="flex justify-start items-center gap-4 ">
                    <button 
                        type="button"
                        onClick={() => setSelectedRole('siswa')}
                        className={`rounded-2xl p-4 flex group items-center justify-center transition-all duration-200 hover:shadow-md ${
                            selectedRole === 'siswa' 
                                ? 'ring-2 ring-blue-500 shadow-lg' 
                                : 'hover:ring-1 hover:ring-blue-300'
                        }`}
                    >
                        <img src="/image/Siswa.png" alt="Siswa" className="w-12 h-12 object-contain group-hover:scale-110 transition-all duration-300" />
                    </button>
                    
                    <button 
                        type="button"
                        onClick={() => setSelectedRole('guru')}
                        className={`rounded-2xl p-4 group flex items-center justify-center transition-all duration-200 hover:shadow-md ${
                            selectedRole === 'guru' 
                                ? 'ring-2 ring-blue-400 shadow-lg' 
                                : 'hover:ring-1 hover:ring-blue-300'
                        }`}
                        style={{ 
                        background : '#0081FF'
                        }}
                    >
                        <img src="/image/GuruIcon.png" alt="Guru" className="w-12 h-12 object-contain group-hover:scale-110 transition-all duration-300" />
                    </button>
                </div>
                
                {selectedRole && (
                    <p className="text-sm mt-2 text-blue-600 font-medium">
                        Role dipilih: {selectedRole === 'siswa' ? 'Siswa' : 'Guru'}
                    </p>
                )}
            </div>
            
            {/* Error message */}

            
            <form onSubmit={handleSubmit}>
                <Index 
                    type="text"
                    name="name"
                    placeholder="Nama Lengkap"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <Index 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <Index 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <Index 
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirm Password"
                    value={formData.password_confirmation}
                    onChange={handleInputChange}
                />
                {error && (
                <div className="text-red-500 mb-2">
                    {error}
                </div>
            )}
                <Button 
                    text={loading ? "Loading..." : "Register"} 
                    type="submit"
                    className="w-full rounded-2xl p-3 text-white bg-blue-500 hover:bg-blue-600 transition-all duration-200"
                />
            </form>
        </>
    )
}

export default FromRegister