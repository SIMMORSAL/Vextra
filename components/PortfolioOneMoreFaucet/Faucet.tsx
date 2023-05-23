import { css } from "@emotion/react";
import { useContext } from "react";
import { ContextFaucet } from "./Context";

const Faucet = () => {
  const { zoom } = useContext(ContextFaucet);

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
          width: ${100 * zoom}vw;
          height: ${100 * zoom}vh;

          transition: height ease 500ms;
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
