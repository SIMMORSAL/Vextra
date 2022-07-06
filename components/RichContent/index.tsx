import React from "react";
import { css } from "@emotion/react";
import RichChunk from "./RichChunk";

interface Props {
  data: ;
}

export default function RichContent(p: Props) {
  return (
    <div>
      {
        p.data.map(textChunk => {
          return <RichChunk chunk={textChunk}/>
        })
      }
    </div>
  )
}