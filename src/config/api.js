    // src/api/api.js
    import axios from 'axios'

    // 1. Buat axios instance dengan baseURL relatif,
    //    nantinya Vite proxy bakal lempar ke http://127.0.0.1:8000/api
    const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
    })

    // 2. Fungsi login
    //    data: { email, password }
    export const apiLogin = (data) => {
    return api.post('/login', data)
    }

    // 3. Fungsi register umum (default role “user”)
    //    data: { name, email, password, password_confirmation, role }
    export const apiRegister = (data) => {
    return api.post('/register', data)
    }

    // 4. Helper khusus register guru
    //    Auto-isi role: "guru"
    export const apiRegisterGuru = ({ name, email, password, password_confirmation }) => {
    return apiRegister({
        name,
        email,
        password,
        password_confirmation,
        role: 'guru',
    })
    }

    // 5. (Optional) Set Authorization header setelah login
    export const setAuthToken = (token) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

        // 6. Fungsi untuk get semua Bank Ujian
    export const getAllBankUjian = () => {
    return api.get('/bankujian')
}

        // 7. Ambil semua data bank soal
    export const getBankSoal = () => {
    return api.get('/bank-soal')
    }


        // Interceptor untuk request - inject token otomatis
    api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
    })

    // Interceptor untuk response - handle error 401 (token expired)
    api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
        localStorage.removeItem('authToken')
        window.location.href = '/login'
        }
        return Promise.reject(error)
    }
    )

    export default api
