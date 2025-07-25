import HelloCard from '../../components/dashboard/HelloCard'
import TotalCard from '../../components/dashboard/TotalCard'
import SearchItem from '../../components/dashboard/SearchItem'
import ExamCard from '../../components/dashboard/ExamCard'

const contohUjian = [
  {
    id: 1,
    title: "Ujian Bab 2 matematika sangat sulit",
    subject: "Matematika",
    questions: 25,
    status: "nonaktif",
    
  },
  {
    id: 2, 
    title: "Quiz Bab 5",
    subject: "Bahasa Indonesia",
    questions: 20,
    status: "berlangsung",
    
  },
  {
    id: 3,
    title: "Ujian Semester",
    subject: "Fisika", 
    questions: 30,
    status: "aktif",
    
  }
];

const HomeSiswa = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 lg:pt-12 max-w-[1198px] mx-[10px] xl:mx-auto ">
      <div className="mb-6">
        <SearchItem className="" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_257px] xl:grid-cols-[1fr_309px] gap-6 lg:gap-11 mb-12 lg:mb-12">
        <HelloCard />
        <TotalCard />
      </div>
      
      <div className="mb-8 lg:mb-12">
        <div className="flex justify-between items-center mb-6 lg:mb-8">
          <p className="text-lg lg:text-2xl font-medium text-black">Ujian Aktif</p>
          <p className="text-sm lg:text-xl text-[#0081FF] cursor-pointer hover:underline">
            Lihat Semua
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {contohUjian.map((exam) => (
            <div key={exam.id} className="flex justify-center">
              <ExamCard exam={exam} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSiswa
