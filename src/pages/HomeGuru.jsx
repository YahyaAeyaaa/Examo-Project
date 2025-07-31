import SearchInput from "../components/dashboardGuru/InputSearch";
import DaftarCardUjian from "../components/Fragment/DaftarUjianCard";
import CardBankSoal from "../components/Fragment/BankSoalCard";
import HelloCardGuru from "../components/dashboardGuru/HelloCardGuru";
import TotalUjianCard from "../components/dashboardGuru/TotalUjianCard";
import TotalSiswaCard from "../components/dashboardGuru/TotalSiswaCard";
import PremiumBadge from "../components/dashboardGuru/PremiumBadge";

// Dummy data - nanti ganti sama data dari API/database
const contohUjian = [
    {
        id: 1,
        title: "Ujian Bab 2 matematika Susah Banget Jir",
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
        id: 0,
        title: "Ujian Semester ",
        subject: "Fisika", 
        questions: 30,
        status: "aktif",
        image: '/image/icon1.png'
    }
];

const HomeGuru = () => {
    // Filter hanya ujian yang aktif untuk ditampilkan di home
    const ujianAktif = contohUjian.filter(ujian => ujian.status === "aktif");
    
    const handleDeleteUjian = (ujianId) => {
        console.log("Delete ujian dengan ID:", ujianId);
        // Implement delete logic here
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6 lg:pt-8 max-w-[1400px] mx-auto">
            {/* Header Section dengan Search dan Premium Badge */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8 mb-8 lg:mb-10">
                <div className="flex-1 lg:max-w-md">
                    <SearchInput />
                </div>
                <PremiumBadge />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
                <div className="md:col-span-2">
                    <HelloCardGuru />
                </div>
                <TotalUjianCard totalUjian={contohUjian.length} />
                <TotalSiswaCard totalSiswa={60} />
            </div>

            {/* Ujian Aktif Section */}
            <div className="mb-8 lg:mb-12">
                <div className="flex justify-between items-center mb-6 lg:mb-8">
                    <h1 className="text-lg lg:text-2xl font-medium text-black">Ujian Aktif</h1>
                    <h1 className="text-sm lg:text-xl text-[#0081FF] hover:underline cursor-pointer transition duration-300">
                        Lihat Semua
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {ujianAktif.length > 0 ? (
                        ujianAktif.map((ujian) => (
                            <DaftarCardUjian key={ujian.id}>
                                <DaftarCardUjian.Header image={ujian.image} />
                                <DaftarCardUjian.Body 
                                    title={ujian.title} 
                                    kondisi={ujian.status} 
                                    jumlahPertanyaan={`${ujian.questions} Soal`}
                                />
                                <DaftarCardUjian.Footer 
                                    examData={ujian}
                                    onDelete={handleDeleteUjian}
                                    showDelete={false} // Hide delete button di home
                                />
                            </DaftarCardUjian>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-8">
                            <p className="text-gray-500">Tidak ada ujian aktif saat ini</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Bank Soal Section */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-6 lg:mb-8">
                    <h1 className="text-lg lg:text-2xl font-medium text-black">Bank Soal</h1>
                    <h1 className="text-sm lg:text-xl text-[#0081FF] hover:underline cursor-pointer transition duration-300">
                        Lihat Semua
                    </h1>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    <CardBankSoal>
                        <CardBankSoal.Header image="/image/bank-soal-icon.png" />
                        <CardBankSoal.Body title="Soal Informatika" time="3j lalu" description="Yahya a nya sepuluh" />
                        <CardBankSoal.Footer/>
                    </CardBankSoal>
                    <CardBankSoal>
                        <CardBankSoal.Header image="/image/bank-soal-icon.png" />
                        <CardBankSoal.Body title="Soal Informatika" time="3j lalu" description="Yahya a nya sepuluh" />
                        <CardBankSoal.Footer/>
                    </CardBankSoal>
                    <CardBankSoal>
                        <CardBankSoal.Header image="/image/bank-soal-icon.png" />
                        <CardBankSoal.Body title="Soal Informatika" time="3j lalu" description="Yahya a nya sepuluh" />
                        <CardBankSoal.Footer/>
                    </CardBankSoal>
                </div>
            </div>
        </div>
    );
};

export default HomeGuru;