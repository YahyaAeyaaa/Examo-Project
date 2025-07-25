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
import BankSoalGuru from './pages/BankSoalGuru.jsx'
import DaftarUjianGuru from './pages/DaftarUjianGuru.jsx'
import WarningEditGuru from './components/Fragment/WarningEditGuru.jsx'
import CardUjian from './components/Fragment/DaftarUjianCard.jsx'
import TambahUjianPage from './pages/TambahUjianPage.jsx'
import HomeSiswa from './pages/HomeSiswa.jsx'

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
    element : <CardUjian />
  },
  {
    path: '/BankSoal',
    element: <BankSoalGuru />
  },
  {
    path : '/DaftarUjian',
    element : <DaftarUjianGuru />
  },
  {
    path : '/WarningEdit',
    element : <WarningEditGuru />
  },
  {
    path : '/TambahUjian',
    element : <TambahUjianPage />
  },
  {
    path : '/HomeSiswa',
    element : <HomeSiswa />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
