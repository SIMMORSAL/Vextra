import { css } from "@emotion/react";
import Faucet from "./Faucet";
import { useContext, useRef, useState } from "react";
import { ContextFaucet } from "./Context";
import FaucetControlls from "./FaucetControlls";
import FaucetPositionMarker, { PositionMarker } from "./FaucetPositionMarker";
import { colorBackground } from "../../data/colors";

const PortfolioOneMoreFaucet = () => {
  const { faucetPosition, setFaucetPosition } = useContext(ContextFaucet);
  const [positionMarkers, setPositionMarkers] = useState<PositionMarker[]>([]);

  positionMarkers[5] = {
    faucetPosition: { translateX: 0, translateY: 0, zoom: 0 },
    locationInDocument: 8,
  };

  console.log(positionMarkers);

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
        <Faucet positionMarkers={positionMarkers} />
        <FaucetControlls />
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
          position={{ zoom: 1, translateX: 0, translateY: 0 }}
          onInfo={(info) => {
            positionMarkers[0] = info;
            setPositionMarkers(positionMarkers);
          }}
        />
        <div
          css={css`
            height: 400px;
            width: 200px;
            /* background-color: red; */
          `}
        />
        <FaucetPositionMarker
          position={{ zoom: 1.5, translateX: 0, translateY: -0.3 }}
          onInfo={(info) => {
            positionMarkers[1] = info;
            setPositionMarkers(positionMarkers);
          }}
        />
        <div
          css={css`
            height: 400px;
            width: 200px;
            /* background-color: red; */
          `}
        />
        <FaucetPositionMarker
          position={{ zoom: 1.5, translateX: 0, translateY: -0.3 }}
          onInfo={(info) => {
            positionMarkers[2] = info;
            setPositionMarkers(positionMarkers);
          }}
        />
      </div>
    </div>
  );
};

export default PortfolioOneMoreFaucet;
