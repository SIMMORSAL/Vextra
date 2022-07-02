/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Portfolio } from "../../data/models/portfolio";
import Image from "next/image";

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
    ? makeAwardSmall
      ? ".5px 1px 5px 1px #ffffff66"
      : `4px 12px 85px 16px #ffffff44`
    : makeAwardSmall
    ? ".5px 1px 5px 1px #00000066"
    : `4px 12px 85px 16px #00000044`;

  // * Begin animation
  setTimeout(() => {
    setBeginFadeIn(true);
    if (props.portfolio.award) {
      setTimeout(() => {
        setFadeInAward(true);
        setTimeout(() => {
          setMakeAwardSmall(true);
        }, 1500);
      }, 2000 * props.awardDelayMultiplier);
    }
  }, 50);

  return (
    <div
      css={css`
        transform: translateY(${beginFadeIn ? 0 : 15}%)
          //rotate3d(${beginFadeIn ? 2 : 1}, 0, 0, 75deg);
          rotateX(${beginFadeIn ? 0 : 15}deg) rotateY(${beginFadeIn ? 0 : -20}deg);
        //rotateY(45deg);

        transition: 700ms ease;
        transition-property: transform;
        transition-delay: ${props.index}50ms;
      `}
    >
      <div
        css={css`
          margin: 16px 8px;
          opacity: ${beginFadeIn ? 1 : 0};
          width: 100%;
          max-width: 400px;
          //aspect-ratio: 1 / 1;
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
            position: relative;
          `}
        >
          <img
            // src={require(`/public/images/portfolio/${props.portfolio.image}`)}
            src={props.portfolio.image}
            alt={"behance"}
            loading={"eager"}
            // layout={"fill"}
            // quality={100}
            css={css`
              width: 100%;
              padding: 0 4px;
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
              transition-property: opacity, width, filter, padding-bottom,
                padding-top, padding-left, padding-right, bottom;
            `}
          >
            <div
              css={css`
                margin-bottom: ${makeAwardSmall ? 30 : 0}%;
                box-shadow: ${awardBoxShadow};
                //vertical-align: bottom;
                position: relative;
                width: 100%;
                //aspect-ratio: 1/1;

                display: flex;

                transition: 700ms ease;
                transition-property: box-shadow, margin-bottom, transform;
              `}
            >
              {/*<Image*/}
              {/*  // src={require(`/res/images/portfolio/${props.portfolio.award}`)}*/}
              {/*  src={props.portfolio.award}*/}
              {/*  alt={"behance"}*/}
              {/*  layout={"fill"}*/}
              {/*  loading={"lazy"}*/}
              {/*  quality={100}*/}
              {/*/>*/}
              <img
                src={props.portfolio.award}
                width={"100%"}
                loading={"eager"}
                alt={""}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
