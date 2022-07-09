/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Portfolio } from "../../data/models/local-data/portfolio";
import Image from "next/image";
import { _AppContext } from "../../helpers/providers/provider_App";
import { useRouter } from "next/router";
import { cacheAndGetImage, cacheImage } from "../../helpers/tools/tools";

interface Props {
  portfolio: Portfolio;
  index: number;
  awardDelayMultiplier: number;
  selectedItem?: Portfolio;
  setSelectedItem: (portfolio?: Portfolio) => void;
}

export default function PortfolioItem(p: Props) {
  const router = useRouter();
  const [beginFadeIn, setBeginFadeIn] = useState(false);
  const [fadeInAward, setFadeInAward] = useState(false);
  const [makeAwardSmall, setMakeAwardSmall] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const [isImageCached, setIsImageCached] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

  function beginAnimation() {
    setBeginFadeIn(true);
    if (p.portfolio.award) {
      setTimeout(() => {
        setFadeInAward(true);
        setTimeout(() => {
          setMakeAwardSmall(true);
        }, 1500);
      }, 2000 * p.awardDelayMultiplier);
    }
  }

  useEffect(() => {
    setIsInitialRender(false);
    cacheImage(p.portfolio.image).then(() => {
      setIsImageCached(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isInitialRender && isImageCached) beginAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialRender, isImageCached]);

  const onClicked = () => {
    p.setSelectedItem(p.portfolio);
    setTimeout(() => {
      router.push(`/portfolio/${p.portfolio.linkId}`);
    }, 200);
  };

  // setTimeout(() => {
  // }, 50);

  // * if your awards are not in the shape of square, you may need to
  // * uncomment below code and make changes to the values
  const awardPadding =
    p.portfolio.name === "umbrella"
      ? `0px ${makeAwardSmall ? 70 : 12}% ${makeAwardSmall ? 0 : 25}% ${
          makeAwardSmall ? 4 : 12
        }%`
      : `0px ${makeAwardSmall ? 80 : 27}% ${makeAwardSmall ? 0 : 12}% ${
          makeAwardSmall ? 4 : 27
        }%`;

  const awardBoxShadow = p.portfolio.isBackgroundDark
    ? makeAwardSmall
      ? ".5px 1px 5px 1px #ffffff66"
      : `4px 12px 85px 16px #ffffff44`
    : makeAwardSmall
    ? ".5px 1px 5px 1px #00000066"
    : `4px 12px 85px 16px #00000044`;

  return (
    <div
      css={css`
        transform: scale(
          ${p.selectedItem === undefined
            ? 1
            : p.selectedItem?.linkId === p.portfolio.linkId
            ? 1.2
            : 0.9}
        );
        opacity: ${p.selectedItem === undefined ? 1 : 0};

        transition: ${p.selectedItem?.linkId === p.portfolio.linkId ? 200 : 100}ms
          ease;
        transition-property: opacity, transform;
      `}
    >
      <div
        css={css`
          transform: translateY(${beginFadeIn ? 0 : 15}%)
            //rotate3d(${beginFadeIn ? 2 : 1}, 0, 0, 75deg);
            rotateX(${beginFadeIn ? 0 : 15}deg) rotateY(${beginFadeIn ? 0 : -20}deg);
          //rotateY(45deg);

          transition: 700ms ease;
          transition-property: transform;
          transition-delay: ${p.index}50ms;
        `}
      >
        <div
          css={css`
            margin: 16px 8px;
            opacity: ${beginFadeIn ? 1 : 0};
            width: 100%;
            max-width: 400px;

            transition: 400ms ease;
            transition-property: opacity;
            transition-delay: ${p.index}50ms;
            display: grid;
          `}
        >
          <div
            onClick={onClicked}
            css={css`
              grid-row: 1;
              grid-column: 1;
              width: calc(100% - 8px);
              height: calc(100% - 4px);
              left: 4px;
              position: relative;
              overflow: hidden;
            `}
          >
            <img
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              // src={require(`/public/images/portfolio/${p.portfolio.image}`)}
              src={p.portfolio.image}
              alt={"behance"}
              loading={"eager"}
              // layout={"fill"}
              // quality={100}
              css={css`
                width: 100%;
                overflow: hidden;
                cursor: pointer;

                transform: scale(${isHovering ? 1.1 : 1});

                transition: 400ms ease;
                transition-property: transform;
              `}
            />
          </div>
          {p.portfolio.award ? (
            <div
              onClick={onClicked}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              css={css`
                width: 100%;
                grid-row: 1;
                grid-column: 1;
                z-index: 2;
                justify-self: start;
                align-self: end;
                opacity: ${fadeInAward ? 1 : 0};
                padding: ${awardPadding};
                filter: blur(${fadeInAward ? 0 : 30}px);
                cursor: pointer;

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
                {/*  // src={require(`/res/images/portfolio/${p.portfolio.award}`)}*/}
                {/*  src={p.portfolio.award}*/}
                {/*  alt={"behance"}*/}
                {/*  layout={"fill"}*/}
                {/*  loading={"lazy"}*/}
                {/*  quality={100}*/}
                {/*/>*/}
                <img
                  src={p.portfolio.award}
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
    </div>
  );
}
