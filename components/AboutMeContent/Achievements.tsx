import React from "react";
import { css } from "@emotion/react";

interface Props {}

export default function Achievements(props: Props) {
  return (
    <div
      css={css`
        height: 100px;
        width: 40px;
      `}
    >
      <i className="fa-brands fa-behance" />
    </div>
  );
}
