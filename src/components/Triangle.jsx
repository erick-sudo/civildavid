import React, { useEffect, useRef, useState } from "react";

export default function Triangle({ className = "", dir = "right" }) {
  const triangleRef = useRef();
  const [resizeRefresher, setResizeRefresher] = useState(0);

  useEffect(() => {
    const triangle = triangleRef.current;

    triangle.style.width = "max-content"
    triangle.style.height = "max-content"

    let sz = ["up", "down"].includes(dir)
      ? triangle.offsetWidth
      : triangle.offsetHeight;

    triangle.style.width = 0;
    triangle.style.height = 0;

    if (dir === "left") {
      triangle.style.borderTop = `${sz}px solid transparent`;
      triangle.style.borderBottom = `${sz}px solid transparent`;
      triangle.style.borderRight = `${sz}px solid`;
    } else if (dir === "up") {
      triangle.style.borderLeft = `${sz}px solid transparent`;
      triangle.style.borderRight = `${sz}px solid transparent`;
      triangle.style.borderTop = `${sz}px solid`;
    } else if (dir === "down") {
      triangle.style.borderLeft = `${sz}px solid transparent`;
      triangle.style.borderRight = `${sz}px solid transparent`;
      triangle.style.borderBottom = `${sz}px solid`;
    } else {
      triangle.style.borderTop = `${sz}px solid transparent`;
      triangle.style.borderBottom = `${sz}px solid transparent`;
      triangle.style.borderLeft = `${sz}px solid`;
    }
  }, [resizeRefresher]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setResizeRefresher((p) => p + 1);
    });
  }, []);

  return <div ref={triangleRef} className={`${className}`}></div>;
}
