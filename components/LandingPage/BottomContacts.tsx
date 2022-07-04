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
import { getContacts } from "../../data/local/dataContact";
import { Links } from "../../data/models/contactGroup";

interface Props {
  begin: boolean;
}

export default function BottomContacts({ begin }: Props) {
  const [delayPassed, setDelayPassed] = useState(false);
  const [hasAnimationFinished, setHasAnimationFinished] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [contactItems, setContactItems] = useState<Links[]>();
  // const [delayTimes, setDelayTimes] = useState([0]);

  // * research this
  // const contactItems: Links[] = getContacts().map((value): Links => {
  //   console.log(`11111  value:  ${JSON.stringify(value)}`);
  //   return value.links.map((value1) => {
  //     return value1;
  //   });
  // });

  useEffect(() => {
    const ci: Links[] = [];
    getContacts().map((value) => {
      ci.push(...value.links);
    });
    setContactItems(ci);
  }, []);

  // const delayTimes = shuffleArray([0, 1, 2, 3, 4]);

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
        {contactItems?.map((value, index) => {
          const _target =
            value.href.startsWith("tel") || value.href.startsWith("mailto")
              ? "_self"
              : "_blank";

          return (
            <a key={index} target={_target} href={value.href} rel={"noreferrer"}>
              <div
                css={css`
                  display: flex;
                  flex-direction: column-reverse;
                `}
              >
                <i
                  className={value.icon}
                  css={css`
                    width: 30px;
                    height: 32px;
                    cursor: pointer;
                    opacity: ${delayPassed ? 1 : 0};
                    margin: 16px 0;
                    padding: 0;
                    //background-color: red;
                    transform: translateY(${delayPassed ? 0 : "-50%"});
                    text-align: center;
                    font-size: 150%;
                    color: ${isHovering ? itemOnWhiteFocused : itemOnWhite};

                    transition: 140ms ease;
                    transition-property: width, height, margin-top, opacity,
                      transform, font-size, color;
                    transition-delay: ${hasAnimationFinished ? "0" : `${index}00ms`};

                    :hover {
                      transform: scale(1.3);
                      width: 42px;
                      //height: 32px;
                      //margin-top: 14px;
                      //transform: scale(1.3);
                    }
                  `}
                />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
