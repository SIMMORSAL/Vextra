import React from "react";
import { css } from "@emotion/react";
import { headerHeight } from "../Header";

interface Props {}

export default function AboutMeContent(props: Props) {
  return (
    <div
      css={css`
        width: 100%;
        /* height: 100%; */
        //border: 1px solid #484848;
        /* font-weight: bold; */
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
          max-width: 800px;
          /* font-weight: bold; */
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
        diam. Ut ut ante eu dui placerat sodales. Suspendisse vulputate maximus nisl,
        sed suscipit ante lacinia ac. Vestibulum suscipit, sapien vitae convallis
        porttitor, mauris ligula placerat nibh, a ornare mauris diam at erat. Ut nec
        magna mauris. Integer accumsan tempus quam, elementum pharetra elit suscipit
        id.
        <br />
        <br />
        Etiam at nisl tempor nibh iaculis mattis. Aliquam quam leo, efficitur
        fringilla commodo eu, vehicula ut velit. Nam eu ante vulputate libero
        convallis gravida et at dolor. In est justo, viverra pretium ullamcorper sed,
        maximus auctor nulla. Integer et enim vitae libero ornare sollicitudin. In
        volutpat, lacus vel viverra mattis, dolor dolor pharetra ipsum, sit amet
        hendrerit metus sapien eleifend tortor. Fusce purus justo, vestibulum a
        volutpat et, porta quis massa. Pellentesque volutpat pellentesque
        pellentesque. Fusce turpis erat, congue in lobortis ut, viverra et nibh.
        Suspendisse vel tortor aliquam, rhoncus dui et, sagittis arcu. Cras dictum
        sapien purus, sed vulputate augue convallis consectetur. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
        convallis velit. Nunc bibendum nibh in lectus convallis aliquam vitae id
        diam. Ut ut ante eu dui placerat sodales. Suspendisse vulputate maximus nisl,
        sed suscipit ante lacinia ac. Vestibulum suscipit, sapien vitae convallis
        porttitor, mauris ligula placerat nibh, a ornare mauris diam at erat. Ut nec
        magna mauris. Integer accumsan tempus quam, elementum pharetra elit suscipit
        id.
        <br />
        <br />
        Etiam at nisl tempor nibh iaculis mattis. Aliquam quam leo, efficitur
        fringilla commodo eu, vehicula ut velit. Nam eu ante vulputate libero
        convallis gravida et at dolor. In est justo, viverra pretium ullamcorper sed,
        maximus auctor nulla. Integer et enim vitae libero ornare sollicitudin. In
        volutpat, lacus vel viverra mattis, dolor dolor pharetra ipsum, sit amet
        hendrerit metus sapien eleifend tortor. Fusce purus justo, vestibulum a
        volutpat et, porta quis massa. Pellentesque volutpat pellentesque
        pellentesque. Fusce turpis erat, congue in lobortis ut, viverra et nibh.
        Suspendisse vel tortor aliquam, rhoncus dui et, sagittis arcu. Cras dictum
        sapien purus, sed vulputate augue convallis consectetur. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        <br />
        <br />
        Etiam at nisl tempor nibh iaculis mattis. Aliquam quam leo, efficitur
        fringilla commodo eu, vehicula ut velit. Nam eu ante vulputate libero
        convallis gravida et at dolor. In est justo, viverra pretium ullamcorper sed,
        maximus auctor nulla. Integer et enim vitae libero ornare sollicitudin. In
        volutpat, lacus vel viverra mattis, dolor dolor pharetra ipsum, sit amet
        hendrerit metus sapien eleifend tortor. Fusce purus justo, vestibulum a
        volutpat et, porta quis massa. Pellentesque volutpat pellentesque
        pellentesque. Fusce turpis erat, congue in lobortis ut, viverra et nibh.
        Suspendisse vel tortor aliquam, rhoncus dui et, sagittis arcu. Cras dictum
        sapien purus, sed vulputate augue convallis consectetur. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
        convallis velit. Nunc bibendum nibh in lectus convallis aliquam vitae id
        diam. Ut ut ante eu dui placerat sodales. Suspendisse vulputate maximus nisl,
        sed suscipit ante lacinia ac. Vestibulum suscipit, sapien vitae convallis
        porttitor, mauris ligula placerat nibh, a ornare mauris diam at erat. Ut nec
        magna mauris. Integer accumsan tempus quam, elementum pharetra elit suscipit
        id.
        <br />
        <br />
        Etiam at nisl tempor nibh iaculis mattis. Aliquam quam leo, efficitur
        fringilla commodo eu, vehicula ut velit. Nam eu ante vulputate libero
        convallis gravida et at dolor. In est justo, viverra pretium ullamcorper sed,
        maximus auctor nulla. Integer et enim vitae libero ornare sollicitudin. In
        volutpat, lacus vel viverra mattis, dolor dolor pharetra ipsum, sit amet
        hendrerit metus sapien eleifend tortor. Fusce purus justo, vestibulum a
        volutpat et, porta quis massa. Pellentesque volutpat pellentesque
        pellentesque. Fusce turpis erat, congue in lobortis ut, viverra et nibh.
        Suspendisse vel tortor aliquam, rhoncus dui et, sagittis arcu. Cras dictum
        sapien purus, sed vulputate augue convallis consectetur. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        <br />
        <br />
        Etiam at nisl tempor nibh iaculis mattis. Aliquam quam leo, efficitur
        fringilla commodo eu, vehicula ut velit. Nam eu ante vulputate libero
        convallis gravida et at dolor. In est justo, viverra pretium ullamcorper sed,
        maximus auctor nulla. Integer et enim vitae libero ornare sollicitudin. In
        volutpat, lacus vel viverra mattis, dolor dolor pharetra ipsum, sit amet
        hendrerit metus sapien eleifend tortor. Fusce purus justo, vestibulum a
        volutpat et, porta quis massa. Pellentesque volutpat pellentesque
        pellentesque. Fusce turpis erat, congue in lobortis ut, viverra et nibh.
        Suspendisse vel tortor aliquam, rhoncus dui et, sagittis arcu. Cras dictum
        sapien purus, sed vulputate augue convallis consectetur. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
        convallis velit. Nunc bibendum nibh in lectus convallis aliquam vitae id
        diam. Ut ut ante eu dui placerat sodales. Suspendisse vulputate maximus nisl,
        sed suscipit ante lacinia ac. Vestibulum suscipit, sapien vitae convallis
        porttitor, mauris ligula placerat nibh, a ornare mauris diam at erat. Ut nec
        magna mauris. Integer accumsan tempus quam, elementum pharetra elit suscipit
        id.
        <br />
        <br />
        Etiam at nisl tempor nibh iaculis mattis. Aliquam quam leo, efficitur
        fringilla commodo eu, vehicula ut velit. Nam eu ante vulputate libero
        convallis gravida et at dolor. In est justo, viverra pretium ullamcorper sed,
        maximus auctor nulla. Integer et enim vitae libero ornare sollicitudin. In
        volutpat, lacus vel viverra mattis, dolor dolor pharetra ipsum, sit amet
        hendrerit metus sapien eleifend tortor. Fusce purus justo, vestibulum a
        volutpat et, porta quis massa. Pellentesque volutpat pellentesque
        pellentesque. Fusce turpis erat, congue in lobortis ut, viverra et nibh.
        Suspendisse vel tortor aliquam, rhoncus dui et, sagittis arcu. Cras dictum
        sapien purus, sed vulputate augue convallis consectetur. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>
    </div>
  );
}
