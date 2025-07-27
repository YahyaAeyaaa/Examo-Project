import React, { useState } from 'react';

const InputImage = ({ 
  label = "Cover Ujian", 
  onChange, 
  placeholder = "Klik atau Seret foto yang ingin di upload",
  defaultImage = "/image/CoverImages.png" 
}) => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Call parent onChange
      if (onChange) {
        onChange(file);
      }
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative border-2 border-dashed border-sky-100 rounded-lg p-8 text-center hover:border-sky-400 transition-colors"
           style={{ background: '#F4FAFF' }}>
        {previewImage ? (
          <div className="space-y-4">
            <img 
              src={previewImage} 
              alt="Preview" 
              className="mx-auto max-h-40 rounded-lg"
            />
            <p className="text-sm text-gray-500">
              {placeholder}
            </p>
          </div>
        ) : (
          <div>
            <div className="mx-auto w-30 h-20 flex items-center justify-center">
              <img src={defaultImage} alt="" className="w-full h-full text-blue-500" />
            </div>
            <p className="text-sm text-gray-500">
              {placeholder}
            </p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default InputImage;