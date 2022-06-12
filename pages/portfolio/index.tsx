import React from "react";
import { css } from "@emotion/react";
import PortfolioContent from "../../components/PortfolioContent";
import useWindowSize from "../../tools/hooks/useWindowSize";
import AboutMeContent from "../../components/AboutMeContent";
import ContactMeContent from "../../components/ContactMeContent";

interface Props {}

export default function Portfolio(props: Props) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      <PortfolioContent />
    </div>
  );
}
