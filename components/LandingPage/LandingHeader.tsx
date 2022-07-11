import React from "react";
import { css } from "@emotion/react";
import LandingHeaderButton from "./LandingHeaderButton";
import Image from "next/image";
import useWindowSize from "../../helpers/tools/hooks/useWindowSize";
import HeaderLogo from "../Header/HeaderLogo";
import { getGeneralData } from "../../data/local/_dataGeneral";

interface Props {
  selectedPage?: string; // undefined | about-me | portfolio
  setSelectedPage?: (page?: string) => void;
}

export default function LandingHeader(props: Props) {
  const windowWidth = useWindowSize();
  const isXs = windowWidth.width < 600;

  const _generalData = getGeneralData();

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
          opacity: ${props.selectedPage === undefined ? 0 : 1};
          transform: ${props.selectedPage === undefined
            ? "translateY(15vh)"
            : "none"};

          transition: 150ms ease;
          transition-delay: 50ms;
          transition-property: width, transform, opacity;
        `}
      >
        <img
          src={_generalData.logo}
          alt={"logo"}
          onClick={() => props.setSelectedPage(undefined)}
          css={css`
            cursor: pointer;
            width: 100%;

            transition: 200ms ease;
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
