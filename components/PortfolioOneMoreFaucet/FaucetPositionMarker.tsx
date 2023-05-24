import { useContext, useEffect, useRef } from "react";
import { FaucetPosition } from "./Faucet";
import { ContextFaucet } from "./Context";
import { css } from "@emotion/react";

export interface PositionMarker {
  locationInDocument: number;
  faucetPosition: FaucetPosition;
}

interface Props {
  position: FaucetPosition;
  onInfo: (info: PositionMarker) => void;
}

const FaucetPositionMarker = (p: Props) => {
  const { positionMarkerList, setPositionMarkerList } = useContext(ContextFaucet);
  const ref = useRef(null);

  useEffect(() => {
    // setPositionMarkerList([
    //   ...positionMarkerList,
    //   { faucetPosition: p.position, locationInDocument: ref.current.offsetTop },
    // ]);
    p.onInfo({
      faucetPosition: p.position,
      locationInDocument: ref.current.offsetTop,
    });
  }, []);
  return (
    <div
      ref={ref}
      css={css`
        /* height: 20px;
        width: 100%;
        background-color: green; */
      `}
    ></div>
  );
};

export default FaucetPositionMarker;
