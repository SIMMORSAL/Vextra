// noinspection DuplicatedCode

import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import ReactPlayer from "react-player";
import { RichVideoModel } from "../../data/models/rich-chunk/RichChunkModel";

interface Props {
  video: RichVideoModel;
}

const scrollThreshold = 0.57;
export default function RichVideo(p: Props) {
  const refVideoRoot = useRef();

  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);

  const listenToScroll = () => {
    const scroll = document.documentElement.scrollTop;
    const imagePosition = (refVideoRoot.current as HTMLDivElement).offsetTop;
    console.log(
      `11111  listenToScroll:  ${imagePosition}  ${scroll}  ${scrollThreshold}`
    );
    if (
      p.video.animation?.animateOnScroll &&
      scroll + window.innerHeight * scrollThreshold < imagePosition
    )
      setShouldAnimateIn(false);
    else setShouldAnimateIn(true);
  };

  useEffect(() => {
    // checking if on first frame scroll is reached
    if (p.video.animation?.animateOnScroll) {
      const scroll = document.documentElement.scrollTop;
      const imagePosition = (refVideoRoot.current as HTMLDivElement).offsetTop;
      if (scroll + window.innerHeight * scrollThreshold < imagePosition)
        setShouldAnimateIn(false);
      else setShouldAnimateIn(true);
    } else setShouldAnimateIn(true);

    window.addEventListener("scroll", listenToScroll);

    return () => {
      if (p.video.animation?.animateOnScroll)
        window.removeEventListener("scroll", listenToScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // * Animation setup
  const pAnimation = p.video.animation;
  const translateDistance = pAnimation?.translateDistance
    ? pAnimation.translateDistance
    : 25;

  const pFrom = pAnimation?.animateFrom;
  const animateFrom =
    pFrom && pFrom !== "none"
      ? `translateY(${
          shouldAnimateIn
            ? "0"
            : pFrom.startsWith("top")
            ? `-${translateDistance}vh`
            : pFrom.startsWith("bottom")
            ? `${translateDistance}vh`
            : "0"
        }) translateX(${
          shouldAnimateIn
            ? "0"
            : new RegExp(/right$/i).test(pFrom)
            ? `${translateDistance}vw`
            : new RegExp(/left$/i).test(pFrom)
            ? `-${translateDistance}vw`
            : "0"
        })`
      : "";

  console.log(`11111  RichVideo:  ${"TRIES LOADING"}`);
  return (
    <div
      ref={refVideoRoot}
      css={css`
        width: 100%;
        height: 100%;
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        aspect-ratio: ${p.video.aspectRatio ? p.video.aspectRatio : "16/9"};
        opacity: ${shouldAnimateIn ? 1 : 0};
        transform: ${shouldAnimateIn ? "" : animateFrom};

        transition: ${pAnimation?.duration ? pAnimation.duration : 350}ms ease;
        transition-property: opacity, transform;
      `}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <ReactPlayer
        url={p.video.path}
        playing={p.video.autoPlay}
        muted={p.video.autoPlay}
        controls={p.video.controls !== undefined ? p.video.controls : true}
        loop={p.video.loop}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
}
