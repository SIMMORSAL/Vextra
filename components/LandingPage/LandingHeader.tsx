import React, { useState } from "react";
import { css } from "@emotion/react";
import LandingHeaderButton from "./LandingHeaderButton";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";

interface Props {
  selectedPage?: string; // undefined | about-me | portfolio
  setSelectedPage?: (page?: string) => void;
}

export default function LandingHeader(props: Props) {
  const windowWidth = useWindowSize();
  const isXs = windowWidth.width < 600;

  return (
    <div
      css={css`
        grid-row: 1;
        grid-column: 1;
        width: 100%;
        height: 70px;
        z-index: 1000;
        align-self: start;
        //overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      `}
    >
      {isXs ? (
        <></>
      ) : (
        <LandingHeaderButton
          isFirstOrLast={true}
          page={"home"}
          selectedPage={props.selectedPage}
          setSelectedPage={() => props.setSelectedPage(undefined)}
          // transform={props.selectedPage === undefined ? "translateX(-25vw)" : "none"}
        >
          Home
        </LandingHeaderButton>
      )}
      <LandingHeaderButton
        isFirstOrLast={false}
        page={"about-me"}
        selectedPage={props.selectedPage}
        setSelectedPage={props.setSelectedPage}
        transform={
          props.selectedPage === undefined
            ? "translateY(15vh) translateX(-4vw)"
            : "none"
        }
      >
        About me
      </LandingHeaderButton>

      <div
        css={css`
          width: 70px;
          margin-top: 20px;
          margin-left: 8px;
          margin-right: 8px;

          transition: width 200ms ease;

          :hover {
            width: 80px;
          }
        `}
      >
        <Image
          // id={"icon"}
          // onClick={props.onClick}
          src={require("../../res/images/logo_big.png")}
          alt={""}
          layout={"intrinsic"}
          onClick={() => props.setSelectedPage(undefined)}
          css={css`
            cursor: pointer;
            transform: ${props.selectedPage === undefined
              ? "translateY(15vh)"
              : "none"};
            opacity: ${props.selectedPage === undefined ? 0 : 1};

            transition: 200ms ease;
            transition-property: filter, background-color, transform, opacity;

            :hover {
              filter: invert(46%) sepia(38%) saturate(1830%) hue-rotate(150deg)
                brightness(89%) contrast(84%);
            }
          `}
        />
      </div>
      <LandingHeaderButton
        isFirstOrLast={false}
        page={"portfolio"}
        selectedPage={props.selectedPage}
        setSelectedPage={props.setSelectedPage}
        transform={
          props.selectedPage === undefined
            ? "translateY(15vh) translateX(4vw)"
            : "none"
        }
      >
        Portfolio
      </LandingHeaderButton>
      {isXs ? (
        <></>
      ) : (
        <LandingHeaderButton
          isFirstOrLast={true}
          page={"contact-me"}
          selectedPage={props.selectedPage}
          setSelectedPage={props.setSelectedPage}
          // transform={props.selectedPage === undefined ? "translateX(25vw)" : "none"}
        >
          Contact Me
        </LandingHeaderButton>
      )}
    </div>
  );
}
