import React from "react";
import { css } from "@emotion/react";
import useWindowSize from "../tools/hooks/useWindowSize";
import PageAboutMe from "../components/PageAboutMe";
import PageContactMe from "../components/PageContactMe";
import { headerHeight } from "../components/Header";

interface Props {}

export default function ContactMe(props: Props) {
  const windowSize = useWindowSize();
  const isXs = windowSize.width < 600;

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
          display: ${isXs ? "flex" : "none"};
        `}
      >
        <PageAboutMe />
      </div>
      <div
        css={css`
          width: 100%;
          height: ${isXs ? "fit-content" : `calc(100vh - 6px)`};
          padding-bottom: ${isXs ? "200px" : "0"};
        `}
      >
        <PageContactMe />
      </div>
    </div>
  );
}
