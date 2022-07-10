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

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
