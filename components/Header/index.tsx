import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { headerItemSelect, textOnWhite } from "../../res/colors";
import LandingHeaderButton from "../LandingPage/LandingHeaderButton";
import Image from "next/image";
import HeaderButton from "./HeaderButton";
import { useRouter } from "next/router";
import { _AppContext } from "../../data/providers/provider_App";

interface Props {
  // selectedPage?: string; // undefined | about-me | portfolio
  // setSelectedPage?: (page?: string) => void;
  route: string;
}

export default function Header(props: Props) {
  const router = useRouter();
  const route = router.asPath.slice(1).split("/")[0];
  const [selectedPage, setSelectedPage] = useState(route);
  const { moveToMain, setMoveToMain } = useContext(_AppContext);
  useEffect(() => {
    const route = router.route.slice(1).split("/")[0];
    setSelectedPage(route);
  }, [router]);
  useEffect(() => {
    console.log(`11111  asdfasdfasdf:  ${moveToMain}`);
  }, [moveToMain]);
  return (
    <div
      css={css`
        grid-row: 1;
        grid-column: 1;
        width: 100%;
        height: 70px;
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
      <HeaderButton
        page={"home"}
        selectedPage={selectedPage}
        setSelectedPage={() => setSelectedPage(undefined)}
        homeClicked={() => setMoveToMain(true)}
      >
        Home
      </HeaderButton>
      <HeaderButton
        page={"about-me"}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
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
            setSelectedPage(undefined);
            setMoveToMain(true);
          }}
          css={css`
            cursor: pointer;
            opacity: ${selectedPage === undefined ? 0 : 1};

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
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      >
        Portfolio
      </HeaderButton>
      <HeaderButton
        page={"contact-me"}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      >
        Contact Me
      </HeaderButton>
    </div>
  );
}
