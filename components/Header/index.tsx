import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { headerItemSelect, textOnWhite } from "../../res/colors";
import LandingHeaderButton from "../LandingPage/LandingHeaderButton";
import Image from "next/image";
import HeaderButton from "./HeaderButton";
import { useRouter } from "next/router";
import { _AppContext } from "../../data/providers/provider_App";
import useWindowSize from "../../tools/hooks/useWindowSize";
import HeaderImage from "./HeaderImage";

interface Props {
  selectedPage: string; // undefined | about-me | portfolio
  setSelectedPage: (page?: string) => void;
  // route: string;
}

export const headerHeight = 70;

export default function Header(props: Props) {
  const { setMoveToMain } = useContext(_AppContext);

  const windowWidth = useWindowSize();
  const isXs = windowWidth.width < 600;

  const [shouldBlur, setShouldBlur] = useState(false);

  const listenToScroll = () => {
    // const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // const height =
    //   document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // const normalizedScroll = winScroll / height;

    const scroll = document.documentElement.scrollTop;
    if (scroll > 24) {
      setShouldBlur(true);
      console.log(`11111  listenToScroll:  ${true}`);
    } else {
      setShouldBlur(false);
      console.log(`11111  listenToScroll:  ${false}`);
    }

    console.log(`11111  listenToScroll:  ${scroll} ${shouldBlur}`);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, [listenToScroll]);

  return (
    <div
      css={css`
        grid-row: 1;
        grid-column: 1;
        position: fixed;
        width: 100%;
        height: ${headerHeight}px;
        z-index: 1000;
        align-self: start;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        //background-color: red;
        background-color: ${shouldBlur ? "#ffffffaa" : "transparent"};
        padding-bottom: ${shouldBlur ? 20 : 0}px;
        backdrop-filter: blur(${shouldBlur ? 3 : 0}px);
        -webkit-backdrop-filter: blur(${shouldBlur ? 3 : 0}px);

        border-bottom-width: 1px;
        border-bottom-color: ${shouldBlur ? "#00000033" : "transparent"};
        border-bottom-style: solid;

        transition: ${shouldBlur ? 300 : 200}ms ease;
        transition-property: border-bottom-color, background-color, padding-bottom;
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

      <HeaderImage
        selectedPage={props.selectedPage}
        setSelectedPage={props.setSelectedPage}
      />

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
