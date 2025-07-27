import React from 'react';

const FormContainer = ({ children, onSubmit }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <form onSubmit={onSubmit} className="space-y-6">
            {children}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;