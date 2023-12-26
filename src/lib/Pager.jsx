import React, { useEffect, useRef, useState } from "react";
import { getRange } from "./functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

export default function Pager({
  autoPlay: { play, interval } = { play: false, interval: 1000 },
  padding = 0,
  children,
  orientation = "horizontal",
  slidesClassName,
  arrows: { showArrows, arrowsClassName } = { showArrows: false },
  indicators: {
    showIndicators,
    positionX,
    positionY,
    indicatorsClassName,
    indicatorsWrapperClassName,
    activeClassName,
    inactiveClassName,
  } = { showIndicators: false, positionX: "left", positionY: "bottom" },
  contentClassName = "",
}) {
  const [pageState, setPageState] = useState({
    currentPage: 0,
    previousPage: 0,
  });

  const cssPropertycoordinator = orientation === "vertical" ? "top" : "left";

  const [resizeRefresher, setResizeRefresher] = useState(0);

  const pageContentWrapperRef = useRef();

  const childRefs = new Array(children?.length).fill(0).map(() => useRef());

  const getTargetsCurrentCssPositioning = () =>
    parseInt(
      childRefs[pageState.currentPage].current.style[
        cssPropertycoordinator
      ].match(/[-]*[0-9]+/i)
    ) || 0;

  useEffect(() => {
    const direction = 0 - getTargetsCurrentCssPositioning();

    let scrollInterval = setInterval(() => {
      if (getTargetsCurrentCssPositioning() === 0) {
        stopScrollInterval();
      } else {
        childRefs
          .map((ref) => ref.current)
          .forEach((ref) => {
            const currentPositionValue =
              parseInt(
                ref.style[cssPropertycoordinator].match(/[-]*[0-9]+/i)
              ) || 0;
            ref.style[cssPropertycoordinator] = `${
              direction >= 0
                ? currentPositionValue + 1
                : currentPositionValue - 1
            }%`;
          });
      }
    }, 1);

    const stopScrollInterval = () => {
      clearInterval(scrollInterval);
    };

    return () => {
      stopScrollInterval();
    };
  }, [pageState]);

  useEffect(() => {
    // Refresh detection
    window.addEventListener("resize", (e) => {
      setResizeRefresher((r) => r + 1);
    });
  }, []);

  useEffect(() => {
    let autoPlayInterval = null;

    if (play) {
      autoPlayInterval = setInterval(() => {
        setPageState((state) => {
          let dir = 1;

          if (state.currentPage === children.length - 1) {
            dir = -1;
          } else if (state.currentPage === 0) {
            dir = 1;
          }

          return {
            currentPage: state.currentPage + dir,
            previousPage: state.currentPage,
          };
        });
      }, interval);
    }

    return () => {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
    };
  }, []);

  useEffect(() => {
    // Fallback to normal flow
    childRefs.forEach((ref) => {
      ref.current.style.width = "";
      ref.current.style.height = "";
      ref.current.style.minHeight = "";
      ref.current.style.maxHeight = "";
      ref.current.style.position = "static";
      ref.current.style.padding = `${padding}px`;
    });
    pageContentWrapperRef.current.style.minHeight = "";
    pageContentWrapperRef.current.style.maxHeight = "";

    let tallestHeight = 0;

    // Computing the dimension of the highest attainable size of other side
    // given one side is already fixed along the orientation
    childRefs.forEach((ref, i) => {
      const offsetHeight = ref.current.offsetHeight;

      if (offsetHeight > tallestHeight) {
        tallestHeight = offsetHeight;
      }
    });

    // Fixing the height to match the largest child Height
    pageContentWrapperRef.current.style.minHeight = `${tallestHeight}px`;
    // pageContentWrapperRef.current.style.maxHeight = `${
    //   tallestHeight + padding * 2
    // }px`;

    childRefs.forEach((ref, index) => {
      // Setting the absolute sides [left or top] relative
      // to the parent wrapper acting as the viewport
      ref.current.style[cssPropertycoordinator] = `${
        (index - pageState.currentPage) * 100
      }%`;

      // Fixing length of sizes to match full container
      ref.current.style.minHeight = `${tallestHeight}px`;
      ref.current.style.maxHeight = `${tallestHeight}px`;

      // Set widths
      ref.current.style.width = "100%";

      // Remove from normal flow after fixing the height and width
      ref.current.style.position = "absolute";
      ref.current.style.padding = `${padding}px`;
    });
  }, [resizeRefresher]);

  return (
    <div
      style={{
        position: "relative",
      }}
      className={`flex ${
        cssPropertycoordinator === "left"
          ? `items-center ${
              positionY === "top" ? "flex-col-reverse" : "flex-col"
            }`
          : positionX === "right"
          ? "flex-row-reverse"
          : "flex-row"
      }`}
    >
      {showIndicators && children && cssPropertycoordinator === "top" && (
        <div className="flex flex-col">
          <div className="h-1/4"></div>
          <div
            className={`border flex-grow p-1 rounded-2xl ${indicatorsWrapperClassName} flex flex-col`}
          >
            {getRange(0, children.length).map((p) => (
              <div
                key={p}
                onClick={() => {
                  setPageState({
                    ...pageState,
                    currentPage: p,
                    previousPage: pageState.currentPage,
                  });
                }}
                className={`cursor-pointer border rounded-2xl p-1 m-1 ${indicatorsClassName} ${
                  p === pageState.currentPage
                    ? `anim-expand-h h-full ${activeClassName}`
                    : p === pageState.previousPage
                    ? `anim-shrink-h ${inactiveClassName}`
                    : `${inactiveClassName}`
                }`}
              ></div>
            ))}
          </div>
          <div className="h-1/4"></div>
        </div>
      )}

      <div
        ref={pageContentWrapperRef}
        className={`overflow-hidden flex-grow w-full relative ${contentClassName}`}
      >
        {children &&
          children.map((child, index) => (
            <div
              key={index}
              ref={childRefs[index]}
              className={`${slidesClassName}`}
            >
              {child}
            </div>
          ))}

        {showArrows === true && pageState.currentPage > 0 && (
          <button
            onClick={() => {
              setPageState({
                ...pageState,
                currentPage: pageState.currentPage - 1,
                previousPage: pageState.currentPage,
              });
            }}
            className={`${arrowsClassName} absolute ${
              cssPropertycoordinator === "left"
                ? "left-4 top-[50%] -translate-y-[50%]"
                : "top-2 left-[50%] -translate-x-[50%]"
            }`}
          >
            <FontAwesomeIcon
              icon={cssPropertycoordinator === "left" ? faAngleLeft : faAngleUp}
            />
          </button>
        )}

        {showArrows === true && pageState.currentPage < children.length - 1 && (
          <button
            onClick={() => {
              setPageState({
                ...pageState,
                currentPage: pageState.currentPage + 1,
                previousPage: pageState.currentPage,
              });
            }}
            className={`${arrowsClassName} absolute ${
              cssPropertycoordinator === "left"
                ? "right-4 top-[50%] -translate-y-[50%]"
                : "bottom-2 left-[50%] -translate-x-[50%]"
            }`}
          >
            <FontAwesomeIcon
              icon={
                cssPropertycoordinator === "left" ? faAngleRight : faAngleDown
              }
            />
          </button>
        )}
      </div>

      {showIndicators && children && cssPropertycoordinator === "left" && (
        <div
          className={`w-1/2 mx-auto rounded-2xl border p-1 ${indicatorsWrapperClassName} flex`}
        >
          {getRange(0, children.length).map((p) => (
            <div
              key={p}
              onClick={() => {
                setPageState({
                  ...pageState,
                  currentPage: p,
                  previousPage: pageState.currentPage,
                });
              }}
              className={`cursor-pointer border rounded-2xl p-1 m-1 ${indicatorsClassName}  ${
                p === pageState.currentPage
                  ? `anim-expand-w w-full ${activeClassName}`
                  : p === pageState.previousPage
                  ? `${inactiveClassName} anim-shrink-w`
                  : `${inactiveClassName}`
              } duration-300`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}
