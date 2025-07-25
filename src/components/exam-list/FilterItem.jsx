import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FilterPopup = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowFilter(!showFilter)}
        className="px-4.5 py-2 bg-white text-[#9D9D9D] rounded-[10px] inline-flex items-center">
        Filter
      {showFilter ? (
        <ChevronUp className="w-4 h-4 ml-2" />
      ) : (
        <ChevronDown className="w-4 h-4 ml-2" />
      )}
      </button>

      {showFilter && (
        <div className="absolute right-0 mt-2 w-[223px] bg-white shadow-xl rounded-lg p-4 z-50 ">
          <div className="mb-4">
            <label className="block text-sm font-semibold">Tanggal Mulai</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm mt-1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold">Tanggal Berakhir</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm mt-1"
            />
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold">Status</p>
            <label className="flex items-center mt-1">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span className="text-sm">Aktif</span>
            </label>
            <label className="flex items-center mt-1">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Tidak Aktif</span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-4">
            <button
              onClick={() => setShowFilter(false)}
              className="col-span-2 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">
              Batal
            </button>
            <button className="col-span-1 px-3 py-1 text-sm bg-blue-600 text-white rounded">
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPopup;
