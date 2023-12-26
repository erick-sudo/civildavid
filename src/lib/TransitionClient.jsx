import React, { cloneElement, useEffect, useRef, useState } from "react";

export function TransitionClient({
  className = "",
  contentClassName = "",
  children,
  origin = "left",
  transitionDuration = 0,
  transitionProperty = "transform",
  transitionCallback = (ration) => {
    return `translate${["left", "right"].includes(origin) ? "X" : "Y"}(${
      (typeof ration === "number"
        ? (["left", "top"].includes(origin) ? -1 : 1) * (1 - ration)
        : 0) * 100
    }%)`;
  },
}) {
  const containerRef = useRef(null);
  const [visibilityRation, setVisibilityRation] = useState(0.5);

  const buildThreshholdList = () => {
    let threshholds = [];
    const steps = 20;

    for (let i = 0; i <= steps; i++) {
      threshholds.push(i / steps);
    }

    return threshholds;
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: buildThreshholdList(),
    };

    const intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        setVisibilityRation(entry.intersectionRatio);
      });
    };

    const observer = new IntersectionObserver(
      intersectionCallback,
      observerOptions
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ overflow: "hidden", display: "flex" }}
      className={`${className}`}
    >
      <div
        style={{
          [transitionProperty]: transitionCallback(visibilityRation),
          transition: `${
            typeof transitionDuration === "number" ? transitionDuration : 0
          }ms ease-out`,
          flexGrow: 1,
        }}
        className={`${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
