import { css } from "@emotion/react";

const Faucet = () => {
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
  );
};

export default Faucet;
