import React from "react";
import { css } from "@emotion/react";
import { headerHeight } from "../Header";
import { Grid } from "@mui/material";
import Image from "next/image";
import {
  headerItemSelectFilter,
  itemOnWhiteFilter,
  itemOnWhiteFocusedFilter,
} from "../../res/colors";
import { getPortfolios } from "../../data/offlineData";
import PortfolioItem from "./PortfolioItem";

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
      <Grid
        container
        css={css`
          max-width: 900px;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        {getPortfolios().map((value, index) => {
          return (
            <Grid key={value.name} item xs={6} sm={6}>
              <PortfolioItem portfolio={value} index={index} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
