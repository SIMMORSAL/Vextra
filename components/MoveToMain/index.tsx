import React, { useContext } from "react";
import { css } from "@emotion/react";
import { _AppContext } from "../../data/providers/provider_App";
import { backgroundBlack, backgroundWhite } from "../../res/colors";

interface Props {}

export default function MoveToMain(props: Props) {
  const { moveToMain } = useContext(_AppContext);
  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: 9999;
        display: ${moveToMain ? "flex" : "none"};
        background-color: ${moveToMain ? backgroundBlack : "transparent"};
      `}
    />
  );
}
