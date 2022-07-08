/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { _AppContext } from "../../helpers/providers/provider_App";
import { cacheImage } from "../../tools/tools";
import { getGeneralData } from "../../data/local/_dataGeneral";

interface Props {
  justLoaded: boolean;
  selectedPage: string; // undefined | about-me | portfolio
  setSelectedPage: (page?: string) => void;
}

export default function HeaderLogo(p: Props) {
  const { shouldMoveToMain, setMoveToMain, setFadeOutContent, setFlashContent } =
    useContext(_AppContext);
  const [imageCached, setImageCached] = useState(false);

  const generalData = getGeneralData();

  useEffect(() => {
    cacheImage(generalData.logo).then(() => {
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
        <img
          src={generalData.logo}
          alt={"logo"}
          onClick={() => {
            p.setSelectedPage(undefined);
            setMoveToMain(true);
          }}
          css={css`
            cursor: pointer;
            width: 100%;

            transition: 200ms ease;

            //:hover {
            //  filter: invert(46%) sepia(38%) saturate(1830%) hue-rotate(150deg)
            //    brightness(89%) contrast(84%);
            //}
          `}
        />
      </div>
    </div>
  );
}
