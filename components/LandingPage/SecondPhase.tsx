import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { textOnWhite } from "../../res/colors";

interface Props {
  begin: boolean;
}

export default function SecondPhase({ begin }: Props) {
  const [width, setWidth] = useState(0);
  const [isSm, setIsSm] = useState(false);
  const heightFactor = 0.12;

  useEffect(() => {
    setWidth(window.innerWidth - 64);
    window.addEventListener("resize", () => setWidth(window.innerWidth - 64));
  }, []);

  useEffect(() => {
    setIsSm(window.innerWidth < 960);
    window.addEventListener("resize", () => setIsSm(window.innerWidth < 960));
  }, []);

  console.log("11111  SecondPhase:  ", width);
  return (
    <div
      css={css`
        width: 100%;
        //height: 100%;
        grid-row: 1;
        grid-column: 1;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 30vw;
          padding: 0 32px;
          //background-color: rgba(255, 0, 0, 0.43);
          display: flex;
          flex-direction: row;
          align-items: end;
        `}
      >
        <div
          css={css`
            width: ${width * 0.2}px;
            height: ${width * heightFactor * 1.7}px;
            margin-bottom: ${width * 0.3 * 0.35}px;
            //background-color: blue;
          `}
        />
        <div
          css={css`
            width: ${width * 0.165}px;
            height: ${width * heightFactor}px;
            margin-bottom: ${width * 0.3 * 0.35}px;
            //background-color: green;
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="none"
            viewBox={isSm ? "0 0 100% 100" : "0 0 100 100"}
          >
            <line
              x1="0"
              y1="0"
              x2={width * 0.165 + 1}
              y2={width * heightFactor - 1}
              // y2="70"
              stroke={textOnWhite}
              strokeWidth="2.8"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
        <div
          css={css`
            width: ${width * 0.27}px;
            height: ${width * heightFactor}px;
            margin-bottom: ${width * 0.3 * 0.35}px;
            //background-color: blue;
            display: flex;
            align-items: end;
            justify-content: center;
          `}
        >
          <div
            css={css`
              width: ${begin ? "100%" : "0px"};
              height: 3px;
              background-color: ${textOnWhite};

              transition: width 300ms ease;
            `}
          />
        </div>
        <div
          css={css`
            width: ${width * 0.165}px;
            height: ${width * heightFactor}px;
            margin-bottom: ${width * 0.3 * 0.35}px;
            //background-color: green;
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="none"
            viewBox={isSm ? "0 0 100% 100" : "0 0 100 100"}
          >
            <line
              x1="-1"
              y1={width * heightFactor - 1}
              x2={width * 0.165}
              y2="0"
              // y2="70"
              stroke={textOnWhite}
              strokeWidth="2.8"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
        <div
          css={css`
            width: ${width * 0.2}px;
            height: ${width * heightFactor * 1.7}px;
            margin-bottom: ${width * 0.3 * 0.35}px;
            //background-color: blue;
          `}
        />
      </div>
    </div>
  );
}
