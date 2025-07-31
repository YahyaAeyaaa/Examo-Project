    import { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import Index from "../element/input/index";
    import Button from "../element/button/button";
    import { apiLogin, setAuthToken } from "../../config/api";
    

    function FromLogin() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
        const response = await apiLogin(formData);

        // Ambil token & user
        const { token, user } = response.data;

        // Simpan token ke localStorage
        localStorage.setItem("authToken", token);
        localStorage.setItem("userRole", user.role)

        localStorage.setItem("user", JSON.stringify(user));
        setAuthToken(token); // jika pakai axios config untuk auto-inject


        // Arahkan berdasarkan role
        switch (user.role) {
            case "guru":
            navigate("/HomeGuru");
            break;
            case "user":
            navigate("/siswa/home");
            break;
            case "admin":
            navigate("/HomeAdmin");
            break;
            default:
            console.warn("Role tidak dikenali:", user.role);
            alert("Akun tidak memiliki role yang valid.");
        }

         setLoading(true);

        } catch (error) {
        console.error("Login gagal:", error);
        alert("Email atau password salah!");
        } finally {
            setLoading(false); 
        }
    };

    return (
        <form onSubmit={handleLogin}>
        <Index 
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
        />
        <Index 
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
        />
        <p className="text-blue-500 text-right mb-5 cursor-pointer">
            Lupa Password?
        </p>
        <Button 
            text={loading ? "Loading..." : "Login"} 
            type="submit"
            className="w-full rounded-2xl p-3 text-white bg-blue-500 hover:bg-blue-600 transition-all duration-200"
        />
        </form>
    );
    }

    export default FromLogin;
