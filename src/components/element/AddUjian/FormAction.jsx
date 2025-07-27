import React from 'react';
import { Link } from 'react-router-dom';

const FormActions = ({ 
  onCancel, 
  onSubmit, 
  cancelText = "Batal", 
  submitText = "Simpan",
  cancelLink = "/DaftarUjian",
  loading = false 
}) => {
  return (
    <div className="flex justify-end flex-col sm:flex-row gap-3 pt-6">
      <Link to={cancelLink}>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-6 py-2 text-red-500 rounded-xl hover:bg-gray-50 transition-colors font-medium"
          style={{ background: '#FFEAEB' }}
          disabled={loading}
        >
          {cancelText}
        </button>
      </Link>
      <button
        type="submit"
        onClick={onSubmit}
        className="px-6 py-2 bg-gradient-to-b from-sky-500 to-blue-800 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Menyimpan..." : submitText}
      </button>
    </div>
  );
};

export default FormActions;