import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { colorItemOnWhite } from "../../data/colors";

interface Props {
  delay: number;
}

export default function GalleryButton(props: Props) {
  const [beginFadeIn, setBeginFadeIn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setBeginFadeIn(true);
    }, props.delay);

    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      css={css`
        margin: 32px 8px;
        opacity: ${beginFadeIn ? 1 : 0};
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 24px 48px;
        border: 1px solid transparent;
        cursor: pointer;

        transition: 400ms ease;
        transition-property: opacity, border-bottom-color, border-top-color,
          border-left-color, border-right-color;

        :hover {
          border: 1px solid ${colorItemOnWhite};
        }
      `}
    >
      <div
        css={css`
          width: 90px;
        `}
      >
        <Image
          src={require(`/res/images/portfolio/gallery.png`)}
          alt={"behance"}
          layout={"intrinsic"}
          css={css`
            padding: 0 4px;
            transform: translateY(${beginFadeIn ? 0 : 15}%)
              rotate3d(${beginFadeIn ? 0 : 1}, 0, 0, 45deg);

            transition: 700ms ease;
            transition-property: transform;
          `}
        />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 16px;
        `}
      >
        <p
          css={css`
            font-weight: 600;
            font-size: 1.2em;
            margin: 0 0 13%;
          `}
        >
          Gallery
        </p>
        <p
          css={css`
            font-weight: 600;
            font-size: 0.9em;
            margin: 0;
          `}
        >
          MISCELLANEOUS
        </p>
      </div>
    </div>
  );
}
