import React from 'react'
import DetailItem from './items/DetailItem'
import { Calendar, ArrowDownWideNarrow, Clock, FileText } from 'lucide-react'
import ButtonStart from './items/ButtonStart'


const DetailCard = ({examData}) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const formatTime = (timeString) => {
    const date = new Date(timeString)
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  const getDetailItems = () => {
    if (!examData) return [];

    return [
      {
    bgColor: 'bg-[#FFF9E5]',
    icon: <Calendar /> ,
    iconColor: 'text-[#FFC615]',
    label: 'Tanggal',
    value: formatDate(examData.start_time),
   
  },
  {
    bgColor: 'bg-[#E6F3FF]',
    icon: <Clock />,
    iconColor: 'text-[#0077F4]',
    label: 'Waktu Ujian',
    value: `${examData.duration_minutes} menit`,
    className: '',
  },
  {
    bgColor: 'bg-[#FFEFE8]',
    icon: <FileText />,
    iconColor: 'text-[#FD9B73]',
    label: 'Jumlah Soal',
    value: `${examData.total_questions} Soal`,
    className: '',
  },
  {
    bgColor: 'bg-[#E6FFF1]',
    icon: <ArrowDownWideNarrow />,
    iconColor: 'text-[#2ECC71]',
    label: 'Nilai KKM',
    value: examData.kkm_score,
    className: '',
  }  
    ]
  }

  if (!examData) return <div>Loading...</div>

  return (
  <div className="bg-white rounded-[15px] max-h-[750px] h-full flex flex-col">
  <div className="p-4 overflow-y-auto flex-1">
    <div className="bg-[#D5EDFF] py-5 px-4 flex justify-center rounded-[10px] overflow-hidden mb-4 xl:mb-6">
      <img
        src="/image/examCard.png"
        alt="Ujian"
        className="md:w-50 md:h-40 object-cover object-center transform transition-transform duration-300 group-hover:scale-[1.2] origin-center"
      />
    </div>

    <div className="flex justify-between items-center mb-4 xl:mb-6">
      <p className="text-2xl md:text-[32px] font-semibold leading-custom">
        {examData.titles}
      </p>
      <div className="px-3 py-1 bg-[#FFEDEE] rounded-[25px] ">
        <p className="text-xs md:text-sm text-[#D21F28] whitespace-nowrap">
          {formatTime(examData.start_time)}
        </p>
      </div>
    </div>

    <div className="space-y-2 mb-4">
      {getDetailItems().map((item, index) => (
        <DetailItem key={index} {...item} />
      ))}
    </div>

    <p className="text-lg font-medium">Deskripsi:</p>
    <p className="text-[#555555] text-lg md:text-sm xl:text-lg leading-[25px]">
      {examData.description}
    </p>
  </div>

  <div className="p-4">
    <ButtonStart />
  </div>
</div>

);

}

export default DetailCard
