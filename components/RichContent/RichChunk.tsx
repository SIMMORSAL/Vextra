import React from "react";
import { css } from "@emotion/react";
import { RichChunkModel } from "../../data/models/rich-chunk/RichChunkModel";
import RichText from "./RichText";
import RichImage from "./RichImage";
import { getPortfolio } from "../../data/local/dataPortfoliosPage";

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
        background-image: url("https://img.freepik.com/premium-vector/cartoon-landscape-mountains-bright-morning-with-trees-mountain_288411-1415.jpg?w=2000");
        //background-repeat: space;
        background-size: cover;
        //background-attachment: fixed;
        background-position: center;
      `}
    >
      {props.chunk.longTextsTop && props.chunk.longTextsTop.length > 0 && (
        <div
        // * This is the way to get one way chunk and test against it
        // css={css`
        //   background-color: ${props.chunk.longTextsTop[0].text ===
        //   getPortfolio("rich-content-handbook").pageContent[0].longTextsTop[0].text
        //     ? "red"
        //     : ""};
        // `}
        >
          <RichText texts={props.chunk.longTextsTop} />
        </div>
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
