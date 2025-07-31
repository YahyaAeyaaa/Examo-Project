import { IoMdArrowBack } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';

const DetailNilai = () => {
    
    // Data jawaban siswa dan kunci jawaban
    const examData = {
        studentName: "Haesoon Atmaja",
        examTitle: "Ujian Bab 1 Informatika",
        examDate: "12 Juni 2024",
        duration: "120 Menit",
        score: 70,
        totalQuestions: 5,
        correctAnswers: 3,
        wrongAnswers: 2
    };

    // Data soal dengan jawaban siswa dan jawaban benar
    const questions = [
        {
            id: 1,
            question: "Komponen utama dalam sistem komputer yang berfungsi untuk mengolah data disebut...",
            options: [
                { value: "A", text: "Memori" },
                { value: "B", text: "CPU" },
                { value: "C", text: "Monitor" },
                { value: "D", text: "Harddisk" }
            ],
            studentAnswer: "B",
            correctAnswer: "B",
            type: "radio"
        },
        {
            id: 2,
            question: "Komponen utama dalam sistem komputer yang berfungsi untuk mengolah data disebut...",
            options: [
                { value: "A", text: "Memori" },
                { value: "B", text: "CPU" },
                { value: "C", text: "Monitor" },
                { value: "D", text: "Harddisk" }
            ],
            studentAnswer: "C",
            correctAnswer: "B",
            type: "radio"
        },
        {
            id: 3,
            question: "Komponen utama dalam sistem komputer yang berfungsi untuk mengolah data disebut...",
            options: [
                { value: "A", text: "Memori" },
                { value: "B", text: "CPU" },
                { value: "C", text: "Monitor" },
                { value: "D", text: "Harddisk" }
            ],
            studentAnswer: "B",
            correctAnswer: "B",
            type: "radio"
        },
        {
            id: 4,
            question: "Komponen utama dalam sistem komputer yang berfungsi untuk mengolah data disebut...",
            options: [
                { value: "A", text: "RAM", image: "/image/cpu.jpg" },
                { value: "B", text: "CPU", image: "/image/amdCpu.jpg" },
                { value: "C", text: "Monitor", image: "/image/monitor.jpg" },
                { value: "D", text: "HDD", image: "/image/Harddisk.jpg" }
            ],
            studentAnswer: "A",
            correctAnswer: "B",
            type: "radio",
            hasImages: true
        },
        {
            id: 5,
            question: "Perangkat input pada komputer adalah... (Pilih lebih dari satu)",
            options: [
                { value: "A", text: "Keyboard" },
                { value: "B", text: "Monitor" },
                { value: "C", text: "Mouse" },
                { value: "D", text: "Speaker" },
                { value: "E", text: "Microphone" }
            ],
            studentAnswer: ["A", "C", "E"],
            correctAnswer: ["A", "C", "E"],
            type: "checkbox"
        }
    ];

    const getOptionStatus = (question, optionValue) => {
        const isStudentAnswer = question.type === "radio" 
            ? question.studentAnswer === optionValue
            : question.studentAnswer.includes(optionValue);
        
        const isCorrectOption = question.type === "radio"
            ? question.correctAnswer === optionValue
            : question.correctAnswer.includes(optionValue);

        if (isStudentAnswer && isCorrectOption) {
            return "correct";
        } else if (isStudentAnswer && !isCorrectOption) {
            return "wrong";
        } else if (!isStudentAnswer && isCorrectOption) {
            return "missed";
        }
        return "normal";
    };

    return (
        <div className="px-6 py-10 h-auto bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Detail Hasil Ujian</h1>
                <button className="flex items-center justify-center gap-3 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <IoMdArrowBack className="text-gray-600" />
                    <span className="text-gray-700">Kembali</span>
                </button>
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <section className="px-6 py-4 bg-white rounded-xl shadow-sm">
                    <h2 className="text-lg font-semibold mb-3 text-gray-800">{examData.examTitle}</h2>
                    <div className="space-y-2 text-gray-600">
                        <p><span className="font-medium">Nama:</span> {examData.studentName}</p>
                        <p><span className="font-medium">Tanggal Ujian:</span> {examData.examDate}</p>
                        <p><span className="font-medium">Durasi Pengerjaan:</span> {examData.duration}</p>
                    </div>
                </section>

                <section className="px-6 py-4 bg-white rounded-xl shadow-sm">
                    <h2 className="text-lg font-semibold mb-3 text-gray-800">Presentase Nilai</h2>
                    <div className="flex items-center mb-4">
                        <span className="text-3xl font-bold text-blue-600">{examData.score}</span>
                        <span className="text-lg text-gray-500">/100</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 bg-green-50 px-4 py-3 rounded-xl">
                            <div className="p-2 rounded-full bg-green-500 text-white">
                                <FaCheck size={16} />
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Soal Benar</p>
                                <p className="font-semibold text-green-600">{examData.correctAnswers}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-red-50 px-4 py-3 rounded-xl">
                            <div className="p-2 rounded-full bg-red-500 text-white">
                                <RxCross2 size={16} />
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Soal Salah</p>
                                <p className="font-semibold text-red-600">{examData.wrongAnswers}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Answers Section */}
            <section className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Jawaban Anda:</h2>
                
                <div className="space-y-8">
                    {questions.map((question) => (
                        <div key={question.id} className="pb-6 border-b border-gray-100 last:border-b-0">
                            {/* Question */}
                            <p className="text-base text-gray-800 mb-4">
                                {question.id}. {question.question}
                            </p>

                            {/* Options */}
                            <div className={question.hasImages ? "grid grid-cols-2 gap-4" : "space-y-2"}>
                                {question.options.map((option) => {
                                    const status = getOptionStatus(question, option.value);
                                    const isChecked = question.type === "radio" 
                                        ? question.studentAnswer === option.value
                                        : question.studentAnswer.includes(option.value);

                                    let bgColor = "bg-gray-50";
                                    let iconColor = "text-gray-400";
                                    let icon = null;

                                    if (status === "correct") {
                                        bgColor = "bg-green-100";
                                        iconColor = "text-green-600";
                                        icon = <FaCheck size={12} />;
                                    } else if (status === "wrong") {
                                        bgColor = "bg-red-100";
                                        iconColor = "text-red-600";
                                        icon = <RxCross2 size={12} />;
                                    }

                                    return (
                                        <div 
                                            key={option.value}
                                            className={`flex items-center p-3 rounded-lg ${bgColor} ${question.hasImages ? 'flex-col space-y-2' : 'space-x-3'}`}
                                        >
                                            {question.hasImages ? (
                                                <>
                                                    <div className="flex items-center space-x-3 w-full">
                                                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                                            isChecked ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                                                        }`}>
                                                            {isChecked && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                                        </div>
                                                        <div className="flex items-center space-x-2 flex-1">
                                                            {icon && <div className={iconColor}>{icon}</div>}
                                                        </div>
                                                    </div>
                                                    <img src={option.image} alt={option.text} className="w-20 h-16 object-cover rounded" />
                                                    <span className="text-sm text-gray-700">{option.text}</span>
                                                </>
                                            ) : (
                                                <>
                                                    <div className={`w-4 h-4 ${question.type === 'checkbox' ? 'rounded' : 'rounded-full'} border-2 flex items-center justify-center ${
                                                        isChecked ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                                                    }`}>
                                                        {isChecked && (
                                                            question.type === 'checkbox' ? 
                                                            <FaCheck size={10} className="text-white" /> :
                                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                                        )}
                                                    </div>
                                                    <span className="flex-1 text-gray-700">{option.text}</span>
                                                    {icon && <div className={iconColor}>{icon}</div>}
                                                </>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default DetailNilai;