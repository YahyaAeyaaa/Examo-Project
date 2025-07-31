
import Button from "../components/element/button/button";
import SearchInput from "../components/dashboardGuru/InputSearch";
import FilterDate from "../components/element/filter/FilterDate";
import { FiDownload } from "react-icons/fi";
import CardBankSoal from "../components/Fragment/BankSoalCard";
import { Link } from "react-router-dom";


const BankSoalGuru = () => {
    return (
        <>
                <div className="p-7">
                    <div className="flex justify-between items-center mb-4">
                    <div className="">
                        <h1 className="text-2xl font-semibold mb-4">Daftar Bank Soal</h1>
                </div>
                    <div>
                        <div className="flex items-center justify-center gap-2">
                        <button className="flex items-center justify-center px-4 py-2 rounded-md text-white" style={{ backgroundColor : "#4D55CC" }}>
                            <FiDownload className="mr-2 w-5 h-5"/>
                            <p>Template</p>
                        </button>
                        <Link to="/TambahBankSoal">
                        <Button text="+ Tambah Ujian" className="w-50 rounded-lg p-2 " texts="text-white" />
                        </Link>
                        </div>
                    </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <SearchInput />
                        <FilterDate /> 
                    </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
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
        </>
    )   
}

export default BankSoalGuru