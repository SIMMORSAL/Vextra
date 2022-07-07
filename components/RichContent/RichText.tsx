import React from "react";
import { css } from "@emotion/react";
import ReactMarkdown from "react-markdown";
import { RichTextModel } from "../../data/models/rich-content/RichChunkModel";

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
        //background-color: red;
      `}
    >
      {props.texts.map((text) => {
        const style = css`
          text-align: ${text.textAlign};
        `;
        // return text.text;
        return (
          <ReactMarkdown key={"asdf"} css={style}>
            {text.text}
          </ReactMarkdown>
        );
        // if (text.type === "header") {
        //   return (
        //     <div
        //       css={style}
        //       dangerouslySetInnerHTML={{
        //         __html: `<h${text.data.level} style="text-align:${
        //           text.data.textAlign
        //         }; font-size: ${1 + (5 - text.data.level!) * 0.5}em">${
        //           text.data.text
        //         }</h${text.data.level}>`,
        //       }}
        //     />
        //   );
        // } else {
        //   return (
        //     <p
        //       css={style}
        //       dangerouslySetInnerHTML={{
        //         __html: `<div style="text-align:${text.data.textAlign}">${text.data.text}</div>`,
        //       }}
        //     />
        //   );
        // }
      })}
    </div>
  );
}
