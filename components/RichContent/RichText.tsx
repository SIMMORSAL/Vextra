import React from "react";
import { css } from "@emotion/react";
import { RichTextModel } from "../../data/models/RichChunkModel";
import MarkDown from "./Markdown";

interface Props {
  texts: RichTextModel[];
}

export default function RichText(props: Props) {
  return (
    <div
      css={css`
        width: 100%;
        padding: 32px 16px;
        max-width: 900px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      `}
    >
      {props.texts.map((text, index) => {
        const style = css`
          text-align: ${text.textAlign};
          target: "_blank";
        `;
        return <MarkDown key={index} text={text.text} />;
      })}
    </div>
  );
}
