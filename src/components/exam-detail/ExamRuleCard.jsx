import React from 'react'

const ExamRulesCard = () => {
  return (
    <div className='px-8 py-6 rounded-[15px] bg-white'>
      <h3>Peraturan dan Tata Cara Ujian:</h3>

      <div>
        <h3 className='flex items-center gap-2'>
            <span>📌</span>Peraturan Umum</h3>
        <ol className="list-decimal pl-11 mt-1 space-y-1">
            <li>Peserta wajib login menggunakan akun yang telah terdaftar sebelum memulai ujian.</li>
            <li>Ujian hanya dapat diakses pada waktu yang telah ditentukan.</li>
            <li>Dilarang keras membuka tab, aplikasi, atau perangkat lain selama ujian berlangsung.</li>
            <li>Peserta dilarang bekerja sama atau menyalin jawaban dari peserta lain.</li>
            <li>Setiap pelanggaran akan tercatat dan berpotensi menyebabkan ujian dibatalkan.</li>
            <li>Jika koneksi internet terputus, peserta harus segera menghubungi pengawas ujian.</li>
        </ol>
      </div>

      <div>
        <h3 className='flex items-center gap-2'>
            <span>🖥️</span>Tata Cara Pelaksanaan Ujian</h3>
        <ol className="list-decimal pl-11 mt-1 space-y-1">
            <li>Baca seluruh peraturan dengan seksama sebelum memulai ujian.</li>
            <li>Tekan tombol "Mulai Ujian" di bawah halaman ini untuk memulai.</li>
            <li>Setelah ujian dimulai:
                <ul className='list-disc pl-8'>
                    <li>Jawaban akan tersimpan otomatis saat berpindah soal</li>
                    <li>Waktu ujian akan berjalan otomatis dan tidak dapat dijeda.</li>
                </ul>
            </li>
            <li>Jika waktu habis, ujian akan berakhir secara otomatis.</li>
            <li>Klik tombol "Kumpulkan Ujian" setelah selesai menjawab semua soal.</li>
            <li>Pastikan semua soal telah dijawab sebelum mengumpulkan ujian. </li>
        </ol>
      </div>

      <div>
        <h3 className='flex items-center gap-2'>
            <span>❗</span>Peringatan:</h3>
        <ol className='list-decimal pl-11 mt-1 space-y-1'>
            <li>Sistem mencatat aktivitas Anda selama ujian.</li>
            <li>Pelanggaran aturan dapat menyebabkan nilai tidak valid atau diskualifikasi.</li>
        </ol>
      </div>
    </div>
  )
}

export default ExamRulesCard
