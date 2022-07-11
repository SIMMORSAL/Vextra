import React from "react";
import { css } from "@emotion/react";
import { RichChunkModel } from "../../data/models/RichChunkModel";
import RichText from "./RichText";
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
        display: flex;
        flex-direction: column;
      `}
    >
      {props.chunk.longTexts && props.chunk.longTexts.length > 0 && (
        <RichText texts={props.chunk.longTexts} />
      )}
      {props.chunk.bigImage && (
        <RichImage image={props.chunk.bigImage} textColor={textColor} />
      )}
      {props.chunk.smallImage && (
        <div
          css={css`
            width: 100%;
            max-width: 450px;
            align-self: center;
            padding: 0 24px;
          `}
        >
          <RichImage image={props.chunk.smallImage} textColor={textColor} />
        </div>
      )}
      {/*{(props.chunk.imageBarLeft ||*/}
      {/*  props.chunk.textImageBar ||*/}
      {/*  props.chunk.imageBarRight) && (*/}
      {/*  // <div*/}
      {/*  //   css={css`*/}
      {/*  //     max-width: 900px;*/}
      {/*  //     //padding: 32px 16px;*/}
      {/*  //     margin: 0 auto;*/}
      {/*  //   `}*/}
      {/*  // >*/}
      {/*  <ShortImageBar*/}
      {/*    smallImageLeft={props.chunk.imageBarLeft}*/}
      {/*    shortText={props.chunk.textImageBar}*/}
      {/*    smallImageRight={props.chunk.imageBarRight}*/}
      {/*  />*/}
      {/*  // </div>*/}
      {/*)}*/}
      {props.chunk.freeSpace && (
        <div
          css={css`
            height: ${props.chunk.freeSpace};
          `}
        />
      )}
    </div>
  );
}
