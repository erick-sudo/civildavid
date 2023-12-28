import React from "react";

const Loader = ({ text, className }) => {
  return (
    <div className={`${className} flex justify-center items-center p-4`}>
      <div className="flex flex-col items-center">
        <div className="border-t-4 border-b-4 border-amber-600 w-16 h-16 rounded-full animate-spin"></div>
        <div className="mt-2">{text}</div>
      </div>
    </div>
  );
};

export default Loader;
