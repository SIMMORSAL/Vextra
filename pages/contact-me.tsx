import React from "react";
import { css } from "@emotion/react";
import useWindowSize from "../hooks/useWindowSize";
import AboutMeContent from "../components/AboutMeContent";
import ContactMeContent from "../components/ContactMeContent";

interface Props {}

export default function ContactMe(props: Props) {
  const windowSize = useWindowSize();
  const isXs = windowSize.width < 600;
  console.log(`11111  AboutMe:  ${isXs}`);

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
          height: 45%;
          transform: scale(0.95);
          display: ${isXs ? "flex" : "none"};
        `}
      >
        <AboutMeContent />
      </div>
      <div
        css={css`
          width: 100%;
          height: ${isXs ? 40 : 100}%;
          transform: scale(0.95);
        `}
      >
        <ContactMeContent />
      </div>
    </div>
  );
}
