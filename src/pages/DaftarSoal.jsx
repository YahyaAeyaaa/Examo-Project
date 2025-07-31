import { IoMdArrowBack} from "react-icons/io"
import { FaBookBookmark } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

const DaftarSoal = () => {
    const [showAnswers, setShowAnswers] = useState(true);

    return (
        <>
            <div className="h-auto px-30 py-15">
                <div className="flex justify-between items-center">
                <h1 className="text-2xl">Daftar Soal</h1>
                <Link to='/TambahBanksoal' >
                <button className="bg-white rounded-lg px-3 py-2 flex items-center justify-center gap-3 outline-none">
                    <IoMdArrowBack />
                    <h1>Kembali</h1>
                </button>
                </Link>
                </div>
                <section className="w-full max-h-40 px-10 py-5 rounded-lg my-5 flex justify-between" style={{ background : '#0081FF1A' }}>
                    <div className=" flex items-start justify-center gap-6">
                    <div className="bg-blue-500 w-auto h-auto p-5 rounded-lg">
                        <FaBookBookmark className="text-white"/>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">Informatika</h1>
                        <p>Sistem operasi dan cara kerja komputer: 
                        Materi sistem operasi dan alur kerja komputer dalam memproses data.</p>
                        <p className="text-blue-500">Jumplah Soal : 30</p>
                    </div>
                    </div>
                    <img src="/image/ABook.png" alt="" className="w-30 " />
                </section>
                <section className="w-full h-auto px-6 py-3 bg-white rounded-xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-start justify-center gap-5">
                            <h1>Tampilkan Jawaban</h1>
                            {/* Custom Switch dengan Tailwind */}
                            <button
                                onClick={() => setShowAnswers(!showAnswers)}
                                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out ${
                                    showAnswers ? 'bg-lime-500' : 'bg-gray-300'
                                }`}
                            >
                                <span
                                    className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${
                                        showAnswers ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                                />
                            </button>
                        </div>
                        <div>
                            <button className="w-full rounded-lg px-10 py-2"
                            style={{ background : '#F39C121A' , color : '#F39C12' }}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                    <hr className="my-4 text-gray-300" />
                    
                    {/* Soal 1 - Single Choice */}
                    <div className="mb-8">
                        <div className="flex items-start gap-3 mb-4">
                            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm font-medium">Single Choice</span>
                        </div>
                        <p className="text-lg font-medium mb-4">1. Komponen utama dalam sistem komputer yang berfungsi untuk mengolah data disebut...</p>
                        <div className="space-y-3">
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="radio" name="soal1" value="A" className="w-4 h-4 text-blue-600" />
                                <span> RAM (Random Access Memory)</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="radio" name="soal1" value="B" className="w-4 h-4 text-blue-600" />
                                <span> CPU (Central Processing Unit)</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="radio" name="soal1" value="C" className="w-4 h-4 text-blue-600" />
                                <span> Hard Disk Drive</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="radio" name="soal1" value="D" className="w-4 h-4 text-blue-600" />
                                <span> Motherboard</span>
                            </label>
                        </div>
                        {showAnswers && (
                            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-400 rounded">
                                <p className="text-green-700 font-medium">✓ Jawaban Benar:  CPU (Central Processing Unit)</p>
                                <p className="text-green-600 text-sm mt-1">CPU adalah otak komputer yang bertugas mengolah semua data dan instruksi.</p>
                            </div>
                        )}
                    </div>

                    {/* Soal 2 - Multiple Choice */}
                    <div className="mb-8">
                        <div className="flex items-start gap-3 mb-4">
                            <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-sm font-medium">Multiple Choice</span>
                        </div>
                        <p className="text-lg font-medium mb-4">2. Berikut ini yang termasuk perangkat input pada komputer adalah... (Pilih lebih dari satu)</p>
                        <div className="space-y-3">
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="checkbox" name="soal2" value="A" className="w-4 h-4 text-blue-600 rounded" />
                                <span> Keyboard</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="checkbox" name="soal2" value="B" className="w-4 h-4 text-blue-600 rounded" />
                                <span> Monitor</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="checkbox" name="soal2" value="C" className="w-4 h-4 text-blue-600 rounded" />
                                <span> Mouse</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="checkbox" name="soal2" value="D" className="w-4 h-4 text-blue-600 rounded" />
                                <span> Speaker</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="checkbox" name="soal2" value="E" className="w-4 h-4 text-blue-600 rounded" />
                                <span> Microphone</span>
                            </label>
                        </div>
                        {showAnswers && (
                            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-400 rounded">
                                <p className="text-green-700 font-medium">✓ Jawaban Benar: keyboard dan Mouse</p>
                                <p className="text-green-600 text-sm mt-1">Keyboard, Mouse, dan Microphone adalah perangkat input yang mengirim data ke komputer.</p>
                            </div>
                        )}
                    </div>

                    {/* Soal 3 - Single Choice */}
                    <div className="mb-8">
                        <div className="flex items-start gap-3 mb-4">
                            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm font-medium">Single Choice</span>
                        </div>
                        <p className="text-lg font-medium mb-4">3. Sistem operasi yang dikembangkan oleh Microsoft adalah...</p>
                        <div className="space-y-3">
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="radio" name="soal3" value="A" className="w-4 h-4 text-blue-600" />
                                <span> Linux</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="radio" name="soal3" value="B" className="w-4 h-4 text-blue-600" />
                                <span> Windows</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="radio" name="soal3" value="C" className="w-4 h-4 text-blue-600" />
                                <span> macOS</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="radio" name="soal3" value="D" className="w-4 h-4 text-blue-600" />
                                <span> Android</span>
                            </label>
                        </div>
                        {showAnswers && (
                            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-400 rounded">
                                <p className="text-green-700 font-medium">✓ Jawaban Benar: Windows</p>
                                <p className="text-green-600 text-sm mt-1">Windows adalah sistem operasi yang dikembangkan dan diproduksi oleh Microsoft Corporation.</p>
                            </div>
                        )}
                    </div>

                    {/* Soal 4 - Multiple Choice */}
                    <div className="mb-8">
                        <div className="flex items-start gap-3 mb-4">
                            <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-sm font-medium">Multiple Choice</span>
                        </div>
                        <p className="text-lg font-medium mb-4">4. Fungsi utama sistem operasi meliputi... (Pilih lebih dari satu)</p>
                        <div className="space-y-3">
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="checkbox" name="soal4" value="A" className="w-4 h-4 text-blue-600 rounded" />
                                <span> Mengelola memori</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="checkbox" name="soal4" value="B" className="w-4 h-4 text-blue-600 rounded" />
                                <span> Mengatur proses</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="checkbox" name="soal4" value="C" className="w-4 h-4 text-blue-600 rounded" />
                                <span> Mengelola file dan direktori</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="checkbox" name="soal4" value="D" className="w-4 h-4 text-blue-600 rounded" />
                                <span> Membuat dokumen</span>
                            </label>
                        </div>
                        {showAnswers && (
                            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-400 rounded">
                                <p className="text-green-700 font-medium">✓ Jawaban Benar: Mengatur Proses dan Mengelola File dan Direktori</p>
                                <p className="text-green-600 text-sm mt-1">Sistem operasi bertugas mengelola memori, mengatur proses, dan mengelola file sistem.</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </>
    )
}

export default DaftarSoal