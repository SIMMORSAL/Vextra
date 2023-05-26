import { css } from "@emotion/react";
import { useContext, useEffect } from "react";
import { ContextFaucet } from "./Context";
import { headerHeight } from "../Header";

interface Props {
  // contentSize: number;
  initialAnimationDone: boolean;
}

const Faucet = (p: Props) => {
  const { faucetPosition, setFaucetPosition, faucetKeyFrames } =
    useContext(ContextFaucet);

  const onScroll = () => {
    console.log(faucetKeyFrames.length);
    // console.log(window.pageYOffset);
    // console.log(window.scrollY);
    // console.log(window.innerHeight);
    // faucetKeyFrames
    const currentCenter = window.scrollY + window.innerHeight / 2;

    for (let i = 0; i < faucetKeyFrames.length; i++) {
      // console.log(
      //   i,
      //   faucetKeyFrames[i].refPosition,
      //   currentCenter >= faucetKeyFrames[i].refPosition
      // );

      if (
        faucetKeyFrames.length > i + 1 &&
        currentCenter >= faucetKeyFrames[i].refPosition &&
        currentCenter < faucetKeyFrames[i + 1].refPosition
      ) {
        const normalizedOffsetToNextOne =
          (currentCenter - faucetKeyFrames[i].refPosition) /
          (faucetKeyFrames[i + 1].refPosition - faucetKeyFrames[i].refPosition);

        console.log(
          faucetKeyFrames[i].faucetPosition.zoom,
          "\n",
          faucetKeyFrames[i + 1].faucetPosition.zoom,
          "\n",
          currentCenter,
          "\n",
          normalizedOffsetToNextOne
        );

        setFaucetPosition({
          zoom:
            faucetKeyFrames[i].faucetPosition.zoom +
            (faucetKeyFrames[i + 1].faucetPosition.zoom -
              faucetKeyFrames[i].faucetPosition.zoom) *
              normalizedOffsetToNextOne,
          translateX:
            faucetKeyFrames[i].faucetPosition.translateX +
            (faucetKeyFrames[i + 1].faucetPosition.translateX -
              faucetKeyFrames[i].faucetPosition.translateX) *
              normalizedOffsetToNextOne,
          translateY:
            faucetKeyFrames[i].faucetPosition.translateY +
            (faucetKeyFrames[i + 1].faucetPosition.translateY -
              faucetKeyFrames[i].faucetPosition.translateY) *
              normalizedOffsetToNextOne,
        });

        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [faucetKeyFrames]);

  // useEffect(() => {
  //   if (p.contentSize && faucetKeyFrames.length !== 0) {
  //     p.
  //   }
  // }, [p.contentSize, faucetKeyFrames]);

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
      {/* {p.contentSize + headerHeight} */}
      <div
        css={css`
          width: 100vw;
          height: 100vh;
          scale: ${faucetPosition.zoom};
          translate: ${faucetPosition.translateX * 100 +
          "% " +
          faucetPosition.translateY * 100}%;

          transition: ${p.initialAnimationDone
            ? "ease-out 200ms"
            : "ease-in-out 1000ms"};
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
