import React from "react";
import { css } from "@emotion/react";
import useWindowSize from "../helpers/hooks/useWindowSize";
import PageAboutMe from "../components/PageAboutMe";
import PageContactMe from "../components/PageContactMe";

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
        `}
      >
        <PageAboutMe />
      </div>
      <div
        css={css`
          width: 100%;
          height: 50%;
          display: ${isXs ? "flex" : "none"};
          padding-bottom: 200px;
        `}
      >
        <PageContactMe />
      </div>
    </div>
  );
}
