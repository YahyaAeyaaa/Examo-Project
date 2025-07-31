import { GoPaperclip } from "react-icons/go";


const KredensialSettings = () => {
    return (
        <>
        <div className="h-screen px-10 py-15">
            <h1 className="text-2xl mb-4">Kredensial</h1>
            <section className="w-full shadow-md px-12 py-10 rounded-lg">
                <h1 className="text-xl">Examo</h1>
                <p style={{ color : '#575757' }}>Examo menyediakan kunci API untuk integrasi pembayaran online dan menawarkan templat yang mudah digunakan dan antarmuka yang dapat disesuaikan sehingga mudah diimplementasikan.
                </p>
                <hr className="my-5 text-gray-300" />
                <h1 className="text-xl mb-3">API Keys</h1>
                <section className="w-full p-3 rounded-md text-lg mb-5 shadow-md"
                style={{ background : '#ECF7FF' }}
                >
                    <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center justify-center gap-5">
                        <h1 className="font-semibold">Teacher Id</h1> {' :'}
                        <p>Exam60</p>
                        </div>
                    </div>
                    <div>
                        <GoPaperclip className="text-xl"/>
                    </div>
                    </div>
                    <hr className="my-5 text-gray-400" />
                    <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center justify-center gap-5">
                        <h1 className="font-semibold">Teacher Key</h1> {' :'}
                        <p>bhsy7w838Rgh</p>
                        </div>
                    </div>
                    <div>
                        <GoPaperclip className="text-xl"/>
                    </div>
                    </div>
                </section>
                <section className="w-full p-5 shadow-md rounded-lg flex gap-5 " style={{ background : '#FFE6E6' }}>
                <img src="/image/Warning.png" alt="" className="w-15 h-15"/>
                <div>
                <p className="text-lg">
                    Kunci ini dibuat secara otomatis oleh sistem dan tidak boleh diubah. Jika Anda benar-benar perlu mengubah kunci karena suatu alasan, silakan.
                </p>
                <p className="text-lg text-blue-500">
                    Hubungi Kami
                </p>
                </div>
                </section>
            </section>
        </div>
        </>
    )
}

export default KredensialSettings