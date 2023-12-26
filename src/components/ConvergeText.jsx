import { useEffect, useRef, useState } from "react";
import { Point } from "../lib/Point";

export function ConvergeText({
  text = "",
  className = "",
  onComplete = () => {},
  centerComponent = null,
}) {
  const [textBoxes, setTextBoxes] = useState([]);
  const parentRef = useRef();
  const centerComponentRef = useRef();
  const [resizeRefresher, setResizeRefresher] = useState(0);

  const randomInteger = (start, end) => {
    return start + Math.floor((Math.random() * (end - start)) % (end - start));
  };

  useEffect(() => {}, []);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setResizeRefresher((n) => n + 1);
    });
  }, []);

  useEffect(() => {
    const { width, height, top, left } =
      parentRef.current.getBoundingClientRect();
    const halfCount = Math.round(text.length / 2);
    const boxWidth = (0.75 * width) / text.length;
    const maxWidth = boxWidth * text.length;
    const maxHeight = (boxWidth * text.length) / 2;
    const centerSpace = { width: maxWidth - 2 * boxWidth };
    const destinationLeft = ((width - maxWidth) / 2) + left;
    const destinationTop = ((height - maxHeight) / 2) + top;
    const topRange = { from: top, to: height - boxWidth };
    const leftRange = { from: left, to: width - boxWidth };
    const edges = ["left", "top", "right", "bottom"];

    centerComponentRef.current.style.width = `${centerSpace.width}px`;
    centerComponentRef.current.style.top = `${destinationTop}px`;
    centerComponentRef.current.style.left = `${destinationLeft + boxWidth}px`;

    setTextBoxes(
      getPalidrome(text.length).map((multiplier, index) => {
        const constantEdge = edges[randomInteger(0, 4)];
        const randomSource =
          constantEdge === "left"
            ? { x: left, y: randomInteger(top, topRange.to) }
            : constantEdge === "top"
            ? { x: randomInteger(left, leftRange.to), y: top }
            : constantEdge === "right"
            ? { x: leftRange.to, y: randomInteger(top, topRange.to) }
            : { x: randomInteger(left, leftRange.to), y: topRange.to };

        const style = {
          WebkitTextStroke: `1px rgb(217, 119, 6)`,
          color: "transparent",
          textStroke: "1px white",
        };

        let borders = [];

        if (
          (index + 1) % halfCount == 0 &&
          index !== 0 &&
          text.length % 2 !== 0
        ) {
          borders.push("left");
          borders.push("right");
        } else {
          if (index < halfCount) {
            borders.push("left");
          } else {
            borders.push("right");
          }
        }

        return (
          <Box
            head={index < halfCount}
            borders={borders}
            onComplete={(i) => {}}
            pos={index}
            style={style}
            text={text[index]}
            width={boxWidth}
            key={index}
            destination={{
              x: destinationLeft + boxWidth * index,
              y: destinationTop + boxWidth * multiplier,
            }}
            source={randomSource}
          />
        );
      })
    );
  }, [resizeRefresher]);

  return (
    <div ref={parentRef} className={`${className} flex-grow`}>
      <div
        className="absolute flex items-center justify-center"
        ref={centerComponentRef}
      >
        <div className="w-1/4">{centerComponent}</div>
      </div>
      {text && textBoxes}
    </div>
  );
}

function Box({
  borders = [],
  pos = 0,
  style = {},
  width = 0,
  text = "",
  destination = { x: 0, y: 0 },
  source = { x: 0, y: 0 },
  onComplete = () => {},
}) {
  const [boxRef, borderLeftRef, borderBottomRef, borderRightRef] = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  const directionVector = new Point(source.x, source.y).vectorTo(
    new Point(destination.x, destination.y)
  );
  const [position, setPosition] = useState(source);

  useEffect(() => {
    let stage = 0;
    const interval = setInterval(() => {
      if (stage >= 1) {
        setPosition(directionVector.plus(1, source));
        stopInterval();
        setTimeout(() => {
          [borderLeftRef, borderBottomRef, borderRightRef].forEach((ref) =>
            ref.current?.classList.add("border-[rgb(217,119,6)]")
          );

          borderBottomRef.current?.classList.add("anim-expand-x");
          borderBottomRef.current?.classList.add("border-b");

          borderLeftRef.current?.classList.add("anim-expand-y");
          borderLeftRef.current?.classList.add("border-l");

          borderRightRef.current?.classList.add("anim-expand-y");
          borderRightRef.current?.classList.add("border-r");
        }, pos * 100);
        onComplete(pos);
      } else {
        setPosition(directionVector.plus(stage, source));

        stage += 0.01;
      }
    }, 1);

    const stopInterval = () => {
      clearInterval(interval);
    };

    return () => {
      stopInterval();
    };
  }, [destination, source]);

  useEffect(() => {
    boxRef.current.style.left = `${position.x}px`;
    boxRef.current.style.top = `${position.y}px`;
  }, [position]);

  return (
    <div
      ref={boxRef}
      style={{
        width: `${width}px`,
        ...style,
        fontSize: `${width * (2 / 3)}px`,
      }}
      className="absolute font-extrabold"
    >
      <div className="flex flex-grow" style={{ height: `${width}px` }}>
        {borders.includes("left") && (
          <div ref={borderLeftRef} className=""></div>
        )}
        <div className="flex flex-grow justify-center items-center">{text}</div>
        {borders.includes("right") && (
          <div ref={borderRightRef} className=""></div>
        )}
      </div>
      <div ref={borderBottomRef} className="w-full"></div>
    </div>
  );
}

function getPalidrome(size) {
  const center = Math.floor(size / 2);
  if (size < 3) {
    return new Array(size).fill(0).map((i, j) => j);
  }
  let result = [];
  for (let i = 0; i < center; i++) {
    result.push(i);
  }

  if (size % 2 !== 0) {
    result.push(center);
  }

  if (center > 0) {
    for (let i = center - 1; i >= 0; i--) {
      result.push(i);
    }
  }
  return result;
}
