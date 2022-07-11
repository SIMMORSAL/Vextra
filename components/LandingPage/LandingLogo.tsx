import React from "react";
import { css } from "@emotion/react";
import Image from "next/image";

interface Props {
  path: string;
  loading: boolean;
  onClick: () => void;
  selectedPage: string;
}

export default function LandingLogo(p: Props) {
  const noPageSelected = p.selectedPage === undefined;
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
          filter: ${p.loading
            ? "brightness(0) saturate(100%) invert(96%) sepia(97%) saturate(12%) hue-rotate(237deg) brightness(103%) contrast(103%)"
            : "brightness(0) saturate(100%) invert(0%) sepia(98%) saturate(9%) hue-rotate(344deg) brightness(102%) contrast(100%)"};

          transition: filter 1000ms ease;
        `}
      />
    </div>
  );
}
