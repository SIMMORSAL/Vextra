import React from "react";
import { css } from "@emotion/react";
import { Grid } from "@mui/material";
import {
  MediaBarModel,
  RichTextModel,
} from "../../data/models/rich-chunk/RichChunkModel";
import RichText from "./RichText";
import RichImage from "./RichImage";
import RichVideo from "./RichVideo";

interface Props {
  mediaBar: MediaBarModel;
  textColor: string;
}

export default function MediaBar(p: Props) {
  let availableRows = 0;
  (p.mediaBar.leftVideo || p.mediaBar.leftImage) && availableRows++;
  p.mediaBar.texts && p.mediaBar.texts.length > 0 && availableRows++;
  (p.mediaBar.rightVideo || p.mediaBar.rightImage) && availableRows++;

  return (
    <Grid
      container
      css={css`
        //padding: 32px 16px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 1200px;
      `}
    >
      {(p.mediaBar.leftVideo || p.mediaBar.leftImage) && (
        <Grid
          item
          xs={12}
          sm={12 / availableRows}
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <div
            css={css`
              max-width: 600px;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            `}
          >
            {p.mediaBar.leftVideo && <RichVideo video={p.mediaBar.leftVideo} />}
            {p.mediaBar.leftImage && (
              <RichImage image={p.mediaBar.leftImage} textColor={p.textColor} />
            )}
          </div>
        </Grid>
      )}
      {p.mediaBar.texts && p.mediaBar.texts.length > 0 && (
        <Grid
          item
          xs={12}
          sm={12 / availableRows}
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <div
            css={css`
              max-width: 600px;
              width: 100%;
              height: 100%;
              padding: 32px 32px;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <RichText texts={p.mediaBar.texts} />
          </div>
        </Grid>
      )}
      {(p.mediaBar.rightVideo || p.mediaBar.rightImage) && (
        <Grid
          item
          xs={12}
          sm={12 / availableRows}
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <div
            css={css`
              max-width: 600px;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            `}
          >
            {p.mediaBar.rightVideo && <RichVideo video={p.mediaBar.rightVideo} />}
            {p.mediaBar.rightImage && (
              <RichImage image={p.mediaBar.rightImage} textColor={p.textColor} />
            )}
          </div>
        </Grid>
      )}
    </Grid>
  );
}
