import { css, keyframes } from "@emotion/react";
import Faucet from "./Faucet";
import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import { ContextFaucet } from "./Context";
import OnScreenController from "./OnScreenController";
import FaucetPositionMarker from "./FaucetPositionMarker";
import { getFaucetKeyframes } from "./DataFaucetKeyframes";

const PortfolioOneMoreFaucet = () => {
  const { faucetPosition, setFaucetPosition, setFaucetKeyFrames } =
    useContext(ContextFaucet);
  // const [positionMarkers, setPositionMarkers] = useState<PositionMarker[]>([]);

  const contentRoot = useRef(null);

  const markerRefs = useRef<MutableRefObject<any>[]>([]);
  const keyframes = getFaucetKeyframes();

  useEffect(() => {
    console.log(4444444444444444);
    console.log(markerRefs.current);

    if (markerRefs.current.length !== keyframes.length)
      throw "Keyframe and Marker counts don't match";

    setFaucetKeyFrames(
      markerRefs.current.map((v, i) => {
        return { faucetPosition: keyframes[i].faucetPosition, refMarker: v };
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
        <Faucet />
        <OnScreenController />
      </div>
      <div
        css={css`
          grid-row: 1;
          grid-column: 1;
          width: 100%;
          min-height: 100%;
          display: flex;
          flex-direction: column;
        `}
      >
        <FaucetPositionMarker
          onRefReady={(ref) => {
            markerRefs.current[0] = ref;
          }}
        />
        <div
          css={css`
            height: 400px;
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
            height: 400px;
            width: 200px;
          `}
        />
        <FaucetPositionMarker
          onRefReady={(ref) => {
            markerRefs.current[2] = ref;
          }}
        />
      </div>
    </div>
  );
};

export default PortfolioOneMoreFaucet;
