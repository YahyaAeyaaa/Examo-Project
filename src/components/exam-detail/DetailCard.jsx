import React from 'react'
import DetailItem from './items/DetailItem'
import { Calendar, ArrowDownWideNarrow, Clock, FileText } from 'lucide-react'
import ButtonStart from './items/ButtonStart'

const dummyDetail = [
  {
    bgColor: 'bg-[#FFF9E5]',
    icon: <Calendar /> ,
    iconColor: 'text-[#FFC615]',
    label: 'Tanggal',
    value: '12 Juni 2025',
   
  },
  {
    bgColor: 'bg-[#E6F3FF]',
    icon: <Clock />,
    iconColor: 'text-[#0077F4]',
    label: 'Waktu Ujian',
    value: '30 menit',
    className: '',
  },
  {
    bgColor: 'bg-[#FFEFE8]',
    icon: <FileText />,
    iconColor: 'text-[#FD9B73]',
    label: 'Jumlah Soal',
    value: '30 menit',
    className: '',
  },
  {
    bgColor: 'bg-[#E6FFF1]',
    icon: <ArrowDownWideNarrow />,
    iconColor: 'text-[#2ECC71]',
    label: 'Nilai KKM',
    value: '30 menit',
    className: '',
  }  
]

const DetailCard = () => {
  return (
    <div className='p-4 bg-white max-h-[730px] rounded-[15px]'>
      <div className="bg-[#D5EDFF] py-5 px-4 flex justify-center rounded-[10px] overflow-hidden mb-4 xl:mb-6">
        <img
          src='./image/examCard.png'
          alt="Ujian"
          className="md:w-50 md:h-40 object-cover object-center transform transition-transform duration-300 group-hover:scale-[1.2] origin-center"/>
      </div>
      <div className='flex justify-between items-center mb-4 xl:mb-6'>
        <p className='text-2xl md:text-[32px] font-semibold leading-custom'>Ujian Bab 1</p>
        <div className='px-2 py-1 bg-[#FFEDEE] rounded-[25px]'>
          <p className='text-xs md:text-sm text-[#D21F28]'>08:00 AM</p>
        </div>
      </div>
      <div className='space-y-2 mb-4'>
      {dummyDetail.map((item, index) => (
        <DetailItem
          key={index}
          bgColor={item.bgColor}
          icon={item.icon}
          iconColor={item.iconColor}
          label={item.label}
          value={item.value}          
        />
      ))}
      </div>  
      <p className='text-lg font-medium'>Deskripsi:</p>
      <p className='text-[#555555] text-lg md:text-sm xl:text-lg leading-[25px]'>Ujian informatika Bab 1, mengujikan kepada siswa tentang dasar komputer yang meliputi perangkat keras, perangkat lunak, dan fungsinya dalam proses kerja komputer. Semoga berhasil !</p>
     <ButtonStart />

    </div>
  )
}

export default DetailCard
