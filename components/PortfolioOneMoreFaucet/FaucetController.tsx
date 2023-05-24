import { css } from "@emotion/react";
import { useContext, useState } from "react";
import { ContextFaucet } from "./Context";

const FaucetController = () => {
  const { faucetPosition, setFaucetPosition } = useContext(ContextFaucet);
  const [jumpDistance, setJumpDistance] = useState(0.1);
  return (
    <div
      css={css`
        position: fixed;
        align-self: flex-end;
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
  );
};

export default FaucetController;
