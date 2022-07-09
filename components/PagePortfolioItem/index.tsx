import React from "react";
import { css } from "@emotion/react";
import RichContent from "../RichContent";
import { RichChunkModel } from "../../data/models/RichChunkModel";
import { headerHeight } from "../Header";
import { getDataProject1 } from "../../data/local/portfolio/getDataProject1";
import { useRouter } from "next/router";
import { getSubTab } from "../../tools/tools";
import { Portfolio } from "../../data/models/local-data/portfolio";
import { getPortfolio } from "../../data/local/dataPortfoliosPage";

interface Props {}

export default function PagePortfolioItem(p: Props) {
  const router = useRouter();

  const linkId = router.query.PortfolioID as string;
  const dataPortfolio: Portfolio = getPortfolio(linkId);

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
      `}
    >
      {dataPortfolio && <RichContent data={dataPortfolio.pageContent} />}
    </div>
  );
}
