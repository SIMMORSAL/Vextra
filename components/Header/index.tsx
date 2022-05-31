import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { headerItemSelect, textOnWhite } from "../../res/colors";
import LandingHeaderButton from "../LandingPage/LandingHeaderButton";
import Image from "next/image";
import HeaderButton from "./HeaderButton";
import { useRouter } from "next/router";
import { _AppContext } from "../../data/providers/provider_App";
import useWindowSize from "../../tools/hooks/useWindowSize";

interface Props {
  selectedPage: string; // undefined | about-me | portfolio
  setSelectedPage: (page?: string) => void;
  // route: string;
}

export const headerHeight = 70;

export default function Header(props: Props) {
  const { moveToMain, setMoveToMain, setFadeOutContent, setFlashContent } =
    useContext(_AppContext);

  const windowWidth = useWindowSize();
  const isXs = windowWidth.width < 600;

  return (
    <div
      css={css`
        grid-row: 1;
        grid-column: 1;
        width: 100%;
        height: ${headerHeight}px;
        z-index: 1000;
        align-self: start;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        //background-color: red;
      `}
    >
      {isXs ? (
        <></>
      ) : (
        <HeaderButton
          page={"home"}
          selectedPage={props.selectedPage}
          setSelectedPage={() => props.setSelectedPage(undefined)}
          homeClicked={() => setMoveToMain(true)}
        >
          Home
        </HeaderButton>
      )}
      <HeaderButton
        page={
          !isXs
            ? "about-me"
            : props.selectedPage === "contact-me"
            ? "contact-me"
            : "about-me"
        }
        selectedPage={props.selectedPage}
        setSelectedPage={props.setSelectedPage}
      >
        About me
      </HeaderButton>

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
          src={require("../../res/images/logo_big.png")}
          alt={""}
          layout={"intrinsic"}
          onClick={() => {
            props.setSelectedPage(undefined);
            setMoveToMain(true);
          }}
          css={css`
            cursor: pointer;
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
      <HeaderButton
        page={"portfolio"}
        selectedPage={props.selectedPage}
        setSelectedPage={props.setSelectedPage}
      >
        Portfolio
      </HeaderButton>
      {isXs ? (
        <></>
      ) : (
        <HeaderButton
          page={"contact-me"}
          selectedPage={props.selectedPage}
          setSelectedPage={props.setSelectedPage}
        >
          Contact Me
        </HeaderButton>
      )}
    </div>
  );
}
