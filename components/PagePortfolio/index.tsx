import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { headerHeight } from "../Header";
import { Grid } from "@mui/material";
import { getAllPortfolios } from "../../data/local/dataPortfoliosPage";
import PortfolioItem from "./PortfolioItem";
import { useRouter } from "next/router";
import { _AppContext } from "../../helpers/providers/provider_App";
import { getActiveTab } from "../../helpers/tools/tools";
import { Portfolio } from "../../data/models/local-data/portfolio";

interface Props {}

let awardCounts = 0;

export default function PagePortfolio(props: Props) {
  const router = useRouter();

  const { newTabSelected, setNewTabSelected } = useContext(_AppContext);
  const [isExitingPage, setIsExitingPage] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Portfolio | undefined>();

  const portfolioItems = getAllPortfolios();

  useEffect(() => {
    setNewTabSelected("portfolio");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (newTabSelected !== getActiveTab(router)) setIsExitingPage(true);
    else setIsExitingPage(false);
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
        padding: ${headerHeight}px 24px 24px;
        opacity: ${isExitingPage ? 0 : 1};
        margin-top: ${isExitingPage ? 12 : 0}px;

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
          if (value.awardImage) awardCounts++;

          return (
            <Grid
              key={value.name}
              item
              xs={
                index === 0 ||
                (index === portfolioItems.length - 1 &&
                  portfolioItems.length % 2 === 0)
                  ? 12
                  : 6
              }
              css={css`
                display: flex;
                justify-content: center;
              `}
            >
              <PortfolioItem
                portfolio={value}
                index={index}
                awardDelayMultiplier={awardCounts}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            </Grid>
          );
        })}
      </Grid>
      {/*<GalleryButton delay={portfolioItems.length * 150 + 200} />*/}
    </div>
  );
}
