import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Index from "../element/input/index";
import Button from "../element/button/button";
import { apiLogin, setAuthToken } from "../../config/api";

function FromLogin() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    // Restore & save errors to sessionStorage
    useEffect(() => {
        const saved = sessionStorage.getItem('loginError');
        if (saved) setErrors(JSON.parse(saved));
    }, []);

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            sessionStorage.setItem('loginError', JSON.stringify(errors));
        } else {
            sessionStorage.removeItem('loginError');
        }
    }, [errors]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email.trim()) newErrors.email = "Email tidak boleh kosong";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Format email tidak valid";
        if (!formData.password.trim()) newErrors.password = "Password tidak boleh kosong";
        else if (formData.password.length < 8) newErrors.password = "Password minimal 8 karakter";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (loading) return;
        
        setErrors({});
        if (!validateForm()) return;
        setLoading(true);
        
        try {
            const { data } = await apiLogin(formData);
            localStorage.setItem("authToken", data.token);
            localStorage.setItem("userRole", data.user.role);
            localStorage.setItem("user", JSON.stringify(data.user));
            setAuthToken(data.token);

            const routes = { guru: "/HomeGuru", user: "/HomeSiswa", admin: "/HomeAdmin" };
            navigate(routes[data.user.role] || "/");

        } catch (error) {
            const errorMsg = error.response?.status === 401 
                ? { general: "Email atau password salah!" }
                : { general: "Terjadi kesalahan, coba lagi." };
            setErrors(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            {errors.general && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{errors.general}</p>
                </div>
            )}
            
            <div className="mb-4">
                <Index 
                    type="text" name="email" placeholder="Email"
                    value={formData.email} onChange={handleChange}
                    className={`bg-blue-50 focus:ring-blue-300 focus:ring-2 outline-none ${
                        errors.email ? 'border-red-300 bg-red-50' : ''
                    }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
                <Index 
                    type="password" name="password" placeholder="Password"
                    value={formData.password} onChange={handleChange}
                    className={`bg-blue-50 focus:ring-blue-300 focus:ring-2 outline-none ${
                        errors.password ? 'border-red-300 bg-red-50' : ''
                    }`}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <p className="text-blue-500 text-right mb-5 cursor-pointer hover:text-blue-600">
                Lupa Password?
            </p>
            
            <Button 
                text={loading ? "Loading..." : "Login"} 
                type="submit" disabled={loading}
                className={`w-full rounded-2xl p-3 text-white transition-all duration-200 ${
                    loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                }`}
            />
        </form>
    );
}

export default FromLogin;