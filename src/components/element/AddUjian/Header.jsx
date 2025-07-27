import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FormHeader = ({ title, backLink = '/DaftarUjian' }) => {
  return (
    <div className="flex items-center mb-8 justify-between">
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      <Link to={backLink}>
        <button className='flex items-center justify-center gap-2 rounded-lg shadow p-3'
                style={{ width: '134px' }}>
          <FaArrowLeft />
          <p className='text-lg' style={{ width: '66px', height: '24px' }}>Kembali</p>
        </button>
      </Link>
    </div>
  );
};

export default FormHeader;