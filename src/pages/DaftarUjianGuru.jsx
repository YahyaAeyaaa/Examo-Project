import Button from "../components/element/button/button";
import SearchInput from "../components/dashboardGuru/InputSearch";
import FilterDate from "../components/element/filter/FilterDate";
import DaftarUjianCard from "../components/Fragment/DaftarUjianCard";
import { Link } from "react-router-dom";

// Dummy data - nanti ganti sama data dari API/database
const semuaUjian = [
    {
        id: 1,
        title: "Ujian Bab 2 matematika sangat sulit",
        subject: "Matematika",
        questions: 25,
        status: "aktif",
        image: '/image/icon1.png'
    },
    {
        id: 2, 
        title: "Quiz Bab 5",
        subject: "Bahasa Indonesia",
        questions: 20,
        status: "berlangsung",
        image: '/image/icon1.png'
    },
    {
        id: 3,
        title: "Ujian Semester",
        subject: "Fisika", 
        questions: 30,
        status: "nonaktif",
        image: '/image/icon1.png'
    },
    {
        id: 4,
        title: "Ulangan Harian IPA",
        subject: "IPA",
        questions: 15,
        status: "aktif",
        image: '/image/icon1.png'
    },
    {
        id: 5,
        title: "Quiz Sejarah",
        subject: "Sejarah",
        questions: 10,
        status: "nonaktif",
        image: '/image/icon1.png'
    },
    {
        id: 6,
        title: "Ujian Praktek",
        subject: "Komputer",
        questions: 20,
        status: "berlangsung",
        image: '/image/icon1.png'
    }
];

const DaftarUjian = () => {
    const handleDeleteUjian = (ujianId) => {
        console.log("Delete ujian dengan ID:", ujianId);
        // Implement delete logic here
        // Bisa pake state management atau panggil API delete
    };

    const handleTambahUjian = () => {
        console.log("Tambah ujian baru");
        // Navigate ke halaman tambah ujian
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-[1400px] mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-xl lg:text-2xl font-semibold">Daftar Ujian</h1>
                </div>
                <div>
                    <Link to='/TambahUjian'>
                    <Button 
                        text="+ Tambah Ujian"
                        className="w-full sm:w-auto rounded-lg px-4 py-2" 
                        texts="text-white"
                        onClick={handleTambahUjian}
                    >
                    </Button>
                    </Link>
                </div>
            </div>

            {/* Search & Filter */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
                <div className="flex-1 lg:max-w-md">
                    <SearchInput />
                </div>
                <FilterDate /> 
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {semuaUjian.map((ujian) => (
                    <DaftarUjianCard key={ujian.id}>
                        <DaftarUjianCard.Header image={ujian.image} />
                        <DaftarUjianCard.Body 
                            title={ujian.title} 
                            kondisi={ujian.status} 
                            jumlahPertanyaan={`${ujian.questions} Soal`}
                        />
                        <DaftarUjianCard.Footer 
                            examData={ujian}
                            onDelete={handleDeleteUjian}
                            showDelete={true} // Show delete button di daftar ujian
                        />
                    </DaftarUjianCard>
                ))}
            </div>

            {/* Empty State */}
            {semuaUjian.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-gray-500 text-lg">Belum ada ujian yang dibuat</p>
                </div>
            )}
        </div>
    );
};

export default DaftarUjian;