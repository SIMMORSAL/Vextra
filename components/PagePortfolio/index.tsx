import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { headerHeight } from "../Header";
import { Grid } from "@mui/material";
import { getPortfolios } from "../../data/local/dataPortfolios";
import PortfolioItem from "./PortfolioItem";
import { useRouter } from "next/router";
import { _AppContext } from "../../data/providers/provider_App";
import { getActiveTab } from "../../tools/tools";

interface Props {}

let awardCounts = 0;

export default function PagePortfolio(props: Props) {
  const router = useRouter();

  const { newTabSelected } = useContext(_AppContext);
  const [fadeOut, setFadeOut] = useState(false);

  const portfolioItems = getPortfolios();

  useEffect(() => {
    if (newTabSelected !== getActiveTab(router)) setFadeOut(true);
    else setFadeOut(false);
  }, [newTabSelected, router]);

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
        padding: ${headerHeight}px 24px 20%;
        opacity: ${fadeOut ? 0 : 1};
        margin-top: ${fadeOut ? 12 : 0}px;

        transition: 100ms ease;
        transition-property: opacity, margin-top;
      `}
    >
      <Grid
        container
        css={css`
          max-width: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        {`${(awardCounts = 0).toString().slice(0, 0)}`}
        {portfolioItems.map((value, index) => {
          if (value.award) awardCounts++;

          return (
            <Grid
              key={value.name}
              item
              xs={index === 0 && portfolioItems.length % 2 === 1 ? 12 : 6}
              css={css`
                display: flex;
                justify-content: center;
              `}
            >
              <PortfolioItem
                portfolio={value}
                index={index}
                awardDelayMultiplier={awardCounts}
              />
            </Grid>
          );
        })}
      </Grid>
      {/*<GalleryButton delay={portfolioItems.length * 150 + 200} />*/}
    </div>
  );
}
