import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardGuru from './layout/DashboardGuru';
import HomeGuru from './pages/HomeGuru'
import BankSoalGuru from './pages/BankSoalGuru';
import DaftarUjianGuru from './pages/DaftarUjianGuru';
import TambahUjianPage from './pages/TambahUjianPage'
import DashboardUser from './layout/DashboardSiswa';
import HomeSiswa from './pages/siswa_pages/HomeSiswa';
import ExamListPage from './pages/siswa_pages/ExamListPage';
import ProtectedRoute from './components/route/ProtectedRoute';
import ExamDetail from './pages/siswa_pages/ExamDetail';
import EditProfileCard from './components/settings/EditProfileCard';
import UbahPasswordCard from './components/settings/UbahPasswordCard';
import SettingLayout from './layout/SettingLayout';
import ConfirmEmailPage from './pages/ConfirmEmailPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import HelpCard from './components/settings/HelpCard';
import SyaratDanKetentuan from './components/settings/SyaratDanKetentuan';
import AboutExamo from './components/settings/AboutExamo';
// import HomeAdmin from './pages/admin_pages/HomeAdmin';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/forgot-password" element={<ConfirmEmailPage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      <Route element={<ProtectedRoute allowedRoles={["guru"]} />}>
      <Route element={<DashboardGuru />}>
        <Route path="/HomeGuru" element={<HomeGuru />} />
        <Route path="/BankSoal" element={<BankSoalGuru />} />
        <Route path="/DaftarUjian" element={<DaftarUjianGuru />} />
        <Route path="/TambahUjian" element={<TambahUjianPage />} />
        <Route path="setting" element={<SettingLayout />}>
            <Route path="edit-profile" element={<EditProfileCard />} />
            <Route path="ubah-password" element={<UbahPasswordCard />} />
            <Route path="bantuan" element={<HelpCard />} />
        </Route>
      </Route>
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
        <Route path="/siswa" element={<DashboardUser />}>
          <Route path="home" element={<HomeSiswa />} />
          <Route path="exam" element={<ExamListPage />} />
          <Route path="exam/:id" element={<ExamDetail />} />
          <Route path="setting" element={<SettingLayout />}>
            <Route path="edit-profile" element={<EditProfileCard />} />
            <Route path="ubah-password" element={<UbahPasswordCard />} />
            <Route path="bantuan" element={<HelpCard />} />
            <Route path="syarat-ketentuan" element={<SyaratDanKetentuan />} />
            <Route path="tentang-examo" element={<AboutExamo />} />
          </Route>
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