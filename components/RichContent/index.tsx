import React from "react";
import { css } from "@emotion/react";
import RichChunk from "./RichChunk";
import { RichContentModel } from "../../data/models/rich-content/RichContentModel";

interface Props {
  data: RichContentModel;
}

export default function RichContent(p: Props) {
  return (
    <div>
      {p.data.map((textChunk) => {
        return <RichChunk chunk={textChunk} />;
      })}
    </div>
  );
}
