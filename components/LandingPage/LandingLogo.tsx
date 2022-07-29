import React, { useContext } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { hexToCSSFilter } from "hex-to-css-filter";
import { colorLogoNormal, colorLogoSplash } from "../../data/colors";
import { _AppContext } from "../../helpers/providers/provider_App";

interface Props {
  path: string;
  loading: boolean;
  onClick: () => void;
  selectedPage: string;
}

export default function LandingLogo(p: Props) {
  const noPageSelected = p.selectedPage === undefined;
  const { generalData } = useContext(_AppContext);

  return (
    <div
      css={css`
        grid-row: 1;
        grid-column: 1;
        width: ${p.loading ? 80 : noPageSelected ? 30 : 20}%;
        margin-bottom: ${p.loading ? 0 : noPageSelected ? "10%" : "60vh"};
        z-index: 99;
        opacity: ${noPageSelected ? 1 : 0};
        aspect-ratio: 2500/1000;

        transition: ${noPageSelected ? 1000 : 200}ms ease;
        transition-property: width, margin-bottom, opacity;
      `}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        onClick={p.onClick}
        src={p.path}
        alt={"logo"}
        css={css`
          width: 100%;
          filter: ${generalData.applyColorToLogo
            ? p.loading
              ? hexToCSSFilter(colorLogoSplash).filter
              : hexToCSSFilter(colorLogoNormal).filter
            : ""};

          transition: filter 1000ms ease;
        `}
      />
    </div>
  );
}
