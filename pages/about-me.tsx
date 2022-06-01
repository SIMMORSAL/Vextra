import React from "react";
import { css } from "@emotion/react";
import useWindowSize from "../tools/hooks/useWindowSize";
import AboutMeContent from "../components/AboutMeContent";
import ContactMeContent from "../components/ContactMeContent";

interface Props {}

export default function AboutMe(props: Props) {
  const windowSize = useWindowSize();
  const isXs = windowSize.width < 600;

  return (
    <div
      css={css`
        width: 100%;
        /* height: 100%; */
      `}
    >
      <div
        css={css`
          width: 100%;
          /* height: ${isXs ? "fit-content" : "100%"}; */
          transform: scale(0.95);
        `}
      >
        <AboutMeContent />
      </div>
      <div
        css={css`
          width: 100%;
          height: 50%;
          transform: scale(0.95);
          display: ${isXs ? "flex" : "none"};
        `}
      >
        <ContactMeContent />
      </div>
    </div>
  );
}
