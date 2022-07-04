import React from "react";
import { css } from "@emotion/react";

interface Props {}

export default function one_more_faucet(props: Props) {
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
