/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { _AppContext } from "../../helpers/providers/provider_App";
import { cacheImage } from "../../helpers/tools/tools";
import { getGeneralData } from "../../data/local/_dataGeneral";
import { headerHeight } from "./index";

interface Props {
  justLoaded: boolean;
  selectedPage: string; // undefined | about-me | portfolio
  setSelectedPage: (page?: string) => void;
  showDev: boolean;
}

export default function HeaderLogo(p: Props) {
  const { shouldMoveToMain, setMoveToMain, setFadeOutContent, setFlashContent } =
    useContext(_AppContext);
  const [imageCached, setImageCached] = useState(false);

  const _generalData = getGeneralData();

  useEffect(() => {
    cacheImage(_generalData.logo).then(() => {
      setImageCached(true);
    });
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
          width: 70px;
          margin-top: 20px;
          margin-left: 8px;
          margin-right: 8px;
          opacity: ${shouldMoveToMain ? 0 : 1};
          transform: scale(${shouldMoveToMain ? 1.3 : 1});

          transition: 100ms ease;
          transition-property: width, transform, opacity;

          :hover {
            width: 80px;
          }
        `}
      >
        <div
          css={css`
            display: grid;
            align-items: center;
          `}
        >
          <img
            src={_generalData.logo}
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
              opacity: ${p.showDev ? 0 : 1};

              transition: 200ms ease;
            `}
          />
          <a
            href={"https://github.com/simmorsal"}
            target={"_blank"}
            rel={"noreferrer"}
            css={css`
              grid-row: 1;
              grid-column: 1;
              cursor: pointer;
              transform: translateY(${p.showDev ? 0 : -headerHeight}px);
              transition: 600ms ease;
            `}
          >
            <img
              src={"https://avatars.githubusercontent.com/u/24822099"}
              alt={"SIMMORSAL"}
              css={css`
                opacity: ${p.showDev ? 1 : 0};
                filter: blur(${p.showDev ? 0 : 8}px);
                width: 100%;
                padding: 0 12%;

                transition: 600ms ease;
                transition-delay: ${p.showDev ? 300 : 0}ms;
              `}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
