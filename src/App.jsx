import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardGuru from './layout/DashboardGuru';
import HomeGuru from './pages/HomeGuru'
import BankSoalGuru from './pages/BankSoalGuru';
import DaftarUjianGuru from './pages/DaftarUjianGuru';
import TambahUjianPage from './pages/TambahUjianPage'
import DashboardUser from './layout/DashboardUser';
import HomeSiswa from './pages/siswa_pages/HomeSiswa';
import ExamListPage from './pages/siswa_pages/ExamListPage';
import SettingsPage from './pages/siswa_pages/SettingsPage';
import ProtectedRoute from './components/route/ProtectedRoute';
import ExamDetail from './pages/siswa_pages/ExamDetail';
// import HomeAdmin from './pages/admin_pages/HomeAdmin';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/Login" element={<Login />} />

      <Route element={<ProtectedRoute allowedRoles={["guru"]} />}>
      <Route element={<DashboardGuru />}>
        <Route path="/HomeGuru" element={<HomeGuru />} />
        <Route path="/BankSoal" element={<BankSoalGuru />} />
        <Route path="/DaftarUjian" element={<DaftarUjianGuru />} />
        <Route path="/TambahUjian" element={<TambahUjianPage />} />
         <Route path="/SettingsGuru" element={<SettingsPage />} />
      </Route>
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
      <Route element={<DashboardUser />}>
        <Route path="/HomeSiswa" element={<HomeSiswa />} />
        <Route path="/Exam" element={<ExamListPage />} />
        <Route path="/SettingsSiswa" element={<SettingsPage />} />
        <Route path="/ExamDetail" element={<ExamDetail />} />
      </Route>
      </Route>

      {/* <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
      <Route element={<DashboardUser />}>
        <Route path="/HomeAdmin" element={<HomeAdmin />} />
      </Route>
      </Route> */}
    </Routes>
  );
}

export default App;