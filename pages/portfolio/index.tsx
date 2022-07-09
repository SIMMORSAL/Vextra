import React from "react";
import { css } from "@emotion/react";
import PagePortfolio from "../../components/PagePortfolio";
import useWindowSize from "../../helpers/tools/hooks/useWindowSize";
import PageAboutMe from "../../components/PageAboutMe";
import PageContactMe from "../../components/PageContactMe";

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
