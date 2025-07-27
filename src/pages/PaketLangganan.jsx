
import { IoMdCheckmark } from "react-icons/io";
import Button from "../components/element/button/button";

const PaketLangganan = () => {
    return (
        <>
        <div className="h-screen px-8 py-15">
            {/* header */}
            <div className="mb-5">
                <h1 className="text-lg mb-1">Paket Langganan</h1>
                <p className="text-sm">Pilih paket langganan sesuai kebutuhan mengajarmu!</p>
            </div>
            {/* header Selesai */}
            <div className="flex flex-wrap items-center justify-start gap-3">
                <section className="rounded-lg p-5" 
                style={{ 
                    width: '300px',
                    boxShadow: '0 -4px 0 0 rgb(59, 130, 246), 1px 0 3px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.08)'
                }}  
                >
                <h1 className="font-semibold text-md">Paket Premium</h1>
                <p className="text-sm mb-2" style={{ color : '#575757' }} >Untuk pengguna aktif</p>
                <div style={{ width : '63px' , background : '#E9FFF2' , height : '24px' }}
                className="rounded-full flex justify-center items-center mb-2">
                    <p style={{ color : '#2ECC71' }}>Aktif</p>
                </div>
                <div className="flex items-center justify-start mb-3">
                <h1 className="text-lg font-semibold">
                    Rp.250.000
                </h1>
                <h1 className="text-xs">
                    / bulan
                </h1>
                </div>
                <h1>Fitur Utama : </h1>
                <ul className="mb-3">
                    <li className="flex items-center gap-3 mb-3">
                        <IoMdCheckmark className="text-blue-400"/>
                        <p>Ujian Tak Terbatas</p>
                    </li>
                                        <li className="flex items-center gap-3 mb-3">
                        <IoMdCheckmark className="text-blue-400"/>
                        <p>Ujian Tak Terbatas</p>
                    </li>
                                        <li className="flex items-center gap-3">
                        <IoMdCheckmark className="text-blue-400"/>
                        <p>Ujian Tak Terbatas</p>
                    </li>
                </ul>
                <Button text = 'Berlangganan' className='text-white w-full rounded-lg' />
            </section>
            
            </div>
        </div>
        </>
    )
}

export default PaketLangganan