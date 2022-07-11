import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import RichChunk from "./RichChunk";
import { RichChunkModel } from "../../data/models/RichChunkModel";

interface Props {
  data: RichChunkModel[];
}

export default function RichContent(p: Props) {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
      `}
    >
      {p.data.map((textChunk) => {
        return <RichChunk key={textChunk.nameId} chunk={textChunk} />;
      })}
    </div>
  );
}
