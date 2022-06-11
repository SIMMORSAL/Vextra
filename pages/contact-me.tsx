import React from "react";
import { css } from "@emotion/react";
import useWindowSize from "../tools/hooks/useWindowSize";
import AboutMeContent from "../components/AboutMeContent";
import ContactMeContent from "../components/ContactMeContent";
import { headerHeight } from "../components/Header";

interface Props {}

export default function ContactMe(props: Props) {
  const windowSize = useWindowSize();
  const isXs = windowSize.width < 600;

  console.log(`11111  ContactMe:  ${headerHeight}`);

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      <div
        css={css`
          width: 100%;
          /* height: 45%; */
          //transform: scale(0.95);
          display: ${isXs ? "flex" : "none"};
        `}
      >
        <AboutMeContent />
      </div>
      <div
        css={css`
          width: 100%;
          height: ${isXs ? "fit-content" : `calc(100vh - ${6}px)`};
          //height: 100vh;
          //transform: scale(0.95);
        `}
      >
        <ContactMeContent />
      </div>
    </div>
  );
}
