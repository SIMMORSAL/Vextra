import React from "react";
import { css } from "@emotion/react";

interface Props {}

export default function oneMoreFaucet(props: Props) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        background-color: red;
      `}
    />
  );
}
