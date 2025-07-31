import React, { useState } from 'react'

const EnterExamButton = ({ className }) => {
  const [showCode, setShowCode] = useState(false);
  const [examCode, setExamCode] = useState('');

  const handleClose = () => {
    setShowCode(false);
    setExamCode('');
  };

  const handleEnter = () => {
    console.log('Kode Ujian:', examCode);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowCode(true)}
        className={`bg-primary-blue text-white text-lg font-semibold tracking-custom rounded-[10px] leading-custom hover:scale-[1.03] focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer ${className}`}
      >
        Masuk Ujian
      </button>

      {showCode && (
        <div className="absolute right-0 mt-2 w-[480px] bg-white p-8 rounded-[20px] shadow-lg z-10 flex flex-col gap-8">
          <h1 className="text-center text-lg font-semibold tracking-custom ">Masuk Ujian</h1>

          <div>
            <label className="block mb-2 text-base text-black leading-custom tracking-custom">Kode Ujian</label>
            <input
              type="text"
              value={examCode}
              onChange={(e) => setExamCode(e.target.value)}
              placeholder="Kode ujian"
              className="w-full border border-[#A9A9A9] rounded-[10px] px-4 py-3 text-sm text-[#B4B4B4] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <button
              onClick={handleClose}
              className="bg-primary-blue/10 text-primary-blue px-6 py-2 rounded-[10px] font-semibold tracking-custom leading-custom hover:bg-blue-200"
            >
              Batal
            </button>
            <button
              onClick={handleEnter}
              className="bg-gradient-to-b from-primary-blue to-[#004E99] text-white px-6 py-2 rounded-[10px] font-semibold tracking-custom leading-custom hover:bg-gradient-to-t from-primary-blue to-[#004E99]"
            >
              Masuk
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnterExamButton;
