import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom' // Tambah Navigate
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardGuru from './layout/DashboardGuru';
import HomeGuru from './pages/HomeGuru';
import BankSoalGuru from './pages/BankSoalGuru';
import DaftarUjianGuru from './pages/DaftarUjianGuru';
import TambahUjianPage from './pages/TambahUjianPage';
import DashboardUser from './layout/DashboardSiswa';
import HomeSiswa from './pages/siswa_pages/HomeSiswa';
import ExamListPage from './pages/siswa_pages/ExamListPage';
import SettingsPage from './pages/siswa_pages/SettingsPage';
import ProtectedRoute from './components/route/ProtectedRoute';
import ExamDetail from './pages/siswa_pages/ExamDetail';

// ====== Tambahan dari kedua branch, sudah digabung ======
import EditProfileCard from './components/settings/EditProfileCard';
import UbahPasswordCard from './components/settings/UbahPasswordCard';
import SettingLayout from './layout/SettingLayout';
import ConfirmEmailPage from './pages/ConfirmEmailPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import RiwayatLangganan from './pages/RiwayatLangganan';
import PaketLangganan from './pages/PaketLangganan';
import KredensialSettings from './pages/KredensialSettings';
import DetailPaket from './pages/DetailPaketLangganan';
import NilaiUjianSiswa from './pages/NilaiUjianSiswa';
import TambahBankSoal from './pages/TambahBankSoal';
import NotFound from './pages/404';
import DaftarSoal from './pages/DaftarSoal';
import ExamDetailGuru from './pages/ExamDetailGuru';
import DetailNilaiSiswa from './pages/DetailNilai';
// ================================================

// import HomeAdmin from './pages/admin_pages/HomeAdmin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/forgot-password" element={<ConfirmEmailPage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      {/* Guru Routes */}
      <Route element={<ProtectedRoute allowedRoles={["guru"]} />}>
        <Route element={<DashboardGuru />}>
          <Route path="/HomeGuru" element={<HomeGuru />} />
          <Route path="/BankSoal" element={<BankSoalGuru />} />
          <Route path="/DaftarUjian" element={<DaftarUjianGuru />} />
          <Route path="/TambahUjian" element={<TambahUjianPage />} />
          <Route path="/SettingsGuru" element={<SettingsPage />} />
          <Route path="/SettingsGuru/kredensial" element={<KredensialSettings />} />
          <Route path="/LanggananGuru/paket" element={<PaketLangganan />} />
          <Route path="/LanggananGuru/riwayat" element={<RiwayatLangganan />} />
          <Route path="/DetailPaket" element={<DetailPaket />} />
          <Route path="/NilaiUjianSiswa" element={<NilaiUjianSiswa />} />
          <Route path="/TambahBankSoal" element={<TambahBankSoal />} />
          <Route path="/DaftarSoal" element={<DaftarSoal />} />
          <Route path="/ExamDetailGuru" element={<ExamDetailGuru />} />
          <Route path="/DetailNilaiSiswa" element={<DetailNilaiSiswa />} />
        </Route>
      </Route>

      {/* User (Siswa) Routes */}
      <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
        <Route path="/siswa" element={<DashboardUser />}>
          <Route path="home" element={<HomeSiswa />} />
          <Route path="exam" element={<ExamListPage />} />
          <Route path="exam/:id" element={<ExamDetail />} />
          <Route path="setting" element={<SettingLayout />}>
            <Route path="edit-profile" element={<EditProfileCard />} />
            <Route path="ubah-password" element={<UbahPasswordCard />} />
          </Route>
        </Route>
      </Route>

      {/* 404 Routes - HARUS DI PALING BAWAH */}
      {/* <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} /> */}
    </Routes>
  );
}

export default App;
