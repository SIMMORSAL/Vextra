import React, { useContext, useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { _AppContext } from "../../helpers/providers/provider_App";
import { colorLogoSplash, colorSplash } from "../../data/colors";
import Image from "next/image";
import { useRouter } from "next/router";
import { hexToCSSFilter } from "hex-to-css-filter";

interface Props {}

export default function _MoveToMain(props: Props) {
  const { generalData, shouldMoveToMain } = useContext(_AppContext);
  const [beginAnimation, setBeginAnimation] = useState(false);
  const router = useRouter();

  const timeouts = useRef([]);
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeouts.current.forEach((value) => clearTimeout(value));
    };
  }, []);

  useEffect(() => {
    if (shouldMoveToMain) {
      timeouts.current.push(
        setTimeout(() => {
          setBeginAnimation(true);
          timeouts.current.push(
            setTimeout(() => {
              // noinspection JSIgnoredPromiseFromCall
              router.push("/");
            }, 800)
          );
        }, 50)
      );
    } else {
      setBeginAnimation(false);
    }
  }, [shouldMoveToMain, router]);
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        z-index: 9999;
        align-items: center;
        justify-content: center;
        display: ${shouldMoveToMain ? "flex" : "none"};
        background-color: ${beginAnimation ? colorSplash : "transparent"};

        transition: 100ms ease;
        transition-property: background-color;
      `}
    >
      <div
        css={css`
          grid-row: 1;
          grid-column: 1;
          width: ${beginAnimation ? 80 : 50}%;
          //z-index: 99;
          // margin-bottom: ${beginAnimation ? 0 : 20}vh;
          transition: 500ms ease;
          transition-property: width, margin-bottom, opacity;
          transition-delay: 100ms;
        `}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={generalData.logoBig}
          alt={"logo"}
          css={css`
            width: 100%;
            opacity: ${beginAnimation ? 1 : 0};
            filter: ${generalData.applyColorOnLogo
              ? hexToCSSFilter(colorLogoSplash).filter
              : ""};

            transition: opacity 500ms ease;
            transition-delay: 300ms;
          `}
        />
      </div>
    </div>
  );
}
