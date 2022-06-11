import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { headerHeight } from "../Header";
import { useRouter } from "next/router";

interface Props {}

export default function AboutMeContent(props: Props) {
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeInFinish, setFadeInFinish] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
      setTimeout(() => {
        setFadeInFinish(true);
      }, 1000);
    }, 200);
  }, []);
  return (
    <div
      css={css`
        width: 100%;
        display: grid;

        // * this is to apply gradient fading
        // -webkit-mask-image: -webkit-gradient(
        //   linear,
        //   left top,
        //   left bottom,
        //   from(rgba(0, 0, 0, 0)),
        //   to(rgba(0, 0, 0, 1))
        // );
        // -webkit-mask-size: 100% ${fadeIn ? 100 : 15}%;
        // //-webkit-mask-size: 100% 25%;
        // -webkit-mask-repeat: no-repeat;
        //
        // transition: -webkit-mask-size 3000ms ease;
      `}
    >
      <div
        css={css`
          z-index: 100;
          grid-row: 1;
          grid-column: 1;
          width: 100%;
          height: 100%;
          display: ${fadeInFinish ? "none" : "block"};
          margin-top: ${fadeIn ? "1000px" : "-220px"};

          transition: margin-top 1000ms ease;
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
            //background-color: rgba(215, 74, 74, 0.44);
            background-color: #ffffff;
          `}
        />
      </div>
      <div
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
          css={css``}
        />
        <p
          css={css`
            max-width: 500px;
            /* font-weight: bold; */

            //background-image: linear-gradient(
            //  rgba(255, 255, 255, 0) 0%,
            //  rgba(255, 255, 255, 1) 100%
            //);

            background-image: linear-gradient(180deg, #ffffff, transparent);
          `}
        >
          <span
            css={css`
              /* font-weight: 500; */
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
          <br />
          Etiam at nisl tempor nibh iaculis mattis. Aliquam quam leo, efficitur
          fringilla commodo eu, vehicula ut velit. Nam eu ante vulputate libero
          convallis gravida et at dolor. In est justo, viverra pretium ullamcorper
          sed, maximus auctor nulla. Integer et enim vitae libero ornare
          sollicitudin. In volutpat, lacus vel viverra mattis, dolor dolor pharetra
          ipsum, sit amet hendrerit metus sapien eleifend tortor. Fusce purus justo,
          vestibulum a volutpat et, porta quis massa. Pellentesque volutpat
          pellentesque pellentesque. Fusce turpis erat, congue in lobortis ut,
          viverra et nibh. Suspendisse vel tortor aliquam, rhoncus dui et, sagittis
          arcu. Cras dictum sapien purus, sed vulputate augue convallis consectetur.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          convallis velit. Nunc bibendum nibh in lectus convallis aliquam vitae id
          diam. Ut ut ante eu dui placerat sodales. Suspendisse vulputate maximus
          nisl, sed suscipit ante lacinia ac. Vestibulum suscipit, sapien vitae
          convallis porttitor, mauris ligula placerat nibh, a ornare mauris diam at
          erat. Ut nec magna mauris. Integer accumsan tempus quam, elementum pharetra
          elit suscipit id.
          <br />
          <br />
          Etiam at nisl tempor nibh iaculis mattis. Aliquam quam leo, efficitur
          fringilla commodo eu, vehicula ut velit. Nam eu ante vulputate libero
          convallis gravida et at dolor. In est justo, viverra pretium ullamcorper
          sed, maximus auctor nulla. Integer et enim vitae libero ornare
          sollicitudin. In volutpat, lacus vel viverra mattis, dolor dolor pharetra
          ipsum, sit amet hendrerit metus sapien eleifend tortor. Fusce purus justo,
          vestibulum a volutpat et, porta quis massa. Pellentesque volutpat
          pellentesque pellentesque. Fusce turpis erat, congue in lobortis ut,
          viverra et nibh. Suspendisse vel tortor aliquam, rhoncus dui et, sagittis
          arcu. Cras dictum sapien purus, sed vulputate augue convallis consectetur.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
          <br />
          <br />
          Etiam at nisl tempor nibh iaculis mattis. Aliquam quam leo, efficitur
          fringilla commodo eu, vehicula ut velit. Nam eu ante vulputate libero
          convallis gravida et at dolor. In est justo, viverra pretium ullamcorper
          sed, maximus auctor nulla. Integer et enim vitae libero ornare
          sollicitudin. In volutpat, lacus vel viverra mattis, dolor dolor pharetra
          ipsum, sit amet hendrerit metus sapien eleifend tortor. Fusce purus justo,
          vestibulum a volutpat et, porta quis massa. Pellentesque volutpat
          pellentesque pellentesque. Fusce turpis erat, congue in lobortis ut,
          viverra et nibh. Suspendisse vel tortor aliquam, rhoncus dui et, sagittis
          arcu. Cras dictum sapien purus, sed vulputate augue convallis consectetur.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          convallis velit. Nunc bibendum nibh in lectus convallis aliquam vitae id
          diam. Ut ut ante eu dui placerat sodales. Suspendisse vulputate maximus
          nisl, sed suscipit ante lacinia ac. Vestibulum suscipit, sapien vitae
          convallis porttitor, mauris ligula placerat nibh, a ornare mauris diam at
          erat. Ut nec magna mauris. Integer accumsan tempus quam, elementum pharetra
          elit suscipit id.
          <br />
          <br />
          Etiam at nisl tempor nibh iaculis mattis. Aliquam quam leo, efficitur
          fringilla commodo eu, vehicula ut velit. Nam eu ante vulputate libero
          convallis gravida et at dolor. In est justo, viverra pretium ullamcorper
          sed, maximus auctor nulla. Integer et enim vitae libero ornare
          sollicitudin. In volutpat, lacus vel viverra mattis, dolor dolor pharetra
          ipsum, sit amet hendrerit metus sapien eleifend tortor. Fusce purus justo,
          vestibulum a volutpat et, porta quis massa. Pellentesque volutpat
          pellentesque pellentesque. Fusce turpis erat, congue in lobortis ut,
          viverra et nibh. Suspendisse vel tortor aliquam, rhoncus dui et, sagittis
          arcu. Cras dictum sapien purus, sed vulputate augue convallis consectetur.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
          <br />
          <br />
          Etiam at nisl tempor nibh iaculis mattis. Aliquam quam leo, efficitur
          fringilla commodo eu, vehicula ut velit. Nam eu ante vulputate libero
          convallis gravida et at dolor. In est justo, viverra pretium ullamcorper
          sed, maximus auctor nulla. Integer et enim vitae libero ornare
          sollicitudin. In volutpat, lacus vel viverra mattis, dolor dolor pharetra
          ipsum, sit amet hendrerit metus sapien eleifend tortor. Fusce purus justo,
          vestibulum a volutpat et, porta quis massa. Pellentesque volutpat
          pellentesque pellentesque. Fusce turpis erat, congue in lobortis ut,
          viverra et nibh. Suspendisse vel tortor aliquam, rhoncus dui et, sagittis
          arcu. Cras dictum sapien purus, sed vulputate augue convallis consectetur.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          convallis velit. Nunc bibendum nibh in lectus convallis aliquam vitae id
          diam. Ut ut ante eu dui placerat sodales. Suspendisse vulputate maximus
          nisl, sed suscipit ante lacinia ac. Vestibulum suscipit, sapien vitae
          convallis porttitor, mauris ligula placerat nibh, a ornare mauris diam at
          erat. Ut nec magna mauris. Integer accumsan tempus quam, elementum pharetra
          elit suscipit id.
          <br />
          <br />
          Etiam at nisl tempor nibh iaculis mattis. Aliquam quam leo, efficitur
          fringilla commodo eu, vehicula ut velit. Nam eu ante vulputate libero
          convallis gravida et at dolor. In est justo, viverra pretium ullamcorper
          sed, maximus auctor nulla. Integer et enim vitae libero ornare
          sollicitudin. In volutpat, lacus vel viverra mattis, dolor dolor pharetra
          ipsum, sit amet hendrerit metus sapien eleifend tortor. Fusce purus justo,
          vestibulum a volutpat et, porta quis massa. Pellentesque volutpat
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
