import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { headerHeight } from "../Header";
import { useRouter } from "next/router";
import { _AppContext } from "../../helpers/providers/provider_App";
import { getActiveTab } from "../../tools/tools";
import Achievements from "./Achievements";

interface Props {}

export default function PageAboutMe(props: Props) {
  const router = useRouter();

  const { newTabSelected } = useContext(_AppContext);

  const [fadeIn, setFadeIn] = useState(false);
  const [fadeInFinish, setFadeInFinish] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [contentHeight, setContentHeight] = useState<undefined | number>(undefined);
  const [contentHeightSmallerThanVh, setContentHeightSmallerThanVh] =
    useState(false);

  const fadeInDuration = 900;

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
      setContentHeight(document.getElementById("content").clientHeight);
      const contentHeight = document.getElementById("content").clientHeight;
      setContentHeightSmallerThanVh(contentHeight < window.innerHeight);
      // console.log(
      //   `11111  sddsas:  ${document.getElementById("content").clientHeight}`
      // );
      setTimeout(() => {
        setFadeInFinish(true);
      }, fadeInDuration);
    }, 70);
  }, []);

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
        padding-top: 15vh;

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
          max-height: ${contentHeightSmallerThanVh ? `${contentHeight}px` : "85vh"};
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={"avatar"}
          src={
            "https://avatarairlines.com/wp-content/uploads/2020/05/Female-Placeholder.png"
          }
          css={css`
            width: 100%;
            max-width: 450px;
            margin: 0 0 24px;
            padding: 0 32px 0;
          `}
        />
        <p
          css={css`
            max-width: 500px;
          `}
        >
          <span
            css={css`
              font-size: 1.1em;
            `}
          >
            I&apos;m Mitra Sisakht ! <br />
            <br />
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          convallis velit. Nunc bibendum nibh in lectus convallis aliquam vitae id
          diam. Ut ut ante eu dui placerat sodales. Suspendisse vulputate maximus
          nisl, sed suscipit ante lacinia ac. Vestibulum suscipit, sapien vitae
          convallis porttitor, mauris ligula placerat nibh, a ornare mauris diam at
          erat. Ut nec magna mauris. Integer accumsan tempus quam, elementum pharetra
          elit suscipit id.
          <br />
        </p>
        <Achievements />
        <p
          css={css`
            max-width: 500px;
          `}
        >
          <br />
          Etiam at nisl tempor nibh iaculis mattis. Aliquam quam leo, efficitur
          fringilla commodo eu, vehicula ut velit. Nam eu ante vulputate libero
          convallis gravida et at dolor. In est justo, viverra pretium ullamcorper
          pellentesque pellentesque. Fusce turpis erat, congue in lobortis ut,
          viverra et nibh. Suspendisse vel tortor aliquam, rhoncus dui et, sagittis
          arcu. Cras dictum sapien purus, justo, viverra pretium ullamcorper
          pellentesque pellentesque. Fusce turpis erat, congue in lobortis ut,
          viverra et nibh. Suspendisse vel tortor aliquam, rhoncus dui et, sagittis
          arcu. Cras dictum sapien purus, sed vulputate augue convallis consectetur.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
      </div>
    </div>
  );
}
