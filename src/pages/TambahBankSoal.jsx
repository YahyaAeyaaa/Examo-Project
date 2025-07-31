import { IoMdArrowBack } from "react-icons/io";

const TambahBankSoal = () => {
    return (
        <>
            <div className="px-40 py-15">
                <h1 className="text-xl mb-5">Tambah Bank Soal</h1>
                <section className="w-full bg-white rounded-lg shadow p-10 mb-5">
                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <h1 className="mb-3 text-xl">Judul Bank Soal</h1>
                            <input
                                type="text"
                                className="w-105 p-3 placeholder-gray-300 focus:ring-2 focus:ring-gray-500 outline-none ring-2 ring-gray-300 rounded-lg"
                                placeholder="Masukkan Judul Bank Soal"
                            />
                        </div>
                        <div>
                            <h1 className="mb-3 text-xl">Jumlah Soal</h1>
                            <input
                                type="number"
                                min="0"
                                max="100"
                                className="w-105 p-3 placeholder-gray-300 focus:ring-2 focus:ring-gray-500 outline-none ring-2 ring-gray-300 rounded-lg"
                                placeholder="Masukkan Jumlah Soal"
                            />
                        </div>
                    </div>
                    <div className="mb-8">
                        <h1 className="mb-3 text-xl">Deskripsi Bank Soal</h1>
                        <textarea
                            rows="4"
                            placeholder="Ujian informatika Bab 1, mengujikan kepada siswa tentang dasar komputer yang meliputi perangkat keras, perangkat lunak, dan fungsinya dalam proses kerja komputer. Semoga berhasil !"
                            className="w-full p-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-500 outline-none ring-2 ring-gray-300 rounded-lg resize-vertical"
                        />
                    </div>
                </section>


                {/* Form Input Soal untuk checkbox */}
                <div className="w-full bg-white rounded-lg shadow p-10 my-10">
                    <h1 className="text-xl mb-5">Tambah Soal</h1>

                    {/* Upload Gambar */}
                    <label
                        htmlFor="image-upload"
                        className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg p-8 text-center mb-5 cursor-pointer block"
                    >
                        <div className="flex flex-col items-center">
                            <div>
                                <img src="/image/CoverImages.png" alt="" /> 
                                {/* ini default image */}
                            </div>
                            <p className="text-gray-500 mb-2">Upload Gambar</p>
                            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded text-sm mb-3">Opsional</span>
                        </div>
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="image-upload"
                    />

                    <div className="flex justify-center items-start gap-5 mb-5">
                    {/* Textarea Soal */}
                        <textarea
                            placeholder="Masukkan Soal Disini"
                            rows="4"
                            className="w-full p-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none border border-gray-300 rounded-lg resize-vertical"
                        />

                    {/* Dropdown Tipe Soal */}
                        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                            <option>Checkbox</option>
                            <option>Pilihan Ganda</option>
                            <option>Essay</option>
                        </select>
                    </div>

                    {/* Jawaban Options */}
                    <div className="space-y-3 mb-5">
                        {[1, 2, 3, 4].map((index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-3 border  border-gray-200 rounded-lg"
                            >
                                <input
                                    type="text"
                                    placeholder="+ Tambah Jawaban"
                                    className="flex-1 text-gray-700 placeholder-gray-400 outline-none"
                                />
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300">
                                        <svg
                                            className="w-4 h-4 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </button>
                                    <button className="w-8 h-8 bg-red-100 rounded flex items-center justify-center hover:bg-red-200">
                                        <svg
                                            className="w-4 h-4 text-red-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tombol Actions */}
                    <div className="flex justify-end pt-4 w-full gap-10">
                        <button
                            className="text-blue-500 font-medium w-full rounded-xl py-3"
                            style={{ background: "#0081FF1A" }}
                        >
                            + Tambahkan opsi lain
                        </button>
                        <button className="font-semibold px-6 py-2 w-1/5 rounded-xl "
                        style={{ background : '#FADBD8' , color : '#D21F28' }}
                        >
                            Hapus Soal
                        </button>
                    </div>
                </div>



                {/* form untuk Pilihan Ganda */}
                <div className="w-full bg-white rounded-lg shadow p-10 my-10">
                    <h1 className="text-xl mb-5">Tambah Soal</h1>
                    {/* Upload Gambar */}
                    <label
                        htmlFor="image-upload"
                        className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg p-8 text-center mb-5 cursor-pointer block"
                    >
                        <div className="flex flex-col items-center">
                            <div>
                                <img src="/image/CoverImages.png" alt="" /> 
                                {/* ini default image */}
                            </div>
                            <p className="text-gray-500 mb-2">Upload Gambar</p>
                            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded text-sm mb-3">Opsional</span>
                        </div>
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="image-upload"
                    />

                    <div className="flex justify-center items-start gap-5 mb-5">
                    {/* Textarea Soal */}
                        <textarea
                            placeholder="Masukkan Soal Disini"
                            rows="4"
                            className="w-full p-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none border border-gray-300 rounded-lg resize-vertical"
                        />

                    {/* Dropdown Tipe Soal */}
                        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                            <option>Checkbox</option>
                            <option>Pilihan Ganda</option>
                            <option>Essay</option>
                        </select>
                    </div>

                    {/* Jawaban Options */}
                    <div className="space-y-3 mb-5">
                        {[1, 2, 3, 4].map((index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-3 border  border-gray-200 rounded-lg"
                            >
                                <input
                                    type="text"
                                    placeholder="+ Tambah Jawaban"
                                    className="flex-1 text-gray-700 placeholder-gray-400 outline-none"
                                />
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                                        <svg
                                            className="w-4 h-4 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </button>
                                    <button className="w-8 h-8 bg-red-100 rounded flex items-center justify-center hover:bg-red-200">
                                        <svg
                                            className="w-4 h-4 text-red-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tombol Actions */}
                    <div className="flex justify-end pt-4 w-full gap-10">
                        <button
                            className="text-blue-500 font-medium w-full rounded-xl py-3"
                            style={{ background: "#0081FF1A" }}
                        >
                            + Tambahkan opsi lain
                        </button>
                        <button className="font-semibold px-6 py-2 w-1/5 rounded-xl "
                        style={{ background : '#FADBD8' , color : '#D21F28' }}
                        >
                            Hapus Soal
                        </button>
                    </div>
                </div>
                
                <div className="flex items-center justify-between mt-7">
                    <button style={{ background : '#0081FF1A' , color : '#0081FF' }} className="ring-1 ring-blue-500 w-50 rounded-lg p-2">
                        + Tambah Soal
                    </button>   
                    <button style={{ background : '#0081FF' }} className="text-white p-2 w-30 rounded-lg">
                        Simpan
                    </button>
                </div>
            </div>
        </>
    );
};

export default TambahBankSoal;
