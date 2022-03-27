import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { backgroundBlack, backgroundWhite } from "../../res/colors";

interface Props {}

export default function LandingPage({}: Props) {
  const [loading, setLoading] = useState(true);
  const [isXs, setIsXs] = useState(false);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    setTimeout((args) => {
      setLoading(false);
    }, 700);
  }, [count]);

  useEffect(() => {
    setIsXs(window.innerWidth < 600);
    window.addEventListener("resize", () => setIsXs(window.innerWidth < 600));
  }, []);

  return (
    <div
      onClick={() => setCount(count + 1)}
      css={css`
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        background-color: ${loading ? backgroundBlack : backgroundWhite};

        transition: background-color 500ms ease;
      `}
    >
      <div
        css={css`
          grid-row: 1;
          grid-column: 1;
          width: ${loading ? 80 : 30}%;
          margin-bottom: ${loading ? 0 : 20}%;

          transition: width 500ms ease, margin-bottom 500ms ease;
        `}
      >
        <Image
          src={require("../../res/images/logo_big.png")}
          alt={""}
          layout={"intrinsic"}
          css={css`
            filter: ${loading
              ? "brightness(0) saturate(100%) invert(92%) sepia(16%) saturate(0%) hue-rotate(176deg) brightness(103%) contrast(102%)"
              : "brightness(0) saturate(100%) invert(0%) sepia(56%) saturate(7220%) hue-rotate(165deg) brightness(60%) contrast(83%)"};

            transition: filter 500ms ease;
          `}
        />
      </div>
      <div
        css={css`
          width: 100%;
          //height: 100%;
          grid-row: 1;
          grid-column: 1;
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 30vw;
            //position: fixed;
            background-color: rgba(255, 0, 0, 0.37);
          `}
        />
      </div>
    </div>
  );
}
