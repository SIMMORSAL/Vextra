import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Portfolio } from "../../data/models/portfolio";
import Image from "next/image";
import { backgroundWhite, headerItemSelectFilter } from "../../res/colors";

interface Props {
  portfolio: Portfolio;
  index: number;
  awardDelayMultiplier: number;
}

export default function PortfolioItem(props: Props) {
  const [beginFadeIn, setBeginFadeIn] = useState(false);
  const [fadeInAward, setFadeInAward] = useState(false);
  const [makeAwardSmall, setMakeAwardSmall] = useState(false);

  const padding = props.portfolio.isBackgroundDark
    ? `0px ${makeAwardSmall ? 70 : 12}% ${makeAwardSmall ? 0 : 25}% ${
        makeAwardSmall ? 4 : 12
      }%`
    : `0px ${makeAwardSmall ? 80 : 27}% ${makeAwardSmall ? 0 : 12}% ${
        makeAwardSmall ? 4 : 27
      }%`;

  const awardBoxShadow = props.portfolio.isBackgroundDark
    ? // Gensai
      makeAwardSmall
      ? "0px 0px 5px 1px #ffffff44"
      : `12px 12px 85px 16px #ffffff66`
    : makeAwardSmall
    ? "0px 0px 5px 1px #00000055"
    : `12px 12px 85px 16px #00000088`;

  const backgroundColor =
    props.portfolio.award === "a_design_award.gif" ? "transparent" : "#8fc31f";

  useEffect(() => {
    setTimeout(() => {
      setBeginFadeIn(true);
      if (props.portfolio.award) {
        setTimeout(() => {
          setFadeInAward(true);
          setTimeout(() => {
            setMakeAwardSmall(true);
            // setTimeout(() => {
            //   setIsAwardInteractive(true);
            // }, 700);
          }, 1500);
        }, 2000 * props.awardDelayMultiplier);
      }
    }, 50);
  }, []);
  return (
    <div
      css={css`
        margin: 16px 8px;
        opacity: ${beginFadeIn ? 1 : 0};
        transition: 400ms ease;
        transition-property: opacity;
        transition-delay: ${props.index}50ms;
        display: grid;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          grid-row: 1;
          grid-column: 1;
        `}
      >
        <Image
          // src={require("/res/images/portfolio/ab.png")}
          src={require(`/res/images/portfolio/${props.portfolio.image}`)}
          alt={"behance"}
          layout={"intrinsic"}
          css={css`
            padding: 0 4px;
            transform: translateY(${beginFadeIn ? 0 : 15}%)
              rotate3d(${beginFadeIn ? 0 : 1}, 0, 0, 45deg);

            transition: 700ms ease;
            transition-property: transform;
            transition-delay: ${props.index}50ms;
          `}
        />
      </div>
      {props.portfolio.award ? (
        <div
          css={css`
            width: 100%;
            grid-row: 1;
            grid-column: 1;
            z-index: 2;
            justify-self: start;
            align-self: end;
            opacity: ${fadeInAward ? 1 : 0};
            padding: ${padding};
            filter: blur(${fadeInAward ? 0 : 30}px);

            transition: 700ms ease;
            transition-property: opacity, width, filter, padding-bottom, padding-top,
              padding-left, padding-right, bottom;
          `}
        >
          <div
            css={css`
              margin-bottom: ${makeAwardSmall ? 30 : 0}%;
              box-shadow: ${awardBoxShadow};
              //vertical-align: bottom;

              display: flex;

              transition: 700ms ease;
              transition-property: box-shadow, margin-bottom, transform;
              // background-color: ${backgroundColor};
            `}
          >
            <Image
              src={require(`/res/images/portfolio/${props.portfolio.award}`)}
              alt={"behance"}
              layout={"intrinsic"}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
