import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Portfolio } from "../../data/models/portfolio";
import Image from "next/image";
import { headerItemSelectFilter } from "../../res/colors";

interface Props {
  portfolio: Portfolio;
  index: number;
}

export default function PortfolioItem(props: Props) {
  const [beginFadeIn, setBeginFadeIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setBeginFadeIn(true);
    }, 50);
  }, []);
  return (
    <div
      css={css`
        margin: 16px 8px;
      `}
    >
      <Image
        // src={require("/res/images/portfolio/ab.png")}
        src={require(`/res/images/portfolio/${props.portfolio.image}`)}
        alt={"behance"}
        layout={"intrinsic"}
        css={css`
          padding: 0 4px;
          transform: translateY(${beginFadeIn ? 0 : -24}px)
            rotate3d(${beginFadeIn ? 0 : 1}, 0, 0, -35deg);
          opacity: ${beginFadeIn ? 1 : 0};

          transition: 500ms ease;
          transition-property: transform, opacity;
          transition-delay: ${props.index}50ms;
        `}
      />
    </div>
  );
}
