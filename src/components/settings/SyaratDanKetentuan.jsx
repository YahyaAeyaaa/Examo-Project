import React from 'react'
import ListItem from './items/ListItem'

const dummyTerms = 
[
  {
    "id": 1,
    "title": "Penerimaan Syarat",
    "type": "text",
    "content": "Pengguna wajib mematuhi aturan yang berlaku di platform ini."
  },
  {
    "id": 2,
    "title": "Layanan",
    "type": "text",
    "content": "Examo. menyediakan layanan ujian online, pembuatan ujian, pembuatan bank soal, dan progam detail nilai melalui platfrom digital"
  },
  {
    "id": 3,
    "title": "Akun Pengguna",
    "type": "list",
    "content": [
      "Pengguna wajib mengisi data dengan benar dan lengkap.",
      "Menjaga akun dan kata sandi adalah tanggung jawab pengguna.",
      "Segala aktivitas dalam akun menjadi tanggung jawab pemiliknya."
    ]
  },
  {
    "id": 4,
    "title": "Hak Cipta dan Konten",
    "type": "list",
    "content": [
      "Semua materi dan konten di platform ini dilindungi hak cipta dan tidak boleh disalin, didistribusikan, atau digunakan tanpa izin tertulis.",
      "Pengguna tidak diperbolehkan mengunggah konten yang melanggar hukum atau mengandung SARA.",
    ]
  },
  {
    "id": 5,
    "title": "Perubahan Layanan",
    "type": "text",
    "content": "Kami berhak untuk mengubah, menghentikan, atau memperbarui fitur atau ketentuan kapan saja dengan atau tanpa pemberitahuan sebelumnya."
  }
]


const SyaratDanKetentuan = () => {
  return (
    <div className='max-w-[740px] px-12 py-12 bg-white rounded-[20px] shadow-md'>
      <h1 className='font-semibold text-2xl'>Syarat dan Ketentuan</h1>
      <div className="mt-4">
        {dummyTerms.map((terms, index) => (
          <ListItem
            key={terms.id || index}
            number={index + 1}
            title={terms.title}
            type={terms.type}
            content={terms.content}
          />
        ))}    
      </div>
    </div>
  )
}

export default SyaratDanKetentuan
