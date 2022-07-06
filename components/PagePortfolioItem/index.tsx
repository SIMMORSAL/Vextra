import React from "react";
import { css } from "@emotion/react";
import RichContent from "../RichContent";
import { RichChunkModel } from "../../data/models/rich-content/RichChunkModel";
import { headerHeight } from "../Header";

interface Props {}

export default function PagePortfolioItem(p: Props) {
  const data: RichChunkModel[] = [
    {
      name: "asdf",
      longTextTop: [
        {
          textAlign: "center",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
      ],
    },
  ];

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: ${headerHeight}px;
      `}
    >
      <RichContent data={data} />
    </div>
  );
}
