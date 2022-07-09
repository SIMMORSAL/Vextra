import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { RichImageModel } from "../../data/models/RichChunkModel";
import { cacheImage } from "../../helpers/tools/tools";

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

    if (p.image.animateOnScroll) {
      const scroll = document.documentElement.scrollTop;
      const imagePosition = (refImageRoot.current as HTMLDivElement).offsetTop;
      if (scroll + window.innerHeight * 0.6 < imagePosition) setScrollReached(false);
      else setScrollReached(true);
    }

    if (p.image.animateOnScroll) window.addEventListener("scroll", listenToScroll);
    else setScrollReached(true);
    return () => {
      if (p.image.animateOnScroll)
        window.removeEventListener("scroll", listenToScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setShouldAnimateIn(imageCached && scrollReached);
  }, [imageCached, scrollReached]);

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
          opacity: ${shouldAnimateIn ? 1 : 0};

          transition: opacity 350ms ease;
        `}
      />
      {!imageCached && p.image.aspectRatio ? (
        <div
          css={css`
            width: 100%;
            aspect-ratio: ${p.image.aspectRatio};
          `}
        />
      ) : (
        <></>
      )}
      <p
        css={css`
          color: ${p.textColor.length === 7 ? p.textColor + "bb" : p.textColor};
          padding: 0 32px;
          text-align: center;
        `}
      >
        {p.image.subText}
      </p>
    </div>
  );
}
