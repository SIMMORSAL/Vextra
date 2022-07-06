import React from "react";
import { css } from "@emotion/react";
import RichChunk from "./RichChunk";
import { RichChunkModel } from "../../data/models/rich-content/RichChunkModel";

interface Props {
  data: RichChunkModel[];
}

export default function RichContent(p: Props) {
  return (
    <div>
      {p.data.map((textChunk) => {
        return <RichChunk key={textChunk.name} chunk={textChunk} />;
      })}
    </div>
  );
}
