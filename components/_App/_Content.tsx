import { useContext, useEffect, useState } from "react";
import { _AppContext } from "../../helpers/providers/provider_App";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { headerHeight } from "../Header";
import { getSubTab } from "../../helpers/tools/tools";

export function Content({ Component, pageProps }) {
  const router = useRouter();
  const { flashContent, setFlashContent } = useContext(_AppContext);

  const tabRootIsShowing = getSubTab(router) === undefined;

  useEffect(() => {
    if (flashContent)
      setTimeout(() => {
        setFlashContent(false);
      }, 200);
  }, [flashContent, setFlashContent]);

  return (
    <div
      css={css`
        width: 100%;
        height: calc(100% - ${headerHeight}px);
        transform: scale(${flashContent ? 0.95 : 1});
        border: ${tabRootIsShowing
          ? flashContent
            ? "1px solid #484848"
            : "1px solid transparent"
          : ""};

        transition: 200ms ease;
        transition-property: opacity, transform, border-bottom-color,
          border-bottom-width, border-right-color, border-right-width,
          border-left-color, border-left-width, border-top-color, border-top-width;
      `}
    >
      <Component {...pageProps} />
    </div>
  );
}
