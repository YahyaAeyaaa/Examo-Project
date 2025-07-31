import FilterDate from "../components/element/filter/FilterDate"
import { TbEyeSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

const RiwayatLangganan = () => {
    return (
        <>
        <div className="px-25 py-15 h-screen">
            <h1 className="text-lg">Riwayat Pembelian</h1>
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-sm">Lihat riwayat pembelian langganan anda</h1>
                <div className="flex gap-3">
                    <FilterDate />
                    <div className="flex items-center gap-5">
                    <h1 style={{ color : '#757575' }}>Tampilkan :</h1>
                    <FilterDate />
                    </div>
                </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow">
            <table class="table-fixed w-full rounded-2xl">
            <thead style={{ background : '#0081FF' }} className="text-white text-sm">
                <tr>
                    <th className="py-3">No</th>
                    <th>Nama Paket</th>
                    <th>Durasi</th>
                    <th>Tanggal Mulai</th>
                    <th>Tanggal Berakhir</th>
                    <th>Status</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-center">
                    <td className="py-3"> 1</td>
                    <td>Paket Premium</td>
                    <td>1 bulan</td>
                    <td>01 Mei 2025</td>
                    <td>1 Juni 2025</td>
                    <td>
                        <button className="w-auto px-3 py-1 rounded-xl" style={{ background : '#FFAE1F1A' }}>
                            <h1 style={{ color : '#FFAE1F' }}>Pending</h1>
                        </button>
                    </td>
                    <td>
                        <Link to='/DetailPaket'>
                        <button>
                            <TbEyeSearch className="w-7 h-7" style={{ color : '#F8BD00' }} />
                        </button>
                        </Link>
                    </td>
                </tr>
                                <tr className="text-center">
                    <td className="py-3"> 2</td>
                    <td>Paket Murahan</td>
                    <td>1 bulan</td>
                    <td>01 February 2025</td>
                    <td>2 Maret 2025</td>
                    <td>
                        <button className="w-auto px-3 py-1 rounded-xl" style={{ background : '#E5FFF0' }}>
                            <h1 style={{ color : '#2ECC71' }}>Aktif</h1>
                        </button>
                    </td>
                    <td>
                        <Link to='/DetailPaket'>
                        <button>
                            <TbEyeSearch className="w-7 h-7" style={{ color : '#F8BD00' }} />
                        </button>
                        </Link>
                    </td>
                </tr>
                                <tr className="text-center">
                    <td className="py-3"> 3</td>
                    <td>Paket Paketan</td>
                    <td>1 bulan</td>
                    <td>01 Oktober 2025</td>
                    <td>1 Desember 2025</td>
                    <td>
                        <button className="w-auto px-3 py-1 rounded-xl" style={{ background : '#E9E9E9' }}>
                            <h1 style={{ color : '#717171' }}>Kadaluarsa</h1>
                        </button>
                    </td>
                    <td>
                        <Link to='/DetailPaket'>
                        <button>
                            <TbEyeSearch className="w-7 h-7" style={{ color : '#F8BD00' }} />
                        </button>
                        </Link>
                    </td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>
        </>
    )
}


export default RiwayatLangganan