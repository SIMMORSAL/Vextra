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
import { ContactGroup } from "../../data/models/contactGroup";

interface Props {
  begin: boolean;
  contact: ContactGroup;
}

export default function SharedHandleLinks(p: Props) {
  const [delayPassed, setDelayPassed] = useState(false);
  const [hasAnimationFinished, setHasAnimationFinished] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const delayTimes = shuffleArray(Array.from(Array(p.contact.links.length).keys()));

  useEffect(() => {
    if (p.begin)
      setTimeout(() => {
        setDelayPassed(true);
        setTimeout(() => {
          setHasAnimationFinished(true);
        }, 700); // 700 is the number of items plus 200 to finish last animation
      }, 50);
  }, [p.begin]);

  useEffect(() => {}, [isHovering]);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div
        css={css`
          user-select: text;
          margin-top: 16px;
          font-weight: bold;
          text-align: center;
        `}
      >
        {p.contact.socialHandle}
      </div>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        css={css`
          width: 100%;
          //height: 100px;
          display: flex;
          justify-content: center;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            align-items: start;
            overflow: hidden;
            // color: ${textOnWhite};
            color: black;
          `}
        >
          {p.contact.links.map((value, index) => {
            const _target =
              value.href.startsWith("tel") || value.href.startsWith("mailto")
                ? "_self"
                : "_blank";

            return (
              <div
                key={index}
                css={css`
                  display: flex;
                  flex-direction: column-reverse;
                `}
              >
                <div>
                  <a target={_target} href={value.href} rel={"noreferrer"}>
                    <i
                      className={value.icon}
                      css={css`
                        width: 30px;
                        height: 30px;
                        cursor: pointer;
                        opacity: ${delayPassed ? 1 : 0};
                        margin: 16px 0;
                        padding: 0;
                        //background-color: red;
                        //background-color: red;
                        transform: translateY(${delayPassed ? 0 : "50%"});
                        text-align: center;
                        font-size: 150%;

                        transition: 140ms ease;
                        transition-property: width, height, margin-top, opacity,
                          transform, font-size, color;
                        transition-delay: ${hasAnimationFinished
                          ? "0"
                          : `${delayTimes[index]}00ms`};

                        :hover {
                          transform: scale(1.3) translateY(6%);
                          width: 42px;
                        }
                      `}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
