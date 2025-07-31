import { TbEyeSearch } from "react-icons/tb"
import { Link } from "react-router-dom"
import { IoMdArrowBack} from "react-icons/io"
import SearchInput from "../components/dashboardGuru/InputSearch"
import { TfiExport } from "react-icons/tfi";

const NilaiUjianSiswa = () => {
    return (
        <>
            <div className="h-screen px-25 py-15">
                <div className="mb-5 flex items-center justify-between">
                    <h1 className="text-lg">Nilai Ujian Siswa</h1>
                    <button className="flex items-center gap-3 rounded-lg shadow-md px-3 py-2">
                        <IoMdArrowBack />
                        <h1>Kembali</h1>
                    </button>
                </div>
                <div className="flex items-center justify-start gap-4">
                <SearchInput className='mb-4' />
                <button className="flex items-center justify-center px-3 py-2 gap-3 rounded-lg bg-blue-400 text-white">
                    <TfiExport />
                    <h1>Export</h1>
                </button>
                </div>
                <table class="table-fixed w-full rounded-2xl bg-white overflow-hidden">
            <thead style={{ background : '#0081FF' }} className="text-white text-sm">
                <tr>
                    <th className="py-3">No</th>
                    <th>Nama Siswa</th>
                    <th>Email Siswa</th>
                    <th>Nilai</th>
                    <th>Status</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-center">
                    <td className="py-3"> 1</td>
                    <td>Yaya</td>
                    <td>Yaya@gmail.com</td>
                    <td>85</td>
                    <td>
                        <button className="w-auto px-3 py-1 rounded-xl" style={{ background : '#E9FFF2' }}>
                            <h1 style={{ color : '#2ECC71' }}>Tuntas</h1>
                        </button>
                    </td>
                    <td>
                        <Link to='/'>
                        <button>
                            <TbEyeSearch className="w-7 h-7" style={{ color : '#F8BD00' }} />
                        </button>
                        </Link>
                    </td>
                </tr>
                                <tr className="text-center">
                    <td className="py-3"> 1</td>
                    <td>Lumpia rebus</td>
                    <td>umia@gmail.com</td>
                    <td>8</td>
                    <td>
                        <button className="w-auto px-3 py-1 rounded-xl" style={{ background : '#FFEDEE' }}>
                            <h1 style={{ color : '#D21F28' }}>Tidak Tuntas</h1>
                        </button>
                    </td>
                    <td>
                        <Link to='/'>
                        <button>
                            <TbEyeSearch className="w-7 h-7" style={{ color : '#F8BD00' }} />
                        </button>
                        </Link>
                    </td>
                </tr>
            </tbody>
            </table>
            </div>
        </>
    )
}

export default NilaiUjianSiswa