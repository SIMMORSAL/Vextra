import React from "react";
import { css } from "@emotion/react";
import PagePortfolio from "../../components/PagePortfolio";

interface Props {}

export default function Portfolio(props: Props) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      <PagePortfolio />
    </div>
  );
}
