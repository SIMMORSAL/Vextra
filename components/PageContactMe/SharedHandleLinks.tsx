import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { colorElements } from "../../data/colors";
import { shuffleArray } from "../../helpers/tools";
import { ContactGroup } from "../../data/models/local-data/contactGroup";

interface Props {
  begin: boolean;
  contact: ContactGroup;
}

export default function SharedHandleLinks(p: Props) {
  const [delayPassed, setDelayPassed] = useState(false);
  const [hasAnimationFinished, setHasAnimationFinished] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const delayTimes = shuffleArray(Array.from(Array(p.contact.links.length).keys()));

  const timeouts = useRef([]);
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeouts.current.forEach((value) => clearTimeout(value));
    };
  }, []);

  useEffect(() => {
    if (p.begin)
      timeouts.current.push(
        setTimeout(() => {
          setDelayPassed(true);
          timeouts.current.push(
            setTimeout(() => {
              setHasAnimationFinished(true);
            }, 700)
          ); // 700 is the number of items plus 200 to finish last animation
        }, 450)
      );
  }, [p.begin]);

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
            // color: ${colorElements};
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
