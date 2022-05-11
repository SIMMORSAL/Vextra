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

  // const [isSm, setIsSm] = useState(false);
  // const heightFactor = 0.12;
  // const [rightX2, setRightX2] = useState(0);
  // const [rightY2, setRightY2] = useState(0);

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
    //
    // setIsSm(window.innerWidth < 960);
    // window.addEventListener("resize", () => {
    //   setIsSm(window.innerWidth < 960);
    //   setWidth(window.innerWidth - 64);
    // });
    // const lineLeftRoot = document.getElementById("lineleft");
    // console.log("11111  lin:  ", lineLeftRoot);
    // lineLeftRoot.addEventListener("resize", (ev) => {
    //   console.log("11111  RESIZE:  ", ev.view.innerWidth, ev.view.innerHeight);
    // });
  }, []);

  console.log("11111  CenterStuff:  ", selectedPage);

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
          //background-color: rgba(255, 0, 0, 0.43);
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
          //background-color: rgba(0, 112, 243, 0.44);

          transition: ${durationTextAppear}ms ease;
          transition-property: transform, opacity;
        `}
      >
        <div
          css={css`
            width: ${width * 0.161}px;
            //background-color: rgba(0, 128, 0, 0.62);
          `}
        >
          <p
            onClick={() => pagesClickable && setSelectedPage("aboutMe")}
            css={css`
              cursor: ${pagesClickable ? "pointer" : "default"};
              margin: 0;
              color: ${selectedPage === "aboutMe" ? headerItemSelect : textOnWhite};

              transition: 200ms ease;
              transition-property: color, text-shadow;

              :hover {
                color: ${headerItemSelect};
                text-shadow: 0 0 12px ${headerItemSelect}22;
              }
            `}
          >
            About me
          </p>
        </div>
        <div
          css={css`
            width: ${width * 0.678}px;
            //background-color: rgba(0, 128, 0, 0.26);
          `}
        />
        <div
          css={css`
            width: ${width * 0.161}px;
            //background-color: rgba(0, 128, 0, 0.62);
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

              transition: 200ms ease;
              transition-property: color, text-shadow;

              :hover {
                color: ${headerItemSelect};
                text-shadow: 0 0 12px ${headerItemSelect}22;
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
