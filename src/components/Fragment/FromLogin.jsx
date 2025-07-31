import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Index from "../element/input/index";
import Button from "../element/button/button";
import { apiLogin, setAuthToken } from "../../config/api";

function FromLogin() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [loginAttempted, setLoginAttempted] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: ""
    });
    // Debug: Detect component mount/remount
    useEffect(() => {
        console.log("FromLogin component mounted/remounted at:", new Date().toLocaleTimeString());
        
        // Clear old sessionStorage errors (older than 5 seconds)
        const savedError = sessionStorage.getItem('loginError');
        const errorTimestamp = sessionStorage.getItem('loginErrorTime');
        
        if (savedError && errorTimestamp) {
            const timeDiff = Date.now() - parseInt(errorTimestamp);
            if (timeDiff > 5000) { // 5 seconds
                console.log("Clearing old sessionStorage error (older than 5s)");
                sessionStorage.removeItem('loginError');
                sessionStorage.removeItem('loginErrorTime');
            }
        }
        
        return () => {
            console.log("FromLogin component unmounting at:", new Date().toLocaleTimeString());
        };
    }, []);

    // Debug: Detect component mount/remount
    useEffect(() => {
        console.log("FromLogin component mounted/remounted at:", new Date().toLocaleTimeString());
        return () => {
            console.log("FromLogin component unmounting at:", new Date().toLocaleTimeString());
        };
    }, []);

    // Debug: Monitor errors changes
    useEffect(() => {
        console.log("Errors updated:", errors);
        // Persist error to sessionStorage untuk debugging
        if (errors.general || errors.email || errors.password) {
            sessionStorage.setItem('loginError', JSON.stringify(errors));
            sessionStorage.setItem('loginErrorTime', Date.now().toString());
            console.log("Error persisted to sessionStorage with timestamp");
        }
    }, [errors]);

    // Restore error from sessionStorage on mount
    useEffect(() => {
        const savedError = sessionStorage.getItem('loginError');
        if (savedError) {
            const parsedError = JSON.parse(savedError);
            console.log("Restoring error from sessionStorage:", parsedError);
            setErrors(parsedError);
            setLoginAttempted(true);
        }
    }, []);

    // Debug: Monitor loginAttempted changes  
    useEffect(() => {
        console.log("Login attempted:", loginAttempted);
    }, [loginAttempted]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear validation errors saat user mengetik
        // Tapi pertahankan login errors sampai user submit lagi
        if (errors[name] && !loginAttempted) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
        
        // Clear persisted error saat user mulai mengetik
        if (value !== '' && sessionStorage.getItem('loginError')) {
            console.log("User typing, clearing persisted error");
            sessionStorage.removeItem('loginError');
            sessionStorage.removeItem('loginErrorTime');
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.email.trim()) {
            newErrors.email = "Email tidak boleh kosong";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Format email tidak valid (harus ada @)";
        }
        
        if (!formData.password.trim()) {
            newErrors.password = "Password tidak boleh kosong";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password minimal 8 karakter";
        }
        
        setErrors(prev => ({ ...prev, ...newErrors }));
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // Clear any previous persisted errors
        sessionStorage.removeItem('loginError');
        sessionStorage.removeItem('loginErrorTime');
        
        // Prevent any accidental form resubmission
        if (loading) return;
        
        console.log("Login attempt started"); // Debug log
        
        // Reset login attempt state dan clear semua errors
        setLoginAttempted(false);
        setErrors({ email: "", password: "", general: "" });
        
        // Validate form - jika gagal, tampilkan error tapi jangan lanjut ke API
        if (!validateForm()) {
            console.log("Validation failed - showing validation errors"); // Debug log
            return; // Stop here, biar validation errors tampil
        }
        
        setLoading(true);
        
        try {
            const response = await apiLogin(formData);

            // Ambil token & user
            const { token, user } = response.data;

            // Simpan token ke localStorage
            localStorage.setItem("authToken", token);
            localStorage.setItem("userRole", user.role);
            localStorage.setItem("user", JSON.stringify(user));
            setAuthToken(token); // jika pakai axios config untuk auto-inject

            // Arahkan berdasarkan role
            switch (user.role) {
                case "guru":
                    navigate("/HomeGuru");
                    break;
                case "user":
                    navigate("/HomeSiswa");
                    break;
                case "admin":
                    navigate("/HomeAdmin");
                    break;
                default:
                    console.warn("Role tidak dikenali:", user.role);
                    setErrors(prev => ({ 
                        ...prev, 
                        general: "Akun tidak memiliki role yang valid." 
                    }));
            }

        } catch (error) {
            console.error("Login gagal:", error);
            console.log("Error response:", error.response); // Debug log
            console.log("Error status:", error.response?.status); // Debug log
            
            setLoginAttempted(true); // Mark bahwa login attempt gagal
            
            // Handle different types of errors
            if (error.response) {
                const status = error.response.status;
                const message = error.response.data?.message || "Login gagal";
                
                console.log("Setting error for status:", status); // Debug log
                
                switch (status) {
                    case 401:
                        setErrors(prev => ({ 
                            ...prev, 
                            general: "Email atau password salah!" 
                        }));
                        break;
                    case 404:
                        setErrors(prev => ({ 
                            ...prev, 
                            email: "Email tidak terdaftar di sistem" 
                        }));
                        break;
                    case 400:
                        // Bad request - bisa jadi password salah
                        setErrors(prev => ({ 
                            ...prev, 
                            password: "Password tidak sesuai" 
                        }));
                        break;
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
                    default:
                        setErrors(prev => ({ 
                            ...prev, 
                            general: `Login gagal: ${message}` 
                        }));
                }
            } else if (error.request) {
                setErrors(prev => ({ 
                    ...prev, 
                    general: "Tidak dapat terhubung ke server. Periksa koneksi internet Anda." 
                }));
            } else {
                setErrors(prev => ({ 
                    ...prev, 
                    general: "Terjadi kesalahan yang tidak terduga." 
                }));
            }
            
            // Prevent any navigation on error
            console.log("Errors set:", errors); // Debug log
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            {/* General error message */}
            {errors.general && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{errors.general}</p>
                </div>
            )}
            
            <div className="mb-4">
                <Index 
                    type="text"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-blue-50 focus:ring-blue-300 focus:ring-2 outline-none ${
                        errors.email ? 'border-red-300 bg-red-50' : ''
                    }`}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
            </div>

            <div className="mb-4">
                <Index 
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`bg-blue-50 focus:ring-blue-300 focus:ring-2 outline-none ${
                        errors.password ? 'border-red-300 bg-red-50' : ''
                    }`}
                />
                {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
            </div>

            <p className="text-blue-500 text-right mb-5 cursor-pointer hover:text-blue-600">
                Lupa Password?
            </p>
            
            <Button 
                text={loading ? "Loading..." : "Login"} 
                type="submit"
                disabled={loading}
                className={`w-full rounded-2xl p-3 text-white transition-all duration-200 ${
                    loading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-500 hover:bg-blue-600'
                }`}
            />
        </form>
    );
}

export default FromLogin;