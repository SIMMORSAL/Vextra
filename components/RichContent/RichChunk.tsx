import React from "react";
import { css } from "@emotion/react";
import { RichChunkModel } from "../../data/models/rich-content/RichChunkModel";
import RichText from "./RichText";
import ShortImageBar from "./ShortImageBar";
import RichImage from "./RichImage";

interface Props {
  chunk: RichChunkModel;
}

export default function RichChunk(props: Props) {
  const textColor = props.chunk.textColor ? props.chunk.textColor : "#1e1e1e";
  const backgroundColor = props.chunk.backgroundColor
    ? props.chunk.backgroundColor
    : "#ffffff";

  return (
    <div
      css={css`
        width: 100%;
        color: ${textColor};
        background-color: ${backgroundColor};
      `}
    >
      {props.chunk.longTextTop && props.chunk.longTextTop.length > 0 && (
        <RichText texts={props.chunk.longTextTop} />
      )}
      {props.chunk.bigImage && (
        <RichImage image={props.chunk.bigImage} textColor={textColor} />
      )}
      {props.chunk.longTextMiddle && props.chunk.longTextMiddle.length > 0 && (
        <RichText texts={props.chunk.longTextMiddle} />
      )}
      {(props.chunk.imageBarLeft ||
        props.chunk.textImageBar ||
        props.chunk.imageBarRight) && (
        // <div
        //   css={css`
        //     max-width: 900px;
        //     //padding: 32px 16px;
        //     margin: 0 auto;
        //   `}
        // >
        <ShortImageBar
          smallImageLeft={props.chunk.imageBarLeft}
          shortText={props.chunk.textImageBar}
          smallImageRight={props.chunk.imageBarRight}
        />
        // </div>
      )}
      {props.chunk.longTextEnd && props.chunk.longTextEnd.length > 0 && (
        <RichText texts={props.chunk.longTextEnd} />
      )}
    </div>
  );
}
