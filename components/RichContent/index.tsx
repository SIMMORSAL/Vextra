import React from "react";
import { css } from "@emotion/react";
import RichChunk from "./RichChunk";
import { RichChunkModel } from "../../data/models/rich-content/RichChunkModel";

interface Props {
  data: RichChunkModel[];
}

export default function RichContent(p: Props) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      {p.data.map((textChunk) => {
        return <RichChunk key={textChunk.name} chunk={textChunk} />;
      })}
    </div>
  );
}
