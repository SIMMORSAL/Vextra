import React from "react";
import { css } from "@emotion/react";
import PortfolioContent from "../../components/PortfolioContent";

interface Props {}

export default function Portfolio(props: Props) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        transform: scale(0.95);
      `}
    >
      <PortfolioContent />
    </div>
  );
}
