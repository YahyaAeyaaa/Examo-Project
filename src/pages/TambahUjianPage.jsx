import { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import Index from "../components/element/input";
import Input from "../components/element/InputOption/Input";
import Select from "../components/element/InputOption/Select";

const TambahUjianPage = () => {
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); // preview gambar
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <>
      <div className="flex items-center justify-evenly my-5">
        <h1 className=" text-2xl">Tambah Ujian</h1>
        <button className="flex  items-center justify-center gap-3 rounded-lg shadow py-2 px-3">
          <IoArrowBackSharp />
          <p>Kembali</p>
        </button>
      </div>

      <div className="rounded-lg shadow mx-auto w-3xl p-10 bg-white">
        <h1 className="text-lg mb-2 font-semibold">Judul Ujian</h1>
        <Index className="bg-white focus:ring-gray-100 ring-gray-300" type="text" placeholder="yahya" />

        <div
          className="border-2 border-dashed border-blue-300 rounded-xl p-6 text-center cursor-pointer hover:border-blue-500 transition"
          style={{ background: "#F4FAFF" }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*"
            id="upload-cover"
            className="hidden"
            onChange={handleChange}
          />
          <label htmlFor="upload-cover" className="cursor-pointer block">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="mx-auto max-h-48 rounded-lg object-contain"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-500">
                <img src="/image/CoverImage.png" alt="Upload" className="mb-2" />
                <p className="text-sm">Klik atau Seret foto anda disini</p>
              </div>
            )}
          </label>
        </div>

        <div className="flex">
          <div>
            <label>
              <h1>Bank Soal</h1>
              <Input />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default TambahUjianPage;
