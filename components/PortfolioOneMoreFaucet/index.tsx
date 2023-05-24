import { css } from "@emotion/react";
import Faucet from "./Faucet";
import { useContext } from "react";
import { ContextFaucet } from "./Context";
import FaucetController from "./FaucetController";

const PortfolioOneMoreFaucet = () => {
  const { faucetPosition, setFaucetPosition } = useContext(ContextFaucet);
  return (
    <div
      css={css`
        width: 100%;
        min-height: 100%;
        display: flex;
      `}
    >
      <Faucet />
      <FaucetController />
    </div>
  );
};

export default PortfolioOneMoreFaucet;
