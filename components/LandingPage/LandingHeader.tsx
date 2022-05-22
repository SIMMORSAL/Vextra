import React from "react";
import { css } from "@emotion/react";

interface Props {
  selectedPage?: string; // undefined | aboutMe | portfolio
}

export default function LandingHeader(props: Props) {
  return (
    <div
      css={css`
        grid-row: 1;
        grid-column: 1;
        width: 100%;
        height: 100px;
        align-self: start;
      `}
    />
  );
}
