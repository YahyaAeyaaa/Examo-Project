import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom' // Tambah Navigate
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
import RiwayatLangganan from './pages/RiwayatLangganan';
import PaketLangganan from './pages/PaketLangganan';
import KredensialSettings from './pages/KredensialSettings';
import DetailPaket from './pages/DetailPaketLangganan';
import NilaiUjianSiswa from './pages/NilaiUjianSiswa';
import TambahBankSoal from './pages/TambahBankSoal';
import NotFound from './pages/404';
import DaftarSoal from './pages/DaftarSoal';
import ExamDetailGuru from './pages/ExamDetailGuru';
import DetailNilaiSiswa from './pages/DetailNilai'
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
          <Route path="/SettingsGuru/kredensial" element={<KredensialSettings />} />
          <Route path="/LanggananGuru/paket" element={<PaketLangganan />} />
          <Route path="/LanggananGuru/riwayat" element={<RiwayatLangganan />} />
          <Route path='/DetailPaket' element={<DetailPaket />} />
          <Route path='/NilaiUjianSiswa' element={<NilaiUjianSiswa />} />
          <Route path='/TambahBankSoal' element={<TambahBankSoal />} />
          <Route path='/DaftarSoal' element={<DaftarSoal />} />
          <Route path='/ExamDetailGuru' element={<ExamDetailGuru />} />
          <Route path='/DetailNilaiSiswa' element={<DetailNilaiSiswa />} />
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

      {/* 404 Routes - HARUS DI PALING BAWAH
      <Route path="/404" element={<NotFound />} />
      <Route path='*' element={<Navigate to="/404" replace />} /> */}
    </Routes>
  );
}

export default App;