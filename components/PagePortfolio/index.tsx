import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { headerHeight } from "../Header";
import { Grid } from "@mui/material";
import { getAllPortfolios } from "../../data/local/dataPortfoliosPage";
import PortfolioItem from "./PortfolioItem";
import { useRouter } from "next/router";
import { _AppContext } from "../../helpers/providers/provider_App";
import { getActiveTab } from "../../helpers/tools";
import { Portfolio } from "../../data/models/local-data/portfolio";
import { colorBackground } from "../../data/colors";

interface Props {}

export default function PagePortfolio(props: Props) {
  const router = useRouter();
  const portfolioItems = getAllPortfolios();

  const {
    newTabSelected,
    setNewTabSelected,
    setPortfolioBgColor,
    setPortfolioHeaderItemColor,
  } = useContext(_AppContext);
  const [isExitingPage, setIsExitingPage] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Portfolio | undefined>();

  useEffect(() => {
    setNewTabSelected("portfolio");
    setPortfolioBgColor("");
    setPortfolioHeaderItemColor("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (newTabSelected !== getActiveTab(router)) setIsExitingPage(true);
    else setIsExitingPage(false);
  }, [newTabSelected, router]);

  let awardCounts = 0;
  let smallsSinceLastBig = 0;

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        min-height: calc(100vh - 2px);
        padding: ${headerHeight}px 24px 24px;
        //border: 1px solid #484848;
        font-weight: bold;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
        {portfolioItems.map((value, index) => {
          if (value.awardImage) awardCounts++;

          if (index === 0 || value.isBig) smallsSinceLastBig = 0;
          else smallsSinceLastBig++;

          const xsSize =
            index === 0
              ? 12
              : value.isBig
              ? 12
              : index === portfolioItems.length - 1 && smallsSinceLastBig % 2 === 1
              ? 7.3
              : 6;

          return (
            <Grid
              key={value.name}
              item
              xs={xsSize}
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
