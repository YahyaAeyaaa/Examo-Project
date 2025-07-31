import React, { useState } from 'react';

// Import semua komponen yang sudah dipecah
import FormContainer from '../components/element/AddUjian/Container';
import FormActions from '../components/element/AddUjian/FormAction';
import FormInput from '../components/element/AddUjian/FormInput';
import FormSelect from '../components/element/AddUjian/FormSelect';
import FormGrid from '../components/element/AddUjian/GRIDform';
import FormHeader from '../components/element/AddUjian/Header';
import InputImage from '../components/element/AddUjian/InputImage';

const TambahUjian = () => {
  const [formData, setFormData] = useState({
    judulUjian: '',
    coverUjian: null,
    bankSoal: 'matematika',
    tanggalUjian: '',
    jamMulai: '',
    waktuUjian: '',
    jumlahSoal: '',
    nilaiKKM: '',
    deskripsiUjian: ''
  });

  const [loading, setLoading] = useState(false);

  // Dummy data bank soal
  const bankSoalOptions = [
    { value: 'matematika', label: 'Matematika' },
    { value: 'bahasa-indonesia', label: 'Bahasa Indonesia' },
    { value: 'ipa', label: 'IPA' },
    { value: 'ips', label: 'IPS' },
    { value: 'bahasa-inggris', label: 'Bahasa Inggris' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (file) => {
    setFormData(prev => ({
      ...prev,
      coverUjian: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      console.log('Form Data:', formData);
      // Handle form submission logic here
      // await submitExam(formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect or show success message
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    // Reset form or navigate back
    console.log('Form cancelled');
  };

  return (
    <>
      
      
      <FormContainer onSubmit={handleSubmit}>
        {/* Judul Ujian */}
        <FormHeader title="Tambah Ujian" />
        <FormInput
          label="Judul Ujian"
          name="judulUjian"
          value={formData.judulUjian}
          onChange={handleInputChange}
          placeholder="Masukkan judul ujian"
          required
        />

        {/* Cover Ujian */}
        <InputImage
          label="Cover Ujian"
          onChange={handleImageUpload}
        />

        {/* Grid untuk Bank Soal dan Tanggal */}
        <FormGrid cols={2}>
          <FormSelect
            label="Bank Soal"
            name="bankSoal"
            value={formData.bankSoal}
            onChange={handleInputChange}
            options={bankSoalOptions}
            className="bg-blue-50 text-blue-700"
          />

          <FormInput
            label="Tanggal Ujian"
            name="tanggalUjian"
            type="date"
            value={formData.tanggalUjian}
            onChange={handleInputChange}
            required
          />
        </FormGrid>

        {/* Grid untuk Jam Mulai dan Waktu Ujian */}
        <FormGrid cols={2}>
          <FormInput
            label="Jam Mulai Ujian"
            name="jamMulai"
            value={formData.jamMulai}
            onChange={handleInputChange}
            placeholder="Pilih Jam Mulai Ujian"
            required
          />

          <FormInput
            label="Waktu Ujian"
            name="waktuUjian"
            value={formData.waktuUjian}
            onChange={handleInputChange}
            placeholder="Tentukan waktu ujian"
            required
          />
        </FormGrid>

        {/* Grid untuk Jumlah Soal dan Nilai KKM */}
        <FormGrid cols={2}>
          <FormInput
            label="Jumlah Soal"
            name="jumlahSoal"
            type="number"
            value={formData.jumlahSoal}
            onChange={handleInputChange}
            placeholder="Pilih jumlah soal"
            min="1"
            required
          />

          <FormInput
            label="Nilai KKM"
            name="nilaiKKM"
            type="number"
            value={formData.nilaiKKM}
            onChange={handleInputChange}
            placeholder="Masukkan nilai KKM"
            min="0"
            max="100"
            required
          />
        </FormGrid>

        {/* Deskripsi Ujian */}
        <FormInput
          label="Deskripsi Ujian"
          name="deskripsiUjian"
          type="textarea"
          value={formData.deskripsiUjian}
          onChange={handleInputChange}
          placeholder="Contoh : Ujian Coding, buatlah website sederhana, memiliki 120 Fitur, Gunakan React, CSS framework, Symphony dan PHP, Pake Rust Kalo Perlu, Good Luck"
          rows={4}
          required
        />

        {/* Action Buttons */}
        <FormActions
          onCancel={handleCancel}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </FormContainer>
    </>
  );
};

export default TambahUjian;