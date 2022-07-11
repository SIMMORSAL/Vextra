import React, { useContext, useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import RichContent from "../RichContent";
import { headerHeight } from "../Header";
import { useRouter } from "next/router";
import { Portfolio } from "../../data/models/local-data/portfolio";
import { getPortfolio } from "../../data/local/dataPortfoliosPage";
import { _AppContext } from "../../helpers/providers/provider_App";

interface Props {}

export default function PagePortfolioItem(p: Props) {
  const router = useRouter();
  const { pageChangeRequested } = useContext(_AppContext);
  const initialPageChangeRequest = useRef(pageChangeRequested);

  const [isExitingPage, setIsExitingPage] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const linkId = router.query.PortfolioID as string;
  const dataPortfolio: Portfolio = getPortfolio(linkId);

  useEffect(() => {
    setIsInitialRender(false);
  }, []);

  useEffect(() => {
    if (initialPageChangeRequest.current !== pageChangeRequested) {
      setIsExitingPage(true);
    } else {
      setIsExitingPage(false);
    }
  }, [pageChangeRequested]);

  // css={css`
  //       width: 100%;
  //       height: 100%;
  //       min-height: calc(100vh - 2px);
  //       //border: 1px solid #484848;
  //       font-weight: bold;
  //       text-align: center;
  //       display: flex;
  //       flex-direction: column;
  //       justify-content: center;
  //       align-items: center;
  //       padding: ${headerHeight}px 24px 24px;
  //       opacity: ${isExitingPage ? 0 : 1};
  //       margin-top: ${isExitingPage ? 12 : 0}px;
  //
  //       transition: 100ms ease;
  //       transition-property: opacity, margin-top;
  //     `}
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
        margin-top: ${isExitingPage ? 12 : 0}px;

        transition: ${isExitingPage ? 100 : 200}ms ease;
        transition-property: opacity, margin-top;
      `}
    >
      {dataPortfolio && <RichContent data={dataPortfolio.pageContent} />}
    </div>
  );
}
