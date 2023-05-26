import { css } from "@emotion/react";
import { useContext, useState } from "react";
import { ContextFaucet } from "./Context";

const OnScreenController = () => {
  const { faucetPosition, setFaucetPosition, faucetKeyFrames } =
    useContext(ContextFaucet);
  const [jumpDistance, setJumpDistance] = useState(0.1);
  return (
    <div
      css={css`
        width: 100%;
        position: fixed;
        align-self: flex-end;
        left: 8px;
        bottom: 8px;
      `}
    >
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: row;
        `}
      >
        <p
          css={css`
            width: 100%;
            align-self: flex-end;
          `}
        >
          {/* {faucetKeyFrames.length !== 0 &&
            faucetKeyFrames[2].refMarker.current &&
            faucetKeyFrames[2].refMarker.current.offsetTop + ""} */}
        </p>
        <div
          css={css`
            width: 140px;
          `}
        >
          <button
            onClick={() => {
              setJumpDistance(
                jumpDistance === 0.01 ? 0.1 : jumpDistance === 0.1 ? 0.3 : 0.01
              );
            }}
          >
            dist: {jumpDistance}
          </button>
          <div>
            <button
              onClick={() =>
                setFaucetPosition({
                  ...faucetPosition,
                  zoom: faucetPosition.zoom + jumpDistance,
                })
              }
            >
              +
            </button>
            <button
              onClick={() =>
                setFaucetPosition({
                  ...faucetPosition,
                  zoom: faucetPosition.zoom - jumpDistance,
                })
              }
            >
              -
            </button>
            <span> z: {faucetPosition.zoom.toPrecision(2)}</span>
          </div>
          <div>
            <button
              onClick={() =>
                setFaucetPosition({
                  ...faucetPosition,
                  translateX: faucetPosition.translateX + jumpDistance,
                })
              }
            >
              +
            </button>
            <button
              onClick={() =>
                setFaucetPosition({
                  ...faucetPosition,
                  translateX: faucetPosition.translateX - jumpDistance,
                })
              }
            >
              -
            </button>
            <span> X: {faucetPosition.translateX.toPrecision(2)}</span>
          </div>
          <div>
            <button
              onClick={() =>
                setFaucetPosition({
                  ...faucetPosition,
                  translateY: faucetPosition.translateY + jumpDistance,
                })
              }
            >
              +
            </button>
            <button
              onClick={() =>
                setFaucetPosition({
                  ...faucetPosition,
                  translateY: faucetPosition.translateY - jumpDistance,
                })
              }
            >
              -
            </button>
            <span> Y: {faucetPosition.translateY.toPrecision(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnScreenController;
