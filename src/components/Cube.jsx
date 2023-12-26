import React, { useEffect, useRef, useState } from "react";

export default function Cube({
  className,
  facesClassName = "",
  centerComponent,
  children,
  style = {},
}) {
  const [
    containerRef,
    cubeRef,
    topRef,
    bottomRef,
    leftRef,
    rightRef,
    frontRef,
    backRef,
  ] = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  useEffect(() => {
    const { offsetHeight, offsetWidth } = containerRef.current;
    const sz = offsetHeight > offsetWidth ? offsetWidth : offsetHeight;

    const container = containerRef.current;
    const cube = cubeRef.current;

    const faces = [
      topRef.current,
      bottomRef.current,
      leftRef.current,
      rightRef.current,
      frontRef.current,
      backRef.current,
    ];

    [cube, container, ...faces].forEach((f) => {
      if (f) {
        ["minHeight", "maxHeight", "minWidth", "maxWidth"].forEach(
          (prop) => (f.style[prop] = `${sz}px`)
        );
      }
    });

    const transforms = [
      `translateY(-${sz / 2}px) rotateX(90deg)`,
      `translateY(${sz / 2}px) rotateX(-90deg)`,
      `translateX(-${sz / 2}px) rotateY(-90deg)`,
      `translateX(${sz / 2}px) rotateY(90deg)`,
      `translateZ(${sz / 2}px)`,
      `translateZ(-${sz / 2}px) rotateY(180deg)`,
    ];

    faces.forEach((face, index) => {
      if (face) {
        facesClassName
          ?.split(" ")
          .forEach((clazz) => clazz && face.classList.add(clazz));
        face.style.position = "absolute";
        face.style.top = 0;
        face.style.left = 0;
        face.style.transform = transforms[index];
      }
    });
  }, []);

  const cubeStyle = typeof style === "object" ? style : {};

  return (
    <div
      ref={containerRef}
      style={{
        perspective: "1500px",
      }}
      className={`${className}`}
    >
      <div
        className=""
        ref={cubeRef}
        style={{
          ...cubeStyle,
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {centerComponent}
        {children && children[0] && (
          <div ref={topRef}>{children && children[0]}</div>
        )}
        {children && children[1] && (
          <div ref={bottomRef}>{children && children[1]}</div>
        )}
        {children && children[2] && (
          <div ref={leftRef}>{children && children[2]}</div>
        )}
        {children && children[3] && (
          <div ref={rightRef}>{children && children[3]}</div>
        )}
        {children && children[4] && (
          <div ref={frontRef}>{children && children[4]}</div>
        )}
        {children && children[5] && (
          <div ref={backRef}>{children && children[5]}</div>
        )}
      </div>
    </div>
  );
}
