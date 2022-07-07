import React from "react";
import { css } from "@emotion/react";
import { RichImageModel } from "../../data/models/rich-content/RichChunkModel";

interface Props {
  textColor: string;
  image: RichImageModel;
}

export default function RichImage(p: Props) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        max-width: 900px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={p.image.path}
        alt={p.image.path}
        css={css`
          width: 100%;
          height: 100%;
          object-fit: cover;
        `}
      />
      <p
        css={css`
          color: ${p.textColor.length === 7 ? p.textColor + "bb" : p.textColor};
          padding: 0 32px;
          text-align: center;
        `}
      >
        {p.image.subText}
      </p>
    </div>
  );
}
