import React, { useContext, useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { headerHeight } from "../Header";
import { useRouter } from "next/router";
import { _AppContext } from "../../helpers/providers/provider_App";
import { cacheImage, getActiveTab } from "../../helpers/tools";
import Achievements from "./Achievements";
import { getAboutMeData } from "../../data/local/dataAboutMePage";
import Markdown from "../RichContent/Markdown/Markdown";

interface Props {}

export default function PageAboutMe(props: Props) {
  const router = useRouter();

  const { newTabSelected, setNewTabSelected } = useContext(_AppContext);

  const [fadeIn, setFadeIn] = useState(false);
  const [fadeInFinish, setFadeInFinish] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [contentHeight, setContentHeight] = useState<undefined | number>(undefined);
  const [contentHeightSmallerThanVh, setContentHeightSmallerThanVh] =
    useState(false);
  const [isImageCached, setIsImageCached] = useState(false);

  const fadeInDuration = 900;
  const rootPaddingTop = 48;

  const data = getAboutMeData();

  // * this is to make navigating with back button work properly
  useEffect(() => {
    setNewTabSelected(getActiveTab(router));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const timeouts = useRef([]);

  useEffect(() => {
    cacheImage(data.image).then(() => {
      setIsImageCached(true);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeouts.current.forEach((value) => clearTimeout(value));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isImageCached)
      timeouts.current.push(
        setTimeout(() => {
          setFadeIn(true);
          setContentHeight(document.getElementById("content").clientHeight);
          const contentHeight = document.getElementById("content").clientHeight;
          setContentHeightSmallerThanVh(contentHeight < window.innerHeight);
          timeouts.current.push(
            setTimeout(() => {
              setFadeInFinish(true);
            }, fadeInDuration)
          );
        }, 70)
      );
  }, [isImageCached]);

  useEffect(() => {
    if (newTabSelected !== getActiveTab(router)) setFadeOut(true);
    else setFadeOut(false);
  }, [newTabSelected, router]);

  return (
    <div
      css={css`
        width: 100%;
        display: grid;
        opacity: ${fadeOut ? 0 : 1};
        margin-top: ${fadeOut ? 14 : 0}px;
        padding-top: ${rootPaddingTop}px;

        transition: 100ms ease;
        transition-property: opacity, margin-top;
      `}
    >
      <div
        css={css`
          z-index: 100;
          grid-row: 1;
          grid-column: 1;
          width: 100%;
          max-height: ${contentHeightSmallerThanVh
            ? `${contentHeight}px`
            : `calc(100vh - ${rootPaddingTop}px)`};
          overflow: hidden;
          display: ${fadeInFinish ? "none" : "block"};
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
            margin-top: ${fadeIn ? "100vh" : "-240px"};

            transition: margin-top ${fadeInDuration}ms ease;
          `}
        >
          <div
            css={css`
              width: 100%;
              height: 300px;
              background-image: linear-gradient(0deg, #ffffff, transparent);
            `}
          />
          <div
            css={css`
              width: 100%;
              height: calc(100% + 300px);
              background-color: #ffffff;
            `}
          />
        </div>
      </div>
      <div
        id={"content"}
        css={css`
          z-index: 1;
          grid-row: 1;
          grid-column: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: ${headerHeight}px 24px 24px;
        `}
      >
        <div
          css={css`
            padding: 0 32px 0;
          `}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={"avatar"}
            src={data.image}
            css={css`
              width: 100%;
              max-width: 500px;
              margin: 0 0 12px;
              opacity: ${isImageCached ? 1 : 0};

              transition: opacity 300ms ease;
            `}
          />
        </div>
        <p
          css={css`
            font-size: 2em;
            font-weight: bold;
          `}
        >
          {data.name}
        </p>
        <Markdown
          text={data.textTop}
          style={css`
            max-width: 500px;
          `}
        />
        <Achievements />
        <Markdown
          text={data.textBottom}
          style={css`
            max-width: 500px;
          `}
        />
      </div>
    </div>
  );
}
