import { MutableRefObject, useContext, useEffect, useRef } from "react";
import { FaucetPosition } from "./Faucet";
import { ContextFaucet } from "./Context";
import { css } from "@emotion/react";

// export interface PositionMarker {
//   faucetPosition: FaucetPosition;
// }

interface Props {
  // position: FaucetPosition;
  onRefReady: (ref: MutableRefObject<any>) => void;
}

const FaucetPositionMarker = (p: Props) => {
  // const { faucetKeyFrames, setFaucetKeyFrames } = useContext(ContextFaucet);
  const ref = useRef(null);

  useEffect(() => {
    // setPositionMarkerList([
    //   ...positionMarkerList,
    //   { faucetPosition: p.position, locationInDocument: ref.current.offsetTop },
    // ]);
    p.onRefReady(ref);
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
