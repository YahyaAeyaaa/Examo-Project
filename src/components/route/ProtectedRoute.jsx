import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem("authToken")
  const role = localStorage.getItem("userRole")

  if (!token) {
    return <Navigate to="/login" replace />
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
