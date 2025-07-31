import React from 'react'
import DetailItem from '../../exam-detail/items/DetailItem'
import { MdOutlineDateRange } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { FaSortAmountDown } from "react-icons/fa";



const dummyDetail = [
  {
    bgColor: 'bg-[#FFF9E5]',
    icon: <MdOutlineDateRange /> ,
    iconColor: 'text-[#FFC615]',
    label: 'Tanggal',
    value: '12 Juni 2025',
   
  },
  {
    bgColor: 'bg-[#E6F3FF]',
    icon: <LuClock4 />,
    iconColor: 'text-[#0077F4]',
    label: 'Waktu Ujian',
    value: '30 menit',
    className: '',
  },
  {
    bgColor: 'bg-[#FFEFE8]',
    icon: <CgNotes />,
    iconColor: 'text-[#FD9B73]',
    label: 'Jumlah Soal',
    value: '30 menit',
    className: '',
  },
  {
    bgColor: 'bg-[#E6FFF1]',
    icon: <FaSortAmountDown />,
    iconColor: 'text-[#2ECC71]',
    label: 'Nilai KKM',
    value: '30 menit',
    className: '',
  }  
]

const ExamCardGuru = () => {
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
    
      <div className='flex items-center justify-end gap-5 my-4'>
        <button className='px-4 py-2 rounded-lg cursor-pointer hover:scale-110 transform transition-all duration-300' style={{ background : '#FFF9E5' , color : '#FFAE1F' , width : '101px'  }} >
            Edit
        </button>
        <button className='px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transform transition-all duration-300 ' style={{ background : '#4D55CC' , color : '#FFFFFF' , width : '150px'  }} >
            Lihat Nilai
        </button>
      </div>
    </div>
  )
}

export default ExamCardGuru
