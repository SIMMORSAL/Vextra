import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { backgroundWhite, headerItemSelect, textOnWhite } from "../../res/colors";
import Image from "next/image";

interface Props {
  begin: boolean;
  beginNextPhase: (begin: boolean) => void;
  selectedPage?: string;
  setSelectedPage: (p: string) => void;
}

export default function CenterStuff({
  begin,
  beginNextPhase,
  selectedPage,
  setSelectedPage,
}: Props) {
  const [width, setWidth] = useState(0);
  const [showText, setShowText] = useState(false);
  const [pagesClickable, setPagesClickable] = useState(false);

  const durationLineAppear = 1500;
  const durationTextAppear = 500;

  useEffect(() => {
    if (begin && beginNextPhase) {
      setTimeout(() => {
        setTimeout(() => {
          setShowText(true);
          setPagesClickable(true);
        }, durationTextAppear);
        beginNextPhase(true);
      }, durationLineAppear - durationLineAppear * 0.4);
    }
  }, [begin, beginNextPhase]);

  useEffect(() => {
    setWidth(window.innerWidth - 64);
    window.addEventListener("resize", () => setWidth(window.innerWidth - 64));
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
          height: 100%;
          padding: 0 32px;
          display: flex;
          flex-direction: row;
          align-items: end;
          opacity: ${begin ? "1" : "0"}; ;
        `}
      >
        <Image
          src={require("../../res/images/landing_line.png")}
          alt={""}
          layout={"intrinsic"}
          css={css`
            filter: brightness(0) saturate(100%) invert(45%) sepia(0%)
              saturate(1073%) hue-rotate(140deg) brightness(96%) contrast(85%);
            opacity: ${selectedPage === undefined ? 1 : 0};
            transform: ${selectedPage === undefined ? "none" : "translateY(15vh)"};

            transition: opacity 70ms ease, transform 70ms ease;
          `}
        />
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

            transition: transform ${durationLineAppear}ms ease-in-out;
          `}
        />
        <div
          css={css`
            height: 100%;
            width: 50%;
            background-color: ${begin ? backgroundWhite : "transparent"};
            transform: translateX(${begin ? "100%" : "0"});

            transition: transform ${durationLineAppear}ms ease-in-out;
          `}
        />
      </div>
      {/* --------------------------------- */}
      <div
        css={css`
          grid-row: 1;
          grid-column: 1;
          width: 100%;
          height: calc(100% + ${width * 0.14}px);
          transform: translateY(
            ${showText ? width * 0.05 * -1 : width * 0.035 * -1}px
          );
          opacity: ${showText ? 1 : 0};
          padding: 0 32px;
          display: flex;
          flex-direction: row;
          color: ${textOnWhite};
          font-size: ${width * 0.03}px;
          text-align: center;

          transition: ${durationTextAppear}ms ease;
          transition-property: transform, opacity;
        `}
      >
        <div
          css={css`
            width: ${width * 0.161}px;
          `}
        >
          <p
            onClick={() => pagesClickable && setSelectedPage("about-me")}
            css={css`
              cursor: ${pagesClickable ? "pointer" : "default"};
              margin: 0;
              color: ${selectedPage === "about-me" ? headerItemSelect : textOnWhite};
              transform: ${selectedPage === undefined
                ? "none"
                : "translateY(-15vh) translateX(4vw)"};
              opacity: ${selectedPage === undefined ? 1 : 0};
              font-size: 1em;

              transition: 200ms ease;
              transition-property: color, text-shadow, transform, opacity, font-size,
                padding-top;

              :hover {
                color: ${headerItemSelect};
                text-shadow: 0 0 12px ${headerItemSelect}40;
                font-size: 1.05em;
                padding-top: 6px;
              }
            `}
          >
            About me
          </p>
        </div>
        <div
          css={css`
            width: ${width * 0.678}px;
          `}
        />
        <div
          css={css`
            width: ${width * 0.161}px;
          `}
        >
          <p
            onClick={() => pagesClickable && setSelectedPage("portfolio")}
            css={css`
              cursor: ${pagesClickable ? "pointer" : "default"};
              margin: 0;
              color: ${selectedPage === "portfolio"
                ? headerItemSelect
                : textOnWhite};
              transform: ${selectedPage === undefined
                ? "none"
                : "translateY(-15vh) translateX(-4vw)"};
              opacity: ${selectedPage === undefined ? 1 : 0};

              transition: 200ms ease;
              transition-property: color, text-shadow, transform, opacity,
                font-weight, font-size, padding-top;

              :hover {
                color: ${headerItemSelect};
                text-shadow: 0 0 12px ${headerItemSelect}40;
                font-size: 1.05em;
                padding-top: 6px;
              }
            `}
          >
            Portfolio
          </p>
        </div>
      </div>
    </div>
  );
}
