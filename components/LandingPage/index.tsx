import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { backgroundBlack, backgroundWhite } from "../../res/colors";
import SecondPhase from "./SecondPhase";
import ThirdPhase from "./ThirdPhase";

interface Props {}

export default function LandingPage({}: Props) {
  const [loading, setLoading] = useState(true);
  const [isXs, setIsXs] = useState(false);
  const [beginAnimationPhase2, setBeginAnimationPhase2] = useState(false);
  const [beginAnimationPhase3, setBeginAnimationPhase3] = useState(false);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setIsXs(window.innerWidth < 600);
    window.addEventListener("resize", () => setIsXs(window.innerWidth < 600));

    // const animated = document.getElementById("icon");
    // console.log("11111  animated:  ", animated);
    // animated.addEventListener("animationend", () => {
    //   console.log("11111  onanimationend:  ");
    //   setBeginAnimationPhase2(true);
    // });
  }, []);

  useEffect(() => {
    setLoading(true);
    setBeginAnimationPhase2(false);
    setTimeout(() => {
      setLoading(false);
      setTimeout((args) => {
        setBeginAnimationPhase2(true);
      }, 1000);
    }, 700);
  }, [count]);

  return (
    <div
      // onClick={() => setCount(count + 1)}
      css={css`
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        background-color: ${loading ? backgroundBlack : backgroundWhite};

        transition: background-color 500ms ease;
      `}
    >
      <SecondPhase
        begin={beginAnimationPhase2}
        beginNextPhase={setBeginAnimationPhase3}
      />
      <div
        css={css`
          grid-row: 1;
          grid-column: 1;
          width: ${loading ? 80 : 30}%;
          margin-bottom: ${loading ? 0 : 10}%;

          transition: width 1000ms ease, margin-bottom 1000ms ease;
        `}
      >
        <Image
          // id={"icon"}
          src={require("../../res/images/logo_big.png")}
          alt={""}
          layout={"intrinsic"}
          css={css`
            filter: ${loading
              ? "brightness(0) saturate(100%) invert(96%) sepia(97%) saturate(12%) hue-rotate(237deg) brightness(103%) contrast(103%)"
              : "brightness(0) saturate(100%) invert(0%) sepia(98%) saturate(9%) hue-rotate(344deg) brightness(102%) contrast(100%)"};

            transition: filter 1000ms ease;
          `}
        />
      </div>
      <ThirdPhase begin={beginAnimationPhase3} />
    </div>
  );
}
