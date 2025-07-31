import { IoMdArrowBack } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const DetailPaket = () => {
    return (
        <>
        <div className="h-screen px-15 py-10">
            <div className="flex items-center justify-between mb-3">
            <h1 className=" text-2xl">Detail Paket Langganan</h1>
            <button className="flex items-center gap-3 rounded-lg shadow-md px-3 py-2">
                <IoMdArrowBack />
                <h1>Kembali</h1>
            </button>
            </div>
            <div className="flex items-center justify-between gap-4 ">
                <section className="border-gray-700 w-full px-7 py-5 bg-white rounded-xl">
                    <h1 className="mb-4 text-lg font-semibold">Detail Pemesanan</h1>
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <h1 className="font-semibold">Nama Paket</h1>
                            <h1 style={{ color : '#4E4E4E' }}>Paket Premium | 1 Bulan</h1>
                        </div>
                        <div>
                            <h1 className="font-semibold">Masa Berlaku</h1>
                            <h1 style={{ color : '#4E4E4E' }} >Paket aktif hingga 30 Juni 2025</h1>
                        </div>
                    </div>
                    <h1 className="font-semibold mb-0.5">Detail Paket</h1>
                    <p style={{ color : '#4E4E4E' }} className="mb-3">Paket sudah termasuk :</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                            <FaCheck className="text-blue-500 text-sm" />
                            <span style={{ color : '#4E4E4E' }} className="text-sm">Paket aktif mulai 01 Juni 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheck className="text-blue-500 text-sm" />
                            <span style={{ color : '#4E4E4E' }} className="text-sm">Buat ujian dengan limit 10 / minggu</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheck className="text-blue-500 text-sm" />
                            <span style={{ color : '#4E4E4E' }} className="text-sm">Buat soal sesuai kebutuhan</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheck className="text-blue-500 text-sm" />
                            <span style={{ color : '#4E4E4E' }} className="text-sm">Pantau hasil ujian secara langsung</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheck className="text-blue-500 text-sm" />
                            <span style={{ color : '#4E4E4E' }} className="text-sm">Download Template</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheck className="text-blue-500 text-sm" />
                            <span style={{ color : '#4E4E4E' }} className="text-sm">Export nilai dalam format PDF.</span>
                        </div>
                    </div>
                </section>
                <section className="w-full px-7 py-5 bg-white rounded-xl">
                    <h1 className="font-semibold mb-2">Detail Pembayaran</h1>
                    <div className="flex items-center justify-between mb-5"
                    style={{ color : '#4E4E4E' }}
                    >
                        <p>Paket Premium | 1 Bulan</p>
                        <p>Rp.250.000</p>
                    </div>
                    <div className="flex items-center justify-between mb-3"
                    style={{ color : '#4E4E4E' }}
                    >
                        <p>Admin atau Pajak</p>
                        <p>Rp.2.000</p>
                    </div>
                    <hr className="border-dashed text-gray-300 mb-3" />
                    <div className="flex items-center justify-between">
                    <p style={{ color : '#4E4E4E' }}>Total harga</p>
                    <p style={{ color : '#D21F28' }} className="font-semibold">Rp.252.000</p>
                    </div>
                    <hr className="border-dashed text-gray-300 my-3" />
                    <button className="w-full p-3 rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 text-white">
                        Lanjutkan Pembayaran
                    </button>
                </section>
            </div>
        </div>
        </>
    )
}

export default DetailPaket