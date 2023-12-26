import {
  faAngleDoubleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

export default function Loop({
  skewAngle = 0,
  className = "",
  verticalClassName = "",
  slidesClassName = "",
  spacing = 0,
  direction = 0,
  padding = 0,
  orientation = "horizontal",
  children,
  speed = 1000,
  showNavigators = true,
  tilt = 0,
}) {
  const linearG = "bg-gradient-to-tl from-amber-800 via-amber-600 to-amber-900";
  const reverseHover =
    "hover:bg-gradient-to-tl hover:from-amber-600 hover:via-amber-800 hover:to-amber-600";
  const cssPropertycoordinator = orientation === "vertical" ? "top" : "left";
  const domDimensionProperty =
    cssPropertycoordinator === "left" ? "offsetWidth" : "offsetHeight";
  const [pause, setPause] = useState(false);
  const childRefs = new Array(children?.length).fill(0).map(() => useRef());
  const [loopWrapper, loopHost] = [useRef(), useRef()];
  const [resizeRefresher, setResizeRefresher] = useState(0);

  // useEffect(() => {
  //   const wrapperSize = loopWrapper.current[domDimensionProperty];
  //   loopHost.current.style[
  //     orientation === "vertical" ? "maxHeight" : "maxWidth"
  //   ] = `${wrapperSize - 1}px`;
  // }, []);

  useEffect(() => {
    if (children && children.length > 0) {
      childRefs
        .map((ref) => ref.current)
        .forEach((ref) => {
          ref.style.position = "static";
          ref.style[
            domDimensionProperty === "offsetWidth" ? "minWidth" : "minHeight"
          ] = "";
          ref.style.top = "";
          ref.style.bottom = "";
          ref.style.left = "";
          ref.style.right = "";

          // Apply padding to adjust height suitably
          if (orientation === "vertical") {
            ref.style.padding = `0 ${padding}px`;
          }
        });
      loopWrapper.current.style[
        domDimensionProperty === "offsetWidth" ? "minHeight" : "minWidth"
      ] = "";

      let tallestSize = 0;
      const elementsVsMinimumSize = childRefs.map((ref) => {
        const intrinsicSize = ref.current[domDimensionProperty];

        // Remove preset padding
        if (orientation === "vertical") {
          ref.current.style.padding = `0`;
        }
        const otherSideSize =
          ref.current[
            domDimensionProperty === "offsetWidth"
              ? "offsetHeight"
              : "offsetWidth"
          ];
        if (otherSideSize > tallestSize) {
          tallestSize = otherSideSize;
        }
        // ref.current.style[
        //   orientation === "vertical" ? "minWidth" : "minHeight"
        // ] = `${intrinsicSize}px`;
        ref.current.style.position = "absolute";

        if (orientation !== "vertical") {
          ref.current.style.top = `${padding}px`;
          ref.current.style.bottom = `${padding}px`;
        } else {
          ref.current.style.left = `${padding}px`;
          ref.current.style.right = `${padding}px`;
        }

        const skewOffset = (skewAngle > 0 && skewAngle < 90) ? intrinsicSize / Math.tan(skewAngle) : padding

        return { el: ref.current, size: intrinsicSize, skewOffset: skewOffset };
      });
      loopWrapper.current.style.position = "relative";
      loopWrapper.current.style[
        orientation === "vertical" ? "minWidth" : "minHeight"
      ] = `${
        orientation === "vertical" ? tallestSize : tallestSize + padding * 2
      }px`;
      let offset = 0;
      elementsVsMinimumSize.forEach((element) => {
        element.el.style[cssPropertycoordinator] = `${offset}px`;
        //element.el.style[orientation === "vertical" ? "top" : "left"] = 
        offset += element.size + spacing;
      });
    }
  }, [resizeRefresher]);

  useEffect(() => {
    // Refresh detection
    window.addEventListener("resize", (e) => {
      setResizeRefresher((r) => r + 1);
    });

    loopHost.current.addEventListener("keydown", (keyEvent) => {
      keyEvent.preventDefault();
      keyEvent.stopPropagation();

      const key = [
        { key: "ArrowUp", dir: 0 },
        { key: "ArrowDown", dir: -1 },
        { key: "ArrowLeft", dir: 0 },
        { key: "ArrowRight", dir: -1 },
      ].find((k) => keyEvent.key === k.key);

      if (key) {
        scrollElements({
          refs: childRefs,
          domDimensionProperty,
          cssPropertycoordinator,
          padding,
          direction: key.dir,
          deviation: 10,
        });
      }
    });
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (pause) {
        stopScrollInterval();
      } else {
        if (children) {
          scrollElements({
            refs: childRefs,
            domDimensionProperty,
            cssPropertycoordinator,
            spacing,
            direction,
            deviation: 1,
          });
        }
      }
    }, speed);

    const stopScrollInterval = () => {
      clearInterval(scrollInterval);
    };

    return () => {
      stopScrollInterval();
    };
  }, [pause, resizeRefresher]);

  const style = {
    width: "100%",
    overscrollBehavior: "contain",
  };

  //style[orientation === "vertical" ? "overflowY" : "overflowX"] = "scroll";

  return (
    <div
      onMouseEnter={(e) => {
        e.preventDefault();
        //loopHost.current.focus()
      }}
      onMouseLeave={(e) => {
        loopHost.current.blur();
        if (pause) {
          setPause(false);
        }
      }}
      tabIndex={0}
      ref={loopHost}
      style={style}
      className={`outline-none relative hide-scroll-bars`}
    >
      <div
        style={{
          width: "100%",
          overflow: "hidden",
        }}
        className={`${className} ${
          orientation === "vertical" && verticalClassName
        } peer`}
        ref={loopWrapper}
      >
        {children &&
          children.map((child, index) => (
            <div
              onMouseEnter={() => {
                if (!pause) {
                  setPause(true);
                }
              }}
              key={index}
              ref={childRefs[index]}
              className={`peer ${
                cssPropertycoordinator === "left"
                  ? "anim-bounce-from-r"
                  : "anim-bounce-from-b"
              } ${slidesClassName}`}
            >
              {child}
            </div>
          ))}
      </div>

      {showNavigators && (
        <div
          className={`absolute hidden peer-hover:block z-40 p-4 ${
            orientation === "vertical"
              ? `left-[5%] top-[50%] -translate-y-[50%]`
              : `bottom-[5%] left-[50%] -translate-x-[50%]`
          }`}
        >
          {orientation === "vertical" ? (
            <>
              <button
                onMouseDown={() => {
                  scrollElements({
                    refs: childRefs,
                    domDimensionProperty,
                    cssPropertycoordinator,
                    spacing,
                    direction: 0,
                    deviation: 10,
                  });
                }}
                className={`${linearG} ${reverseHover} duration-500 shadow shadow-black hover:shadow-lg hover:shadow-black outline-none absolute bottom-[100%] left-[50%] -translate-x-[50%] h-10 w-10 flex items-center justify-center rounded-full`}
              >
                <FontAwesomeIcon icon={faAngleDoubleUp} />
              </button>
              <button
                onMouseDown={() => {
                  scrollElements({
                    refs: childRefs,
                    domDimensionProperty,
                    cssPropertycoordinator,
                    spacing,
                    direction: -1,
                    deviation: 10,
                  });
                }}
                className={`${linearG} ${reverseHover} duration-500 shadow shadow-black hover:shadow-lg hover:shadow-black outline-none absolute top-[100%] left-[50%] -translate-x-[50%] h-10 w-10 flex items-center justify-center rounded-full`}
              >
                <FontAwesomeIcon icon={faAngleDoubleDown} />
              </button>
            </>
          ) : (
            <>
              <button
                onMouseDown={() => {
                  scrollElements({
                    refs: childRefs,
                    domDimensionProperty,
                    cssPropertycoordinator,
                    spacing,
                    direction: -1,
                    deviation: 10,
                  });
                }}
                className={`${linearG} ${reverseHover} duration-500 shadow shadow-black hover:shadow-lg hover:shadow-black outline-none absolute right-[100%] top-[50%] -translate-y-[50%] h-10 w-10 flex items-center justify-center rounded-full`}
              >
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
              </button>
              <button
                onMouseDown={() => {
                  scrollElements({
                    refs: childRefs,
                    domDimensionProperty,
                    cssPropertycoordinator,
                    spacing,
                    direction: 0,
                    deviation: 10,
                  });
                }}
                className={`${linearG} ${reverseHover} duration-500 shadow shadow-black hover:shadow-lg hover:shadow-black outline-none absolute left-[100%] top-[50%] -translate-y-[50%] h-10 w-10 flex items-center justify-center rounded-full`}
              >
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function computePositionValue(value) {
  return parseInt(value.match(/[-]*[0-9]+/i)) || 0;
}

function scrollElements({
  refs,
  domDimensionProperty,
  cssPropertycoordinator,
  spacing,
  direction,
  deviation = 1,
}) {
  const maximumSize =
    refs
      .map((ref) => ref.current)
      .reduce((acc, curr) => {
        acc = acc + curr[domDimensionProperty] + spacing;
        return acc;
      }, 0) - spacing;

  refs
    .map((ref) => ref.current)
    .forEach((ref) => {
      const currentPositionValue = computePositionValue(
        ref.style[cssPropertycoordinator]
      );

      let newOffset = 0;

      if (direction >= 0) {
        if (
          currentPositionValue + deviation >
          maximumSize - ref[domDimensionProperty]
        ) {
          newOffset = 0 - ref[domDimensionProperty] - spacing;
        } else {
          newOffset = currentPositionValue + deviation;
        }
      } else {
        if (currentPositionValue + ref[domDimensionProperty] - deviation < 0) {
          ref.classList.remove(
            cssPropertycoordinator === "left"
              ? "anim-bounce-from-r"
              : "anim-bounce-from-b"
          );
          newOffset = maximumSize - ref[domDimensionProperty] + spacing;
          ref.classList.add(
            cssPropertycoordinator === "left"
              ? "anim-bounce-from-r"
              : "anim-bounce-from-b"
          );
        } else {
          newOffset = currentPositionValue - deviation;
        }
      }
      ref.style[cssPropertycoordinator] = `${newOffset}px`;
    });
}
