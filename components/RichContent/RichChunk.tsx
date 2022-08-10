import React from "react";
import { css } from "@emotion/react";
import {
  RichChunkModel,
  RichTextModel,
} from "../../data/models/rich-chunk/RichChunkModel";
import RichText from "./RichText";
import RichImage from "./RichImage";
import { getPortfolio } from "../../data/local/dataPortfoliosPage";
import { colorBackground } from "../../data/colors";
import RichVideo from "./RichVideo";
import MediaBar from "./MediaBar";

interface Props {
  chunk: RichChunkModel;
  backgroundColor: string;
  textColor: string;
}

export default function RichChunk(p: Props) {
  const textColor = p.chunk.textColor ? p.chunk.textColor : p.textColor;

  const bgImage = p.chunk.backgroundImage
    ? `url(${p.chunk.backgroundImage})`
    : p.chunk.gradient
    ? `linear-gradient(${p.chunk.gradientDegree ? p.chunk.gradientDegree : 165}deg,
        ${p.chunk.gradient.reduce((p, c) => p + ", " + c)}
      )`
    : "";

  const backgroundColor = !bgImage.startsWith("linear-gradient")
    ? p.chunk.backgroundColor
      ? p.chunk.backgroundColor
      : p.backgroundColor
    : "#ffffff";

  return (
    <div
      css={css`
        width: 100%;
        color: ${textColor};
        min-height: ${p.chunk.minHeight};
        background-color: ${backgroundColor};
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-image: ${bgImage};
        background-size: cover;
        background-position: center;
      `}
    >
      {p.chunk.freeSpaceTop && (
        <div
          css={css`
            height: ${p.chunk.freeSpaceTop};
          `}
        />
      )}
      {p.chunk.textsTop && (
        <div
        // * This is one way to get a chunk and test it
        // css={css`
        //   background-color: ${p.chunk.textsTop[0].texts ===
        //   getPortfolio("rich-content-handbook").pageContent[0].textsTop[0].texts
        //     ? "red"
        //     : ""};
        // `}
        >
          <RichText texts={p.chunk.textsTop} />
        </div>
      )}
      {p.chunk.bigImage && (
        <RichImage image={p.chunk.bigImage} textColor={textColor} />
      )}
      {p.chunk.smallImage && (
        <div
          css={css`
            width: 100%;
            max-width: 1100px;
            margin: 0 auto;
            display: flex;
            justify-content: ${p.chunk.smallImage.align
              ? p.chunk.smallImage.align
              : "center"};
          `}
        >
          <div
            css={css`
              width: 100%;
              max-width: 500px;
              padding: 0 16px;
            `}
          >
            <RichImage image={p.chunk.smallImage} textColor={textColor} />
          </div>
        </div>
      )}
      {p.chunk.bigVideo && <RichVideo video={p.chunk.bigVideo} />}
      {p.chunk.smallVideo && (
        <div
          css={css`
            max-width: 1100px;
            margin: 0 auto;
            display: flex;
            justify-content: ${p.chunk.smallVideo.align
              ? p.chunk.smallVideo.align
              : "center"};
          `}
        >
          <div
            css={css`
              width: 100%;
              max-width: 500px;
              padding: 0 16px;
            `}
          >
            <RichVideo video={p.chunk.smallVideo} />
          </div>
        </div>
      )}
      {p.chunk.freeSpaceMiddle && (
        <div
          css={css`
            height: ${p.chunk.freeSpaceMiddle};
          `}
        />
      )}
      {p.chunk.mediaBar && (
        <MediaBar mediaBar={p.chunk.mediaBar} textColor={textColor} />
      )}
      {p.chunk.textsBottom && p.chunk.textsBottom.length > 0 && (
        <div
        // * This is the way to get one way chunk and test against it
        // css={css`
        //   background-color: ${p.chunk.textsTop[0].texts ===
        //   getPortfolio("rich-content-handbook").pageContent[0].textsTop[0].texts
        //     ? "red"
        //     : ""};
        // `}
        >
          <RichText texts={p.chunk.textsBottom} />
        </div>
      )}
      {p.chunk.freeSpaceBottom && (
        <div
          css={css`
            height: ${p.chunk.freeSpaceBottom};
          `}
        />
      )}
    </div>
  );
}
