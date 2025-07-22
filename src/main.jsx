import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter , createBrowserRouter , RouterProvider } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Index from './components/element/input/index.jsx'
import HomeGuru from './pages/HomeGuru.jsx'
import Test from './pages/test.jsx'

const router = createBrowserRouter([
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/',
    element: <Register />
  },
  {
    path: '/HomeGuru',
    element: <HomeGuru />
  },
  {
    path: '/App',
    element: <App />
  },
  {
    path: '/Test',
    element : <Test />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
