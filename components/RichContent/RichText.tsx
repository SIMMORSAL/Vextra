import React from "react";
import { css } from "@emotion/react";
import { RichTextModel } from "../../data/models/RichTextModel";

interface Props {
  texts: RichTextModel[];
}

export default function RichText(props: Props) {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      {props.texts.map((text) => {
        const style = css`
          text-align: ${text.data.textAlign};
        `;
        if (text.type === "header") {
          return (
            <div
              css={style}
              dangerouslySetInnerHTML={{
                __html: `<h${text.data.level} style="text-align:${
                  text.data.textAlign
                }; font-size: ${1 + (5 - text.data.level!) * 0.5}em">${
                  text.data.text
                }</h${text.data.level}>`,
              }}
            />
          );
        } else {
          return (
            <p
              css={style}
              dangerouslySetInnerHTML={{
                __html: `<div style="text-align:${text.data.textAlign}">${text.data.text}</div>`,
              }}
            />
          );
        }
      })}
    </div>
  );
}
