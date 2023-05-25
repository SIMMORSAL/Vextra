import { css } from "@emotion/react";
import Faucet from "./Faucet";
import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import { ContextFaucet } from "./Context";
import OnScreenController from "./OnScreenController";
import FaucetPositionMarker from "./FaucetPositionMarker";
import { getFaucetKeyframes } from "./DataFaucetKeyframes";

const PortfolioOneMoreFaucet = () => {
  const { setFaucetKeyFrames } = useContext(ContextFaucet);

  const contentRoot = useRef(null);

  const markerRefs = useRef<MutableRefObject<any>[]>([]);
  const keyframes = getFaucetKeyframes();

  useEffect(() => {
    if (markerRefs.current.length !== keyframes.length)
      throw "Keyframe and Marker counts don't match";

    setFaucetKeyFrames(
      markerRefs.current.map((v, i) => {
        return {
          faucetPosition: keyframes[i].faucetPosition,
          refMarker: v,
          refPosition: v.current.offsetTop,
        };
      })
    );
  }, []);

  return (
    <div
      css={css`
        width: 100%;
        min-height: 100%;
        display: grid;
      `}
    >
      <div
        css={css`
          grid-row: 1;
          grid-column: 1;
          width: 100%;
          height: 100%;
          display: flex;
        `}
      >
        <Faucet
        // contentSize={contentRoot.current?.offsetHeight}
        />
        <OnScreenController />
      </div>
      <div
        ref={contentRoot}
        css={css`
          grid-row: 1;
          grid-column: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
        `}
      >
        <FaucetPositionMarker
          // showOnUi
          onRefReady={(ref) => {
            markerRefs.current[0] = ref;
          }}
        />
        <div
          css={css`
            height: 200vh;
            width: 200px;
          `}
        />
        <FaucetPositionMarker
          onRefReady={(ref) => {
            markerRefs.current[1] = ref;
          }}
        />
        <div
          css={css`
            height: 300vh;
            width: 200px;
          `}
        />
        <FaucetPositionMarker
          onRefReady={(ref) => {
            markerRefs.current[2] = ref;
          }}
        />
        <div
          css={css`
            height: 200vh;
            width: 200px;
          `}
        />
        <FaucetPositionMarker
          onRefReady={(ref) => {
            markerRefs.current[3] = ref;
          }}
        />
      </div>
    </div>
  );
};

export default PortfolioOneMoreFaucet;
