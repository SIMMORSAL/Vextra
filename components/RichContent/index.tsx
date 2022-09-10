import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import RichChunk from "./RichChunk";
import { RichChunkModel } from "../../data/models/rich-chunk/RichChunkModel";

interface Props {
  data: RichChunkModel[];
  backgroundColor: string;
  textColor: string;
}

export default function RichContent(p: Props) {
  return (
    <div
      css={css`
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        //justify-content: start;
        background-color: transparent;
      `}
    >
      <div
        id={"pageRichContent"}
        css={css`
          width: 100%;
          overflow: hidden;
          background-color: transparent;
        `}
      >
        {p.data.map((textChunk) => {
          return (
            <RichChunk
              key={textChunk.nameId}
              chunk={textChunk}
              backgroundColor={p.backgroundColor}
              textColor={p.textColor}
            />
          );
        })}
      </div>
    </div>
  );
}
