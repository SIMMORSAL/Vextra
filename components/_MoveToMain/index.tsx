import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { _AppContext } from "../../data/providers/provider_App";
import { backgroundBlack, backgroundWhite } from "../../res/colors";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {}

export default function _MoveToMain(props: Props) {
  const { moveToMain } = useContext(_AppContext);
  const [beginAnimation, setBeginAnimation] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (moveToMain) {
      setTimeout(() => {
        setBeginAnimation(true);
        setTimeout(() => {
          router.push("/");
        }, 800);
      }, 50);
    } else {
      setBeginAnimation(false);
    }
  }, [moveToMain, router]);
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
        display: ${moveToMain ? "flex" : "none"};
        background-color: ${beginAnimation ? backgroundBlack : "transparent"};

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
          margin-bottom: ${beginAnimation ? 0 : 60}vh;
          transition: 500ms ease;
          transition-property: width, margin-bottom, opacity;
          transition-delay: 100ms;
        `}
      >
        <Image
          // id={"icon"}
          src={require("../../res/images/logo_big.png")}
          alt={""}
          layout={"intrinsic"}
          css={css`
            opacity: ${beginAnimation ? 1 : 0};
            filter: brightness(0) saturate(100%) invert(96%) sepia(97%) saturate(12%)
              hue-rotate(237deg) brightness(103%) contrast(103%);

            transition: opacity 500ms ease;
            transition-delay: 300ms;
          `}
        />
      </div>
    </div>
  );
}
