import React from "react";
import { css } from "@emotion/react";
import PagePortfolioItem from "../../components/PagePortfolioItem";

interface Props {}

export default function PortfolioItemPage(props: Props) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100vh;
      `}
    >
      <PagePortfolioItem />
    </div>
  );
}
