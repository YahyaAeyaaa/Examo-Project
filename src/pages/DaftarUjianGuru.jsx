import Sidebar from "../components/element/Navigasi/Sidebar";
import Dashboard from "../components/element/Navigasi/Dashoard";
import Button from "../components/element/button/button";
import { MdOutlineExpandMore } from "react-icons/md";
import SearchInput from "../components/element/InputCearch/Input";
import FilterDate from "../components/element/filter/FilterDate";
import DaftarUjianCard from "../components/Fragment/DaftarUjianCard";


const DaftarUjian = () => {
    return (
        <>
               
                <div className="flex justify-between items-center mb-4">
                <div className="">
                    <h1 className="text-2xl font-semibold mb-4">Daftar Ujian</h1>
                </div>
                <div>
                    <Button text="+ Tambah Ujian" className="w-50 rounded-lg p-2 " texts="text-white" />
                </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <SearchInput />
                    <FilterDate /> 
                </div>
                <div className="flex items-center justify-center gap-3 flex-wrap">
    <DaftarUjianCard>
        <DaftarUjianCard.Header image='/image/icon1.png' />
        <DaftarUjianCard.Body title="Bab 2 Informatika" kondisi="Aktif" jumlahPertanyaan="30 Soal"/>
        <DaftarUjianCard.Footer />
    </DaftarUjianCard>
    <DaftarUjianCard>
        <DaftarUjianCard.Header image='/image/icon1.png' />
        <DaftarUjianCard.Body title="Bab 2 Informatika" kondisi="Aktif" jumlahPertanyaan="30 Soal"/>
        <DaftarUjianCard.Footer />
    </DaftarUjianCard>
        <DaftarUjianCard>
        <DaftarUjianCard.Header image='/image/icon1.png' />
        <DaftarUjianCard.Body title="Bab 2 Informatika" kondisi="Aktif" jumlahPertanyaan="30 Soal"/>
        <DaftarUjianCard.Footer />
    </DaftarUjianCard>
    <DaftarUjianCard>
        <DaftarUjianCard.Header image='/image/icon1.png' />
        <DaftarUjianCard.Body title="Bab 2 Informatika" kondisi="Aktif" jumlahPertanyaan="30 Soal"/>
        <DaftarUjianCard.Footer />
      </DaftarUjianCard>
      <DaftarUjianCard>
        <DaftarUjianCard.Header image='/image/icon1.png' />
        <DaftarUjianCard.Body title="Bab 2 Informatika" kondisi="Aktif" jumlahPertanyaan="30 Soal"/>
        <DaftarUjianCard.Footer />
      </DaftarUjianCard>
        <DaftarUjianCard>
        <DaftarUjianCard.Header image='/image/icon1.png' />
        <DaftarUjianCard.Body title="Bab 2 Informatika" kondisi="Aktif" jumlahPertanyaan="30 Soal"/>
        <DaftarUjianCard.Footer />
      </DaftarUjianCard>
                </div>
        </>
    )   
}

export default DaftarUjian