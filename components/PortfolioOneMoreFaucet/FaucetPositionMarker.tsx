import { MutableRefObject, useEffect, useRef } from "react";
import { css } from "@emotion/react";

interface Props {
  showOnUi?: boolean;
  onRefReady: (ref: MutableRefObject<any>) => void;
}

const FaucetPositionMarker = (p: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    p.onRefReady(ref);
  }, []);
  return (
    <div
      ref={ref}
      css={css`
        ${p.showOnUi
          ? `
            height: 10px;
            width: 100%;
            background-color: green;
        `
          : ""}
      `}
    ></div>
  );
};

export default FaucetPositionMarker;
