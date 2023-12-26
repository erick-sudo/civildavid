import React from "react";

export default function Focus() {
  return (
    <>
      <div className="hidden rounded-xl group-hover:block h-24 w-24 absolute z-20 border-l-4 border-t-4 left-[10%] top-[10%]"></div>
      <div className="hidden rounded-xl group-hover:block h-24 w-24 absolute z-20 border-t-4 border-r-4 right-[10%] top-[10%]"></div>
      <div className="hidden rounded-xl group-hover:block h-24 w-24 absolute z-20 border-l-4 border-b-4 left-[10%] bottom-[10%]"></div>
      <div className="hidden rounded-xl group-hover:block h-24 w-24 absolute z-20 border-b-4 border-r-4 bottom-[10%] right-[10%]"></div>
    </>
  );
}
