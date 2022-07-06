import React from "react";
import { css } from "@emotion/react";
import { RichChunkModel } from "../../data/models/rich-content/RichChunkModel";
import RichText from "./RichText";
import ShortImageBar from "./ShortImageBar";

interface Props {
  chunk: RichChunkModel;
}

export default function RichChunk(props: Props) {
  console.log(
    `11111  ChunkShortMediaBar:  ${props.chunk.name}   ${JSON.stringify(
      props.chunk.textImageBar
    )}`
  );
  return (
    <div
      css={css`
        width: 100%;
        background-color: ${props.chunk.backgroundColor
          ? props.chunk.backgroundColor
          : "#ffffff"};
        color: ${props.chunk.textColor ? props.chunk.textColor : "#1e1e1e"};
      `}
    >
      {props.chunk.longTextTop && props.chunk.longTextTop.length > 0 && (
        <div
          css={css`
            padding: 32px 16px;
            max-width: 900px;
            margin: 0 auto;
          `}
        >
          <RichText texts={props.chunk.longTextTop} />
        </div>
      )}
      {props.chunk.bigImage && (
        <div
          css={css`
            width: 100%;
            height: 100%;
            min-height: 500px;
            max-width: 900px;
            margin: 0 auto;
          `}
        >
          <img
            src={props.chunk.bigImage}
            alt={""}
            css={css`
              width: 100%;
              height: 100%;
              object-fit: cover;
            `}
          />
        </div>
      )}
      {props.chunk.longTextMiddle && props.chunk.longTextMiddle.length > 0 && (
        <div
          css={css`
            padding: 32px 16px;
            max-width: 900px;
            margin: 0 auto;
          `}
        >
          <RichText texts={props.chunk.longTextMiddle} />
        </div>
      )}
      {(props.chunk.imageBarLeft ||
        props.chunk.textImageBar ||
        props.chunk.imageBarRight) && (
        <div
          css={css`
            max-width: 900px;
            //padding: 32px 16px;
            margin: 0 auto;
          `}
        >
          <ShortImageBar
            smallImageLeft={props.chunk.imageBarLeft}
            shortText={props.chunk.textImageBar}
            smallImageRight={props.chunk.imageBarRight}
          />
        </div>
      )}
      {props.chunk.longTextEnd && props.chunk.longTextEnd.length > 0 && (
        <div
          css={css`
            padding: 32px 16px;
            max-width: 900px;
            margin: 0 auto;
          `}
        >
          {" "}
          <RichText texts={props.chunk.longTextEnd} />
        </div>
      )}
    </div>
  );
}
