import { BadgeCheck } from 'lucide-react'
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

const ExamCard = ({ exam }) => {
  const getStatusStyle = (status) => {
    return cn(
      "text-xs lg:text-[13px] px-[18px] lg:px-3 xl:px-[18px] py-1 rounded-3xl font-medium",
      {
        "bg-[#E9FFF2] text-[#2ECC71]": status === "aktif",
        "bg-[#FFEAEB] text-[#D21F28]": status === "nonaktif",
        "bg-[#FFF9E5] text-[#F8BD00]": status === "berlangsung",
        "bg-gray-100 text-gray-600": !["aktif", "nonaktif", "berlangsung"].includes(status)
      }
    );
  };

 
  const getStatusText = (status) => {
    const statusMap = {
      aktif: "Aktif",
      nonaktif: "Nonaktif", 
      berlangsung: "Berlangsung"
    };
    return statusMap[status] || "Unknown";
  };

 return (
  <div className="w-[356px] bg-white rounded-[10px] shadow-md overflow-hidden p-3 group transform transition-transform hover:scale-[1.03] duration-300">
    <div className="bg-[#D5EDFF] py-3 px-4 flex justify-center rounded-[10px] overflow-hidden">
      <img
       src='/image/examCard.png'
        alt="Ujian"
        className="w-40 h- object-cover object-center transform transition-transform duration-300 group-hover:scale-[1.2] origin-center"
      />
    </div>

    <div className="py-3">
      <div className="flex justify-between items-start mb-1">
        <h2 className="text-base md:text-lg xl:text-xl font-semibold text-black truncate w-[215px]">
          {exam.title}
        </h2>
        <span className={getStatusStyle(exam.status)}>
          {getStatusText(exam.status)}
        </span>
      </div>
      <p className="text-sm text-[#A9A9A9] mb-4">{exam.questions} Pertanyaan</p>

      <Link
        to={`/siswa/exam/${exam.id}`}
        className={cn(
          "block text-center w-full text-white text-base font-semibold py-2 rounded-[5px] transition duration-300",
          {
            "bg-gradient-to-b from-[#0081FF] to-[#025BB1] hover:brightness-150": exam.status !== "nonaktif",
            "bg-gray-300 text-gray-500 cursor-not-allowed": exam.status === "nonaktif",
          }
        )}>
        Selengkapnya
      </Link>
    </div>
  </div>

)}

export default ExamCard
