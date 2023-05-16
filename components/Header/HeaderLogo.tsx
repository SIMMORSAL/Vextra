/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { _AppContext } from "../../helpers/providers/provider_App";
import { cacheImage } from "../../helpers/tools";
import { hexToCSSFilter } from "hex-to-css-filter";
import { colorLogoNormal } from "../../data/colors";

interface Props {
  color: string;
  justLoaded: boolean;
  selectedPage: string; // undefined | about-me | portfolio
  setSelectedPage: (page?: string) => void;
}

export default function HeaderLogo(p: Props) {
  const { generalData, shouldMoveToMain, setMoveToMain } = useContext(_AppContext);
  const [imageCached, setImageCached] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    cacheImage(generalData.logoSmall).then(() => {
      setImageCached(true);
    });
    cacheImage(generalData.logoBig);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      css={css`
        opacity: ${p.justLoaded ? 0 : !imageCached ? 0 : 1};

        transition: 900ms ease;
        transition-property: opacity;
        transition-delay: 100ms;
      `}
    >
      <div
        css={css`
          width: ${isMouseOver ? 80 : 70}px;
          height: min-content;
          margin-top: 20px;
          margin-left: 8px;
          margin-right: 8px;
          opacity: ${shouldMoveToMain ? 0 : 1};
          transform: scale(${shouldMoveToMain ? 1.3 : 1});

          transition: 100ms ease;
          transition-property: width, transform, opacity;
        `}
      >
        <div
          css={css`
            display: grid;
            align-items: center;
          `}
        >
          <img
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            src={generalData.logoSmall}
            alt={"logo"}
            onClick={() => {
              p.setSelectedPage(undefined);
              setMoveToMain(true);
            }}
            css={css`
              grid-row: 1;
              grid-column: 1;
              cursor: pointer;
              width: 100%;
              height: 27px;
              object-fit: contain;
              opacity: ${isMouseOver ? 0 : 1};
              transform: translateX(${isMouseOver ? -5 : 0}px);
              filter: ${generalData.applyColorToLogo
                ? hexToCSSFilter(p.color ? p.color : colorLogoNormal).filter
                : ""};

              transition: ${isMouseOver ? 300 : 200}ms ease;
            `}
          />
          <img
            src={generalData.logoBig}
            alt={"logo"}
            onClick={() => {
              p.setSelectedPage(undefined);
              setMoveToMain(true);
            }}
            css={css`
              grid-row: 1;
              grid-column: 1;
              pointer-events: none;
              cursor: pointer;
              width: 100%;
              height: 27px;
              object-fit: contain;
              opacity: ${isMouseOver ? 1 : 0};
              transform: translateX(${isMouseOver ? 0 : 5}px);
              filter: ${generalData.applyColorToLogo
                ? hexToCSSFilter(p.color ? p.color : colorLogoNormal).filter
                : ""};

              transition: ${isMouseOver ? 300 : 200}ms ease;
            `}
          />
        </div>
      </div>
    </div>
  );
}
