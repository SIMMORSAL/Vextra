// noinspection DuplicatedCode

import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { RichTextModel } from "../../data/models/rich-chunk/RichChunkModel";
import MarkDown from "./Markdown/Markdown";
import { cacheImage, isColor } from "../../helpers/tools";

interface Props {
  texts: RichTextModel[];
}

export default function RichText(p: Props) {
  return (
    <div
      css={css`
        width: 100%;
        padding: 32px 16px;
        max-width: 900px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      `}
    >
      {p.texts.map((text, index) => {
        return <TextChunk key={index} text={text} />;
      })}
    </div>
  );
}

const scrollThreshold = 0.8; // of screen height
function TextChunk(p: { text: RichTextModel }) {
  const refTextRoot = useRef();

  // const [scrollReached, setScrollReached] = useState(false);
  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);

  const listenToScroll = () => {
    const scroll = document.documentElement.scrollTop;
    const txt = (refTextRoot.current as HTMLDivElement)?.offsetTop;
    if (scroll + window.innerHeight * scrollThreshold < txt)
      setShouldAnimateIn(false);
    else setShouldAnimateIn(true);
  };

  useEffect(() => {
    listenToScroll();

    if (p.text.animation?.animateOnScroll)
      window.addEventListener("scroll", listenToScroll);
    else setShouldAnimateIn(true);

    return () => {
      if (p.text.animation?.animateOnScroll)
        window.removeEventListener("scroll", listenToScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // * Animation setup
  const pAnimation = p.text.animation;
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

  const pShadow = p.text.shadow;
  const shadow = pShadow
    ? isColor(pShadow)
      ? `3px 4px 6px ${pShadow}`
      : pShadow
    : "";

  const style = css`
    text-align: ${p.text.align};
    user-select: ${p.text.userSelect ? p.text.userSelect : "none"};
    color: ${p.text.color ? p.text.color : ""};
    font-size: ${p.text.size ? p.text.size : ""};
    font-family: ${p.text.fontFamily ? p.text.fontFamily : ""};
    opacity: ${shouldAnimateIn ? 1 : 0};
    transform: ${shouldAnimateIn ? "" : animateFrom};
    padding: 0 ${p.text.align === "center" ? 32 : 0}px;
    text-shadow: ${shadow};

    transition: ${pAnimation?.duration ? pAnimation.duration : 350}ms ease;
    transition-property: opacity, transform;
  `;
  return (
    <div css={style} ref={refTextRoot}>
      <MarkDown text={p.text.text} />
    </div>
  );
}
