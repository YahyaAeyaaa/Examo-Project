import { MdEmail } from "react-icons/md";
function App() {

  return (
    <>
      <div className="min-h-screen flex items-center relative overflow-hidden max-w-full">
        {/* Left side - Form */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-120 h-auto rounded-2xl p-5">
            <h1 className="font-Poppins font-semibold text-2xl text-center">
              Selamat Datang!
            </h1>
            <p className="font-Poppins text-slate-500 text-center mb-10">
              Masuk untuk menikmati layanan kami
            </p>
            <input type="email" 
              placeholder="email"
              className="p-4 bg-blue-50 w-full rounded-2xl mb-5 mt-2"
            /> 
            <input type="password"
              placeholder="password"
              className="p-4 bg-blue-50 w-full rounded-2xl"
            />
            <p className="text-blue-500 float-right mb-5 cursor-pointer">
              Lupa Password?
            </p>
            <button className="cursor-pointer bg-blue-500 p-2 rounded-2xl w-full text-white">
              Login
            </button>
            <div className="flex items-center my-6">
              <hr className="flex-1 border-gray-300" />
              <span className="px-4 text-sm text-gray-500">Atau Login Dengan</span>
              <hr className="flex-1 border-gray-300" />
            </div>
            <div className="flex justify-center gap-3 items-center ">
              <button className="bg-gray-300 w-14 h-14 p-3 rounded-full flex items-center justify-center cursor-pointer">
                <img src="/image/google-removebg-preview.png" alt="" className="w-6 h-6 object-contain"/>
              </button>
              <button className="bg-gray-300 w-14 h-14 p-3 rounded-full flex items-center justify-center cursor-pointer">
                <img src="/image/Group8.png" alt="" className="w-6 h-6 object-contain"/>
              </button>
              <button className="bg-gray-300 w-14 h-14 p-3 rounded-full flex items-center justify-center cursor-pointer">
                <img src="/image/apple.png" alt="" className="w-6 h-6 object-contain"/>
              </button>
            </div>
            <p className="text-sm mt-8 text-center">
              Belum punya akun ?
              <span className="text-blue-500 cursor-pointer"> {" "}
                Daftar
              </span>
            </p>
          </div>
        </div>
        
        <div className="w-1/2 relative flex items-center left-20">
          <div className="bg-blue-100 w-350 h-350 absolute rounded-full flex items-center justify-center">
            <div className="bg-blue-200 w-300 h-300 rounded-full flex items-center justify-center">
              <div className="bg-blue-300 w-250 h-250 rounded-full">
                <img src="/image/gmbr.png" alt="" className="relative flex items-center right-65 top-25"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;