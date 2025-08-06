import React from 'react'

const ButtonProfile = ({ text, className, type, onClick, ...props }) => {
  return (
    <button type={type} onClick={onClick} className={`cursor-pointer rounded-[10px] w-[108px] lg:max-w-[133px] xl:w-[155px] leading-custom font-semibold ${className}`}
    {...props}>
      {text}
    </button> 
  );
};


export default ButtonProfile
