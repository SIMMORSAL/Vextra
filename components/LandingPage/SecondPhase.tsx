import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { backgroundWhite, textOnWhite } from "../../res/colors";

interface Props {
  begin: boolean;
}

export default function SecondPhase({ begin }: Props) {
  const [width, setWidth] = useState(0);
  const [isSm, setIsSm] = useState(false);

  const heightFactor = 0.12;
  const [rightX2, setRightX2] = useState(0);
  const [rightY2, setRightY2] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth - 64);
    window.addEventListener("resize", () => setWidth(window.innerWidth - 64));

    setIsSm(window.innerWidth < 960);
    window.addEventListener("resize", () => {
      setIsSm(window.innerWidth < 960);
      setWidth(window.innerWidth - 64);
    });

    const lineLeftRoot = document.getElementById("lineleft");
    console.log("11111  lin:  ", lineLeftRoot);
    lineLeftRoot.addEventListener("resize", (ev) => {
      console.log("11111  RESIZE:  ", ev.view.innerWidth, ev.view.innerHeight);
    });
  }, []);

  return (
    <div
      css={css`
        width: 100%;
        //height: 100%;
        grid-row: 1;
        grid-column: 1;
        display: grid;
      `}
    >
      <div
        css={css`
          grid-row: 1;
          grid-column: 1;
          width: 100%;
          height: 30vw;
          padding: 0 32px;
          //background-color: rgba(255, 0, 0, 0.43);
          display: flex;
          flex-direction: row;
          align-items: end;
          opacity: ${begin ? "1" : "0"}; ;
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
        {/* ------------ */}
        <div
          css={css`
            width: ${width * 0.165}px;
            height: ${width * heightFactor}px;
            margin-bottom: ${width * 0.3 * 0.355}px;
            //background-color: green;
            display: flex;
            justify-content: start;
            align-items: end;
          `}
        >
          <div
            id={"lineleft"}
            css={css`
              width: ${width * 0.165 + 1}px;
              height: ${width * heightFactor - 1}px;

              //transition: width 300ms ease, height 300ms ease;
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
                strokeWidth="2.9"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
        {/* ------------ */}
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
              width: 100%;
              height: 3px;
              background-color: ${textOnWhite};
            `}
          />
        </div>
        {/* ------------ */}
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
            viewBox={isSm ? "0 0 100 100" : "0 0 100 100"}
          >
            <line
              x1="-1"
              y1={width * heightFactor - 1}
              x2={width * 0.165}
              y2="0"
              // y2="70"
              stroke={textOnWhite}
              strokeWidth="2.9"
              vectorEffect="non-scaling-stroke"
              // css={css`
              //   animation: y1 200ms ease;
              // `}
            />
          </svg>
        </div>
        {/* ------------ */}
        <div
          css={css`
            width: ${width * 0.2}px;
            height: ${width * heightFactor * 1.7}px;
            margin-bottom: ${width * 0.3 * 0.35}px;
            //background-color: blue;
            display: flex;
            flex-direction: column;
          `}
        >
          <div
            css={css`
              height: ${width * heightFactor * 1.7 - width * heightFactor}px;
              //background-color: green;
            `}
          />
          <div
            css={css`
              height: ${width * heightFactor}px;
              //background-color: red;
            `}
          >
            <div
              css={css`
                width: 100%;
                height: 3px;
                background-color: ${textOnWhite};
              `}
            />
          </div>
        </div>
      </div>
      {/* --------------------------------- */}
      <div
        css={css`
          grid-row: 1;
          grid-column: 1;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          overflow: hidden;
          //background-color: rgba(0, 112, 243, 0.44);
        `}
      >
        <div
          css={css`
            height: 100%;
            width: 50%;
            background-color: ${begin ? backgroundWhite : "transparent"};
            transform: translateX(${begin ? "-100%" : "0"});

            transition: transform 1500ms ease-in-out;
          `}
        />
        <div
          css={css`
            height: 100%;
            width: 50%;
            background-color: ${begin ? backgroundWhite : "transparent"};
            transform: translateX(${begin ? "100%" : "0"});

            transition: transform 1500ms ease-in-out;
          `}
        />
      </div>
    </div>
  );
}
