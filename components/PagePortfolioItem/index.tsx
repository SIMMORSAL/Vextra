import React from "react";
import { css } from "@emotion/react";
import RichContent from "../RichContent";
import { RichChunkModel } from "../../data/models/rich-content/RichChunkModel";
import { headerHeight } from "../Header";
import { getDataRichChunkProject1 } from "../../data/local/portfolio/getDataRichChunkProject1";

interface Props {}

export default function PagePortfolioItem(p: Props) {
  const data: RichChunkModel[] = getDataRichChunkProject1();

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
