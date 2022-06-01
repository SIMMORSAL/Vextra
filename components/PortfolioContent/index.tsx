import React from "react";
import { css } from "@emotion/react";
import { headerHeight } from "../Header";

interface Props {}

export default function PortfolioContent(props: Props) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        //border: 1px solid #484848;
        font-weight: bold;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: ${headerHeight}px 24px 24px;
      `}
    >
      Portfolio
    </div>
  );
}
