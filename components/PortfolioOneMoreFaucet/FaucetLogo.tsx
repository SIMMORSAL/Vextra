import { css } from "@emotion/react";

interface Props {
  animateIn: boolean;
}

const FaucetLogo = (p: Props) => {
  return (
    <div
      css={css`
        width: 50%;
        display: flex;
        flex-direction: row;
        align-self: flex-end;
      `}
    >
      <img
        alt="logo"
        src={"/images/portfolio/one-more-faucet/faucet-logo.png"}
        css={css`
          width: 30vw;
          max-width: 300px;
          object-fit: contain;
          align-self: center;
          left: 20vw;
          opacity: ${p.animateIn ? 1 : 0};
          translate: ${p.animateIn ? 0 : 15}vw;

          transition: 1200ms ease-in-out;
          transition-delay: 300ms;
          transition-property: opacity, translate;
        `}
      />
    </div>
  );
};

export default FaucetLogo;
