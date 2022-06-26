import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
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

export default function BottomIcons({ begin }: Props) {
  const [delayPassed, setDelayPassed] = useState(false);
  const [hasAnimationFinished, setHasAnimationFinished] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const delayTimes = shuffleArray([0, 1, 2, 3, 4]);

  useEffect(() => {
    if (begin)
      setTimeout(() => {
        setDelayPassed(true);
        setTimeout(() => {
          setHasAnimationFinished(true);
        }, 700); // 700 is the number of items plus 200 to finish last animation
      }, 1300);
  }, [begin]);

  useEffect(() => {}, [isHovering]);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: end;
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
          css={css`
            display: flex;
          `}
        >
          <PinterestIcon
            style={{ color: isHovering ? itemOnWhiteFocused : itemOnWhite }}
            css={css`
              margin: 16px 0;
              width: 30px;
              //padding: 0 4px;
              transform: translateY(${delayPassed ? 0 : "-50%"});
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
        <a
          href={"https://www.linkedin.com/in/mhmitramh/"}
          target={"_blank"}
          rel="noreferrer"
          css={css`
            display: flex;
          `}
        >
          <LinkedInIcon
            style={{ color: isHovering ? itemOnWhiteFocused : itemOnWhite }}
            css={css`
              margin: 16px 0;
              width: 30px;
              transform: translateY(${delayPassed ? 0 : "-50%"});
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
          css={css`
            display: flex;
          `}
        >
          <InstagramIcon
            style={{ color: isHovering ? itemOnWhiteFocused : itemOnWhite }}
            css={css`
              margin: 16px 0;
              width: 30px;
              transform: translateY(${delayPassed ? 0 : "-50%"});
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
        <a
          href={"mailto: mhmitra.mh@gmail.com"}
          css={css`
            display: flex;
          `}
        >
          <EmailIcon
            style={{ color: isHovering ? itemOnWhiteFocused : itemOnWhite }}
            css={css`
              margin: 16px 0;
              width: 30px;
              transform: translateY(${delayPassed ? 0 : "-50%"});
              opacity: ${delayPassed ? 1 : 0};
              cursor: pointer;

              transition: 200ms ease;
              transition-property: transform, opacity, color, width, height;
              transition-delay: ${hasAnimationFinished
                ? "0"
                : `${delayTimes[4]}00ms`};

              :hover {
                width: 42px;
                height: 32px;
                //color: ${headerItemSelect};
              }
            `}
          />
        </a>
      </div>
    </div>
  );
}
