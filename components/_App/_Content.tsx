import { useContext, useEffect, useState } from "react";
import { _AppContext } from "../../helpers/providers/provider_App";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { headerHeight } from "../Header";
import { getSubTab } from "../../helpers/tools/tools";
import { colorBackground } from "../../data/colors";

export function Content({ Component, pageProps }) {
  const router = useRouter();
  const { flashContent, setFlashContent, portfolioBgColor } =
    useContext(_AppContext);

  const tabRootIsShowing = getSubTab(router) === undefined;

  useEffect(() => {
    if (flashContent)
      setTimeout(() => {
        setFlashContent(false);
      }, 300);
  }, [flashContent, setFlashContent]);

  console.log(`11111  Content:  ${portfolioBgColor}`);

  return (
    <div
      css={css`
        width: 100%;
        height: calc(100% - ${headerHeight}px);
        transform: scale(${flashContent ? 0.95 : 1});
        border: ${tabRootIsShowing
          ? portfolioBgColor !== ""
            ? ""
            : flashContent
            ? "1px solid #484848"
            : `1px solid ${
                portfolioBgColor === "" ? colorBackground : portfolioBgColor
              }`
          : ""};

        transition: 300ms ease;
        transition-property: opacity, transform, border-bottom-color,
          border-bottom-width, border-right-color, border-right-width,
          border-left-color, border-left-width, border-top-color, border-top-width;
      `}
    >
      <div
        css={css`
          background-color: ${portfolioBgColor === ""
            ? colorBackground
            : portfolioBgColor};

          transition: background-color ${portfolioBgColor === "" ? 1000 : 300}ms ease;
        `}
      >
        <Component {...pageProps} />
      </div>
    </div>
  );
}
