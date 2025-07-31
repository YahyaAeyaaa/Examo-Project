import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FilterItem = ({ onFilterChange, filters = {} }) => {
  const [showFilter, setShowFilter] = useState(false);

  const [tempFilters, setTempFilters] = useState({
    startDate: '',
    endDate:'',
    status: {
      aktif: false,
      nonaktif: false,
      berlangsung: false
    }
  })

  useEffect(() => {
    let statusChecked = { aktif: false, nonaktif: false, berlangsung: false };
    
    if (filters.status === 'all') {
      statusChecked = { aktif: true, nonaktif: true, berlangsung: true };
    } else if (Array.isArray(filters.status)) {
      statusChecked = {
        aktif: filters.status.includes('aktif'),
        nonaktif: filters.status.includes('nonaktif'),
        berlangsung: filters.status.includes('berlangsung')
      };
    } else if (typeof filters.status === 'string') {
      statusChecked[filters.status] = true;
    }

    setTempFilters({
      startDate: filters.startDate || '',
      endDate: filters.endDate || '',
      status: statusChecked
    })
  }, [filters]);

  const handleInputChange = (field, value) => {
    setTempFilters(prev => ({
      ...prev, 
      [field]: value
    }))
  }

  const handleStatusChange = (statusType, checked) => {
    setTempFilters(prev => ({
      ...prev, 
      status: {
        ...prev.status,
        [statusType]: checked
      }
    }))
  }

  const handleApply = () => {
    const { aktif, nonaktif, berlangsung } = tempFilters.status;

    const selectedStatuses = [];
    if (aktif) selectedStatuses.push('aktif');
    if (nonaktif) selectedStatuses.push('nonaktif'); 
    if (berlangsung) selectedStatuses.push('berlangsung');
    
    const finalStatus = selectedStatuses.length === 0 || selectedStatuses.length === 3 
      ? 'all' 
      : selectedStatuses;

    onFilterChange({
      startDate: tempFilters.startDate || null, 
      endDate: tempFilters.endDate || null, 
      status: finalStatus
    })

    setShowFilter(false)
  }

  const handleCancel = () => {
    let statusChecked = { aktif: false, nonaktif: false, berlangsung: false };
    
    if (filters.status === 'all') {
      statusChecked = { aktif: true, nonaktif: true, berlangsung: true };
    } else if (Array.isArray(filters.status)) {
      statusChecked = {
        aktif: filters.status.includes('aktif'),
        nonaktif: filters.status.includes('nonaktif'),
        berlangsung: filters.status.includes('berlangsung')
      };
    } else if (typeof filters.status === 'string') {
      statusChecked[filters.status] = true;
    }

    setTempFilters({
      startDate: filters.startDate || '',
      endDate: filters.endDate || '',
      status: statusChecked
    })
    setShowFilter(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowFilter(!showFilter)}
        className='px-4.5 py-2 rounded-[10px] inline-flex items-center bg-white text-[#9D9D9D] '>
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
              value={tempFilters.startDate}
              onChange={(e) => handleInputChange('startDate', e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold">Tanggal Berakhir</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm mt-1"
              value={tempFilters.endDate}
              onChange={(e) => handleInputChange('endDate', e.target.value)}
            />
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold">Status</p>
            <label className="flex items-center mt-1">
              <input type="checkbox" className="mr-2" onChange={(e) => handleStatusChange('aktif', e.target.checked)} checked={tempFilters.status.aktif} />
              <span className="text-sm">Aktif</span>
            </label>
            <label className="flex items-center mt-1">
              <input type="checkbox" className="mr-2" onChange={(e) => handleStatusChange('nonaktif', e.target.checked)} checked={tempFilters.status.nonaktif}/>
              <span className="text-sm">Tidak Aktif</span>
            </label>
            <label className="flex items-center mt-1">
              <input type="checkbox" className="mr-2" onChange={(e) => handleStatusChange('berlangsung', e.target.checked)} checked={tempFilters.status.berlangsung}/>
              <span className="text-sm">Berlangsung</span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-4">
            <button
              onClick={handleCancel}
              className="col-span-2 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">
              Batal
            </button>
            <button onClick={handleApply} className="col-span-1 px-3 py-1 text-sm bg-blue-600 text-white rounded">
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterItem;