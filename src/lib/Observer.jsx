import React, { useRef } from "react";

export default function TransformObserver({ className = "", children }) {
  const containerRef = useRef();

  return (
    <div ref={containerRef} className={`${className}`}>
      {children}
    </div>
  );
}
