import { css } from "@emotion/react";
import { useContext } from "react";
import { ContextFaucet } from "./Context";

export interface FaucetPosition {
  zoom: number;
  // visibleWIdth: number;
  // visibleHeight: number;
  translateX: number;
  translateY: number;
}

const Faucet = () => {
  const { faucetPosition } = useContext(ContextFaucet);

  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          width: 100vw;
          height: 100vh;
          scale: ${faucetPosition.zoom};
          translate: ${faucetPosition.translateX * 100 +
          "% " +
          faucetPosition.translateY * 100}%;

          transition: ease 500ms;
          transition-property: scale, translate;
        `}
      >
        <img
          alt="faucet"
          src="/images/portfolio/one-more-faucet/faucet.png"
          css={css`
            width: 100%;
            height: 100%;
            object-fit: contain;
          `}
        />
      </div>
    </div>
  );
};

export default Faucet;
