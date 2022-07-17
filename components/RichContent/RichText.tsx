import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { RichTextModel } from "../../data/models/rich-chunk/RichChunkModel";
import MarkDown from "./Markdown/Markdown";
import { cacheImage } from "../../helpers/tools/tools";

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
        const style = css`
          text-align: ${text.align};
          user-select: ${text.userSelect ? text.userSelect : "none"};
        `;
        return <TextChunk key={index} text={text} />;
      })}
    </div>
  );
}

const scrollThreshold = 0.8;
function TextChunk(p: { text: RichTextModel }) {
  const refTextRoot = useRef();

  // const [scrollReached, setScrollReached] = useState(false);
  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);

  const listenToScroll = () => {
    const scroll = document.documentElement.scrollTop;
    const txt = (refTextRoot.current as HTMLDivElement).offsetTop;
    if (scroll + window.innerHeight * scrollThreshold < txt)
      setShouldAnimateIn(false);
    else setShouldAnimateIn(true);
  };

  useEffect(() => {
    // checking if on first frame scroll is reached
    if (p.text.animation?.animateOnScroll) {
      const scroll = document.documentElement.scrollTop;
      const imagePosition = (refTextRoot.current as HTMLDivElement).offsetTop;
      if (scroll + window.innerHeight * scrollThreshold < imagePosition)
        setShouldAnimateIn(false);
      else setShouldAnimateIn(true);
    }

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

  const style = css`
    text-align: ${p.text.align};
    user-select: ${p.text.userSelect ? p.text.userSelect : "none"};
    color: ${p.text.color ? p.text.color : ""};
    font-size: ${p.text.size ? p.text.size : ""};
    font-family: ${p.text.fontFamily ? p.text.fontFamily : ""};
    opacity: ${shouldAnimateIn ? 1 : 0};
    transform: ${shouldAnimateIn ? "" : animateFrom};
    padding: 0 ${p.text.align === "center" ? 32 : 0}px;

    transition: 350ms ease;
    transition-property: opacity, transform;
  `;
  return (
    <div css={style} ref={refTextRoot}>
      <MarkDown text={p.text.text} />
    </div>
  );
}
