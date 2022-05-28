import React from "react";
import { css } from "@emotion/react";

interface Props {}

export default function LandingHeaderButton(props: Props) {
  return (
    <p
    //   onClick={() => pagesClickable && setSelectedPage("portfolio")}
    //   css={css`
    //           cursor: ${pagesClickable ? "pointer" : "default"};
    //           margin: 0;
    //           color: ${selectedPage === "portfolio"
    //     ? headerItemSelect
    //     : textOnWhite};
    //           transform: ${selectedPage === undefined
    //     ? "none"
    //     : "translateY(-15vh) translateX(-4vw)"};
    //           opacity: ${selectedPage === undefined ? 1 : 0};
    //
    //           transition: 200ms ease;
    //           transition-property: color, text-shadow, transform, opacity,
    //             font-weight, font-size, margin-top;
    //
    //           :hover {
    //             color: ${headerItemSelect};
    //             text-shadow: 0 0 12px ${headerItemSelect}40;
    //             font-size: 1.05em;
    //             margin-top: 6px;
    //           }
    //         `}
    >
      Portfolio
    </p>
  );
}
