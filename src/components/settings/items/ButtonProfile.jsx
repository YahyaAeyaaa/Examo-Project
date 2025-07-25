import React from 'react'

const ButtonProfile = ({ text, className, type, ...props }) => {
  return (
    <button type={type} className={`cursor-pointer p-2 xl:p-3 rounded-[10px] w-[108px] lg:max-w-[133px] xl:w-[155px] leading-custom font-semibold ${className}`}
    {...props}>
      {text}
    </button>
  );
};


export default ButtonProfile
