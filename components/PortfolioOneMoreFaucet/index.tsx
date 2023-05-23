import { css } from "@emotion/react";
import Faucet from "./Faucet";
import { useContext } from "react";
import { ContextFaucet } from "./Context";

const PortfolioOneMoreFaucet = () => {
  const { setZoom } = useContext(ContextFaucet);
  setZoom(1.3);
  return (
    <div css={css``}>
      <Faucet />
    </div>
  );
};

export default PortfolioOneMoreFaucet;
