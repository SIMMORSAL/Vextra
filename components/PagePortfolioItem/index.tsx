import React from "react";
import { css } from "@emotion/react";
import RichContent from "../RichContent";
import { RichChunkModel } from "../../data/models/RichChunkModel";
import { headerHeight } from "../Header";
import { getDataProject1 } from "../../data/local/portfolio/getDataProject1";

interface Props {}

export default function PagePortfolioItem(p: Props) {
  const data: RichChunkModel[] = getDataProject1();

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: ${headerHeight}px;
      `}
    >
      <RichContent data={data} />
    </div>
  );
}
