import React, { useContext, useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import RichContent from "../RichContent";
import { headerHeight } from "../Header";
import { useRouter } from "next/router";
import { Portfolio } from "../../data/models/local-data/portfolio";
import { getPortfolio } from "../../data/local/dataPortfoliosPage";
import { _AppContext } from "../../helpers/providers/provider_App";
import {
  colorBackground,
  colorDefaultRichContentText,
  colorHeaderItem,
} from "../../data/colors";

interface Props {}

export default function PagePortfolioItem(p: Props) {
  const router = useRouter();
  const {
    tabChangeRequested,
    portfolioBgColor,
    setPortfolioBgColor,
    setPortfolioHeaderItemColor,
  } = useContext(_AppContext);
  const initialPageChangeRequest = useRef(tabChangeRequested);

  const [isExitingPage, setIsExitingPage] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

  // const dataPortfolio: Portfolio = getPortfolio(linkId);
  const [dataPortfolio, setDataPortfolio] = useState<Portfolio | undefined>();

  useEffect(() => {
    setIsInitialRender(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const linkId = router.query.PortfolioID as string;
    setDataPortfolio(getPortfolio(linkId));
  }, [router.query]);

  useEffect(() => {
    if (dataPortfolio) {
      setPortfolioBgColor(
        dataPortfolio.backgroundColor
          ? dataPortfolio.backgroundColor
          : colorBackground
      );
      setPortfolioHeaderItemColor(
        dataPortfolio.headerItemsColor ? dataPortfolio.headerItemsColor : ""
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataPortfolio]);

  useEffect(() => {
    if (initialPageChangeRequest.current !== tabChangeRequested) {
      setIsExitingPage(true);

      setPortfolioBgColor("");
      setPortfolioHeaderItemColor("");
    } else {
      setIsExitingPage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabChangeRequested]);

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        min-height: calc(100vh - 2px);
        display: flex;
        flex-direction: column;
        //justify-content: center;
        align-items: center;
        padding-top: ${headerHeight}px;
        opacity: ${isExitingPage || isInitialRender ? 0 : 1};
        background-color: ${portfolioBgColor};

        transition: ${isExitingPage ? 100 : 200}ms ease;
        transition-property: opacity;
      `}
    >
      {dataPortfolio && (
        <RichContent
          data={dataPortfolio.pageRichContent}
          backgroundColor={dataPortfolio.backgroundColor}
          textColor={
            dataPortfolio.textColor
              ? dataPortfolio.textColor
              : colorDefaultRichContentText
          }
        />
      )}
    </div>
  );
}
