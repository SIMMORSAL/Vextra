import React, { useContext } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { _AppContext } from "../../data/providers/provider_App";

interface Props {
  selectedPage: string; // undefined | about-me | portfolio
  setSelectedPage: (page?: string) => void;
}

export default function HeaderImage(props: Props) {
  const { moveToMain, setMoveToMain, setFadeOutContent, setFlashContent } =
    useContext(_AppContext);
  return (
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

          //:hover {
          //  filter: invert(46%) sepia(38%) saturate(1830%) hue-rotate(150deg)
          //    brightness(89%) contrast(84%);
          //}
        `}
      />
    </div>
  );
}
