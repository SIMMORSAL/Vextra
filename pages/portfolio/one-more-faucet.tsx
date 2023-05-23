import React from "react";
import { css } from "@emotion/react";
import PagePortfolioItem from "../../components/PagePortfolioItem";
import PortfolioOneMoreFaucet from "../../components/PortfolioOneMoreFaucet";
import FaucetProvider from "../../components/PortfolioOneMoreFaucet/Context";

interface Props {}

export default function PortfolioOneMore(props: Props) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100vh;
      `}
    >
      <PagePortfolioItem>
        <FaucetProvider>
          <PortfolioOneMoreFaucet />
        </FaucetProvider>
      </PagePortfolioItem>
    </div>
  );
}
