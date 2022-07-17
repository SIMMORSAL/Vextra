import React from "react";
import { css } from "@emotion/react";
import { RichChunkModel } from "../../data/models/rich-chunk/RichChunkModel";
import RichText from "./RichText";
import RichImage from "./RichImage";
import { getPortfolio } from "../../data/local/dataPortfoliosPage";
import { backgroundWhite } from "../../res/colors";

interface Props {
  chunk: RichChunkModel;
}

export default function RichChunk(p: Props) {
  const textColor = p.chunk.textColor ? p.chunk.textColor : "#1e1e1e";
  const backgroundColor = p.chunk.backgroundColor
    ? p.chunk.backgroundColor
    : backgroundWhite;

  const bgImage = p.chunk.backgroundImage
    ? `url(${p.chunk.backgroundImage})`
    : p.chunk.gradient
    ? `linear-gradient(${p.chunk.gradientDegree ? p.chunk.gradientDegree : 25}deg,
        ${p.chunk.gradient.reduce((p, c) => p + ", " + c)}
      )`
    : "";

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
      {p.chunk.longTextsTop && p.chunk.longTextsTop.length > 0 && (
        <div
        // * This is the way to get one way chunk and test against it
        // css={css`
        //   background-color: ${p.chunk.longTextsTop[0].text ===
        //   getPortfolio("rich-content-handbook").pageContent[0].longTextsTop[0].text
        //     ? "red"
        //     : ""};
        // `}
        >
          <RichText texts={p.chunk.longTextsTop} />
        </div>
      )}
      {p.chunk.bigImage && (
        <RichImage image={p.chunk.bigImage} textColor={textColor} />
      )}
      {p.chunk.smallImage && (
        <div
          css={css`
            width: 100%;
            max-width: 450px;
            align-self: center;
            padding: 0 24px;
          `}
        >
          <RichImage image={p.chunk.smallImage} textColor={textColor} />
        </div>
      )}
      {/*{(p.chunk.imageBarLeft ||*/}
      {/*  p.chunk.textImageBar ||*/}
      {/*  p.chunk.imageBarRight) && (*/}
      {/*  // <div*/}
      {/*  //   css={css`*/}
      {/*  //     max-width: 900px;*/}
      {/*  //     //padding: 32px 16px;*/}
      {/*  //     margin: 0 auto;*/}
      {/*  //   `}*/}
      {/*  // >*/}
      {/*  <ShortImageBar*/}
      {/*    smallImageLeft={p.chunk.imageBarLeft}*/}
      {/*    shortText={p.chunk.textImageBar}*/}
      {/*    smallImageRight={p.chunk.imageBarRight}*/}
      {/*  />*/}
      {/*  // </div>*/}
      {/*)}*/}
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
