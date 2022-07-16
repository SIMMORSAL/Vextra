import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { RichImageModel } from "../../data/models/rich-chunk/RichChunkModel";
import { cacheImage } from "../../helpers/tools/tools";
import MarkDown from "./Markdown/Markdown";

interface Props {
  textColor: string;
  image: RichImageModel;
}

export default function RichImage(p: Props) {
  const refImageRoot = useRef();

  const [imageCached, setImageCached] = useState(false);
  const [scrollReached, setScrollReached] = useState(false);
  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);

  const listenToScroll = () => {
    const scroll = document.documentElement.scrollTop;
    const imagePosition = (refImageRoot.current as HTMLDivElement).offsetTop;
    if (scroll + window.innerHeight * 0.6 < imagePosition) setScrollReached(false);
    else setScrollReached(true);
  };

  useEffect(() => {
    cacheImage(p.image.path).then(() => {
      setImageCached(true);
    });

    // checking if on first frame scroll is reached
    if (p.image.animation?.animateOnScroll) {
      const scroll = document.documentElement.scrollTop;
      const imagePosition = (refImageRoot.current as HTMLDivElement).offsetTop;
      if (scroll + window.innerHeight * 0.57 < imagePosition)
        setScrollReached(false);
      else setScrollReached(true);
    }

    if (p.image.animation?.animateOnScroll)
      window.addEventListener("scroll", listenToScroll);
    else setScrollReached(true);

    return () => {
      if (p.image.animation?.animateOnScroll)
        window.removeEventListener("scroll", listenToScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setShouldAnimateIn(imageCached && scrollReached);
  }, [imageCached, scrollReached]);

  // * Animation setup
  const pAnimation = p.image.animation;
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

  return (
    <div
      ref={refImageRoot}
      css={css`
        width: 100%;
        height: 100%;
        max-width: 900px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={p.image.path}
        alt={p.image.path}
        css={css`
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: ${p.image.aspectRatio};
          opacity: ${shouldAnimateIn ? 1 : 0};
          transform: ${shouldAnimateIn ? "" : animateFrom};

          transition: 350ms ease;
          transition-property: opacity, transform;
        `}
      />
      {p.image.subText && p.image.subText.length !== 0 && (
        <MarkDown
          text={p.image.subText}
          style={css`
            color: ${p.textColor.length === 7 ? p.textColor + "cc" : p.textColor};
            padding: 0 32px;
            text-align: center;
            margin: 0;
          `}
        />
      )}
    </div>
  );
}
