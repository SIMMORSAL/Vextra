import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import {
  colorItemOnWhite,
  colorItemOnWhiteFocused,
  colorElements,
} from "../../data/colors";
import { getContacts } from "../../data/local/dataContactPage";
import { Links } from "../../data/models/local-data/contactGroup";

interface Props {
  begin: boolean;
}

export default function BottomContacts({ begin }: Props) {
  const [delayPassed, setDelayPassed] = useState(false);
  const [hasAnimationFinished, setHasAnimationFinished] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [contactItems, setContactItems] = useState<Links[]>();
  const [hasAnyContactItemLeft, setHasAnyContactItemLeft] = useState(false);

  useEffect(() => {
    const ci: Links[] = [];
    getContacts().map((value) => {
      ci.push(...value.links);
    });

    let ciLeft = false;
    const ciPickedToShow: Links[] = [];
    ci.map((value) => {
      if (value.showInHome) ciPickedToShow.push(value);
      else ciLeft = true;
    });

    setContactItems(ciPickedToShow);
    setHasAnyContactItemLeft(ciLeft);
  }, []);

  const timeouts = useRef([]);
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeouts.current.forEach((value) => clearTimeout(value));
    };
  }, []);

  useEffect(() => {
    if (begin && contactItems.length > 0)
      timeouts.current.push(
        setTimeout(() => {
          setDelayPassed(true);
          timeouts.current.push(
            setTimeout(() => {
              setHasAnimationFinished(true);
            }, contactItems.length * 100 + 200)
          ); // 700 is the number of items plus 200 to finish last animation
        }, 1300)
      );
  }, [begin, contactItems]);

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
          // color: ${colorElements};
          color: black;
        `}
      >
        {contactItems?.map((value, index) => {
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
                      transform: translateY(${delayPassed ? 0 : "-50%"});
                      text-align: center;
                      font-size: 150%;
                      color: ${isHovering
                        ? colorItemOnWhiteFocused
                        : colorItemOnWhite};

                      transition: 140ms ease;
                      transition-property: width, height, margin-top, opacity,
                        transform, font-size, color;
                      transition-delay: ${hasAnimationFinished
                        ? "0"
                        : `${index}00ms`};

                      :hover {
                        transform: scale(1.3) translateY(-6%);
                        width: 42px;
                        //height: 32px;
                        //margin-top: 14px;
                        //transform: scale(1.3);
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
  );
}
