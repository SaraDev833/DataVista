import React from 'react';

const Loans = ({ btn, text, bgImage, bgColor, textColor, btnText, bgBtn }) => {
  return (
   
      <div
        className={`flex flex-col gap-2  w-[468px] p-6 rounded-lg shadow-md ${bgColor}`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <button className={`${bgBtn} ${btnText} font-medium text-[12px] py-[4px] px-[6px] rounded-full z-10`}>
            {btn}
          </button>
        </div>
        <h2 className={`text-[18px] font-medium font-ubuntu ${textColor} `}>
          {text}
        </h2>
      </div>


  


  );
};

export default Loans;
