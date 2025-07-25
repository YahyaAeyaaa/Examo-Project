// src/routes/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem("authToken")
  const role = localStorage.getItem("userRole")

  if (!token) {
    // Belum login → tendang ke login
    return <Navigate to="/login" replace />
  }

  if (!allowedRoles.includes(role)) {
    // Role tidak sesuai → tendang ke unauthorized
    return <Navigate to="/unauthorized" replace />
  }

  // Aman → render outlet (halaman anaknya)
  return <Outlet />
}

export default ProtectedRoute
