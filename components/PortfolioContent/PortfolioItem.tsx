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
  useEffect(() => {
    setTimeout(() => {
      setBeginFadeIn(true);
      if (props.portfolio.award) {
        console.log(`11111  sadfasdf:  ${props.awardDelayMultiplier}`);
        setTimeout(() => {
          setFadeInAward(true);
          setTimeout(() => {
            setMakeAwardSmall(true);
          }, 1500);
        }, 1500 * props.awardDelayMultiplier);
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
            height: 100%;
            grid-row: 1;
            grid-column: 1;
            z-index: 1;
            background-color: ${fadeInAward
              ? makeAwardSmall
                ? "transparent"
                : `${backgroundWhite}99`
              : "transparent"};

            transition: 500ms ease;
            transition-property: background-color;
          `}
        />
      ) : (
        <></>
      )}
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
            padding: 0 ${makeAwardSmall ? 80 : 27}% ${makeAwardSmall ? 2 : 12}%
              ${makeAwardSmall ? 4 : 27}%;
            filter: blur(${fadeInAward ? 0 : 30}px);

            transition: 700ms ease;
            transition-property: opacity, width, filter, padding-bottom, padding-top,
              padding-left, padding-right;
          `}
        >
          <Image
            // src={require("/res/images/portfolio/ab.png")}
            src={require(`/res/images/portfolio/${props.portfolio.award}`)}
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
      ) : (
        <></>
      )}
    </div>
  );
}
