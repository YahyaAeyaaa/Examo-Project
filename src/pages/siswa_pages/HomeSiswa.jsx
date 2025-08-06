import HelloCard from '../../components/dashboard/HelloCard'
import TotalCard from '../../components/dashboard/TotalCard'
import SearchItem from '../../components/dashboard/SearchItem'
import ExamCard from '../../components/dashboard/ExamCard'
import { useEffect, useState } from 'react'
import { getUserExams } from '../../config/api'
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom'


const HomeSiswa = () => {
  const [allExams, setAllExams] = useState([]) 
  const [filteredExams, setFilteredExams] = useState([]) 
  const [isSearching, setIsSearching] = useState(false) 

  const fetchExams = async () => {
    try {
      const response = await getUserExams()
      const examData = response.data.data || []
      
      const mapped = examData.map((data) => ({
        id: data.id,
        title: data.titles,
        questions: data.total_questions,
        status: data.status,
        subject: data.category?.name,
      }));
      
      setAllExams(mapped); 
      setFilteredExams(mapped); //hasil search
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchExams()
  }, [])

  const handleSearchChange = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredExams(allExams) 
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    const filtered = allExams.filter(exam => 
      exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (exam.subject && exam.subject.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    setFilteredExams(filtered) 
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-12 max-w-[1198px] mx-[10px] xl:mx-auto min-h-screen">
      <div className="mb-6">
        <SearchItem className=""
        onSearchChange={handleSearchChange}
          delay={250} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_257px] xl:grid-cols-[1fr_309px] gap-6 lg:gap-11 mb-12 lg:mb-12">
        <HelloCard />
        <TotalCard />
      </div>
      
      <div className="mb-8 lg:mb-12">
        <div className="flex justify-between items-center mb-6 lg:mb-8">
          <p className="text-lg lg:text-2xl font-medium text-black">Ujian Aktif</p>
          <Link to='/siswa/exam' className="text-sm lg:text-xl text-[#0081FF] cursor-pointer hover:underline">
            Lihat Semua
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredExams.length > 0 ? (
            filteredExams.map((exam) => (
              <div key={exam.id} className="flex justify-center">
                <ExamCard exam={exam} />
              </div>
            ))
          ) : isSearching ? (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 mb-4 flex justify-center">
                <img src="/image/data-not-found.png" alt="" />
              </div>
                <h3 className="text-[22px] font-semibold text-[#373737] mb-2">
                Oops! Data tidak ditemukan
                </h3>    
                <p className='text-lg text-[#828282]'>Silahkan periksa kembali <br /> filter atau kata kunci.</p>        
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HomeSiswa
