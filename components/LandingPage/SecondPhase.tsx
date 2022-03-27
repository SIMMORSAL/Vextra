import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { textOnWhite } from "../../res/colors";

interface Props {
  begin: boolean;
}

export default function SecondPhase({ begin }: Props) {
  const [width, setWidth] = useState(0);
  const heightFactor = 0.12;

  useEffect(() => {
    setWidth(window.innerWidth - 64);
    window.addEventListener("resize", () => setWidth(window.innerWidth - 64));
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
            width: ${width * 0.17}px;
            height: ${width * heightFactor}px;
            margin-bottom: ${width * 0.3 * 0.35}px;
            //background-color: green;
          `}
        />
        <div
          css={css`
            width: ${width * 0.26}px;
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
            width: ${width * 0.17}px;
            height: ${width * heightFactor}px;
            margin-bottom: ${width * 0.3 * 0.35}px;
            //background-color: green;
          `}
        />
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
