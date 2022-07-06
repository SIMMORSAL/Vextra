import React from "react";
import { css } from "@emotion/react";
import { Grid } from "@mui/material";
import Image from "next/image";
import { RichTextModel } from "../../data/models/rich-content/RichChunkModel";
import RichText from "./RichText";

interface Props {
  smallImageLeft?: string;
  shortText?: RichTextModel[];
  smallImageRight?: string;
}

export default function ShortImageBar(props: Props) {
  let available = 0;
  props.smallImageLeft && available++;
  props.shortText && props.shortText.length > 0 && available++;
  props.smallImageRight && available++;

  return (
    <Grid container>
      {props.smallImageLeft && (
        <Grid item xs={12} sm={12 / available}>
          <div
            css={css`
              width: 100%;
              height: 100%;
              min-height: 300px;
            `}
          >
            {/*<Image*/}
            {/*  // loader={() => props.imageBarLeft!}*/}
            {/*  src={props.imageBarLeft}*/}
            {/*  alt={""}*/}
            {/*  layout={"fill"}*/}
            {/*/>*/}

            <img
              src={props.smallImageLeft}
              alt={""}
              css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
              `}
            />
          </div>
        </Grid>
      )}
      {props.shortText && props.shortText.length > 0 && (
        <Grid item xs={12} sm={12 / available}>
          <div
            css={css`
              width: 100%;
              height: 100%;
              padding: 32px 32px;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <RichText texts={props.shortText} />
          </div>
        </Grid>
      )}
      {props.smallImageRight && (
        <Grid item xs={12} sm={12 / available}>
          <div
            css={css`
              width: 100%;
              height: 100%;
              min-height: 400px;
            `}
          >
            {/*<Image*/}
            {/*  // loader={() => props.imageBarRight!}*/}
            {/*  src={props.imageBarRight}*/}
            {/*  alt={""}*/}
            {/*  layout={"fill"}*/}
            {/*  width={"100%"}*/}
            {/*  height={"100%"}*/}
            {/*/>*/}
            <img
              src={props.smallImageRight}
              alt={""}
              css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
              `}
            />
          </div>
        </Grid>
      )}
    </Grid>
  );
}
