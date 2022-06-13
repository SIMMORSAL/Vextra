import React from "react";
import { css } from "@emotion/react";
import { headerHeight } from "../Header";
import { Grid } from "@mui/material";

interface Props {}

export default function PortfolioContent(props: Props) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        min-height: calc(100vh - 2px);
        //border: 1px solid #484848;
        font-weight: bold;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: ${headerHeight}px 24px 0px;
      `}
    >
      <Grid container>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
    </div>
  );
}
