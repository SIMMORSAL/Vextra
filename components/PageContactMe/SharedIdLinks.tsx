import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  headerItemSelect,
  headerItemSelectFilter,
  itemOnWhite,
  itemOnWhiteFilter,
  itemOnWhiteFocused,
  itemOnWhiteFocusedFilter,
  textOnWhite,
} from "../../res/colors";
import Image from "next/image";
import { shuffleArray } from "../../tools/tools";

interface Props {
  begin: boolean;
}

export default function SharedIdLinks({ begin }: Props) {
  const [delayPassed, setDelayPassed] = useState(false);
  const [hasAnimationFinished, setHasAnimationFinished] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const delayTimes = shuffleArray([0, 1, 2, 3]);

  useEffect(() => {
    if (begin)
      setTimeout(() => {
        setDelayPassed(true);
        setTimeout(() => {
          setHasAnimationFinished(true);
        }, 700); // 700 is the number of items plus 200 to finish last animation
      }, 0);
  }, [begin]);

  useEffect(() => {}, [isHovering]);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      css={css`
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: start;
          padding: 0 24px;
          overflow: hidden;
          // color: ${textOnWhite};
          color: black;
        `}
      >
        <a
          href={"https://www.pinterest.com/mhmitramh/"}
          target={"_blank"}
          rel="noreferrer"
        >
          <PinterestIcon
            style={{ color: itemOnWhiteFocused }}
            css={css`
              margin: 16px 0;
              width: 30px;
              //padding: 0 4px;
              transform: translateY(${delayPassed ? 0 : "50%"});
              opacity: ${delayPassed ? 1 : 0};
              cursor: pointer;
              //color: ${isHovering ? itemOnWhiteFocused : itemOnWhite};

              transition: 200ms ease;
              transition-property: transform, opacity, color, width, height;
              transition-delay: ${hasAnimationFinished
                ? "0"
                : `${delayTimes[0]}00ms`};

              :hover {
                width: 42px;
                height: 32px;
                color: ${headerItemSelect};
              }
            `}
          />
        </a>
        <div
          css={css`
            margin: 16px 0;
            width: 24px;
            height: 24px;
            transform: translateY(${delayPassed ? 0 : "50%"});
            opacity: ${delayPassed ? 1 : 0};
            cursor: pointer;
            display: flex;
            align-items: end;

            transition: 200ms ease;
            transition-property: transform, opacity, color, width, height,
              padding-left, padding-right;
            transition-delay: ${hasAnimationFinished ? "0" : `${delayTimes[1]}00ms`};

            :hover {
              width: 36px;
              height: 32px;
              padding: 0 2px;
            }
          `}
        >
          <Image
            src={require("/res/images/behance.png")}
            alt={"behance"}
            layout={"intrinsic"}
            css={css`
              padding: 0 4px;
              filter: ${itemOnWhiteFocusedFilter};

              transition: filter 200ms ease;

              :hover {
                // filter: ${headerItemSelectFilter};
              }
            `}
          />
        </div>
        <a
          href={"https://www.linkedin.com/in/mhmitramh/"}
          target={"_blank"}
          rel="noreferrer"
        >
          <LinkedInIcon
            style={{ color: itemOnWhiteFocused }}
            css={css`
              margin: 16px 0;
              width: 30px;
              transform: translateY(${delayPassed ? 0 : "50%"});
              opacity: ${delayPassed ? 1 : 0};
              cursor: pointer;

              transition: 200ms ease;
              transition-property: transform, opacity, color, width, height;
              transition-delay: ${hasAnimationFinished
                ? "0"
                : `${delayTimes[2]}00ms`};

              :hover {
                width: 42px;
                height: 32px;
                // color: ${headerItemSelect};
              }
            `}
          />
        </a>
        <a
          href={"https://www.instagram.com/mhmitramh/"}
          target={"_blank"}
          rel="noreferrer"
        >
          <InstagramIcon
            style={{ color: itemOnWhiteFocused }}
            css={css`
              margin: 16px 0;
              width: 30px;
              transform: translateY(${delayPassed ? 0 : "50%"});
              opacity: ${delayPassed ? 1 : 0};
              cursor: pointer;

              transition: 200ms ease;
              transition-property: transform, opacity, color, width, height;
              transition-delay: ${hasAnimationFinished
                ? "0"
                : `${delayTimes[3]}00ms`};

              :hover {
                width: 42px;
                height: 32px;
                //color: ${headerItemSelect};
              }
            `}
          />
        </a>
        {/*<EmailIcon*/}
        {/*  style={{ color: isHovering ? itemOnWhiteFocused : itemOnWhite }}*/}
        {/*  css={css`*/}
        {/*    margin: 16px 0;*/}
        {/*    width: 30px;*/}
        {/*    transform: translateY(${delayPassed ? 0 : "50%"});*/}
        {/*    opacity: ${delayPassed ? 1 : 0};*/}
        {/*    cursor: pointer;*/}

        {/*    transition: 200ms ease;*/}
        {/*    transition-property: transform, opacity, color, width, height;*/}
        {/*    transition-delay: ${hasAnimationFinished ? "0" : `${delayTimes[4]}00ms`};*/}

        {/*    :hover {*/}
        {/*      width: 42px;*/}
        {/*      height: 32px;*/}
        {/*      //color: ${headerItemSelect};*/}
        {/*    }*/}
        {/*  `}*/}
        {/*/>*/}
      </div>
    </div>
  );
}
