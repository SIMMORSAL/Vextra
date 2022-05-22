import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { headerItemSelect, textOnWhite } from "../../res/colors";
import Image from "next/image";

interface Props {
  begin: boolean;
}

export default function BottomIcons({ begin }: Props) {
  const [delayPassed, setDelayPassed] = useState(false);
  const [hasAnimationFinished, setHasAnimationFinished] = useState(false);

  useEffect(() => {
    if (begin)
      setTimeout(() => {
        setDelayPassed(true);
        setTimeout(() => {
          setHasAnimationFinished(true);
        }, 700); // 700 is the number of items plus 200 to finish last animation
      }, 1300);
  }, [begin]);

  return (
    <div
      css={css`
        grid-row: 1;
        grid-column: 1;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: end;
        justify-content: center;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: end;
          overflow: hidden;
          // color: ${textOnWhite};
          color: black;
        `}
      >
        <PinterestIcon
          css={css`
            margin: 16px 0;
            width: 30px;
            //padding: 0 4px;
            transform: translateY(${delayPassed ? 0 : "-50%"});
            opacity: ${delayPassed ? 1 : 0};
            cursor: pointer;

            transition: 200ms ease;
            transition-property: transform, opacity, color, width, height;

            :hover {
              width: 42px;
              height: 32px;
              color: ${headerItemSelect};
            }
          `}
        />
        <div
          css={css`
            margin: 16px 0;
            width: 24px;
            height: 24px;
            transform: translateY(${delayPassed ? 0 : "-50%"});
            opacity: ${delayPassed ? 1 : 0};
            cursor: pointer;
            display: flex;
            align-items: end;

            transition: 200ms ease;
            transition-property: transform, opacity, color, width, height,
              padding-left, padding-right;
            transition-delay: ${hasAnimationFinished ? "0" : "300ms"};

            :hover {
              width: 36px;
              height: 42px;
              padding: 0 2px;
            }
          `}
        >
          <Image
            src={require("/res/images/behance.png")}
            alt={"behance"}
            layout={"intrinsic"}
            css={css`
              filter: invert(5%) sepia(1%) saturate(545%) hue-rotate(323deg)
                brightness(101%) contrast(93%);

              transition: filter 200ms ease;

              :hover {
                filter: invert(46%) sepia(38%) saturate(1830%) hue-rotate(150deg)
                  brightness(89%) contrast(84%);
              }
            `}
          />
        </div>
        <LinkedInIcon
          css={css`
            margin: 16px 0;
            width: 30px;
            transform: translateY(${delayPassed ? 0 : "-50%"});
            opacity: ${delayPassed ? 1 : 0};
            cursor: pointer;

            transition: 200ms ease;
            transition-property: transform, opacity, color, width, height;
            transition-delay: ${hasAnimationFinished ? "0" : "400ms"};

            :hover {
              width: 42px;
              height: 32px;
              color: ${headerItemSelect};
            }
          `}
        />
        <InstagramIcon
          css={css`
            margin: 16px 0;
            width: 30px;
            transform: translateY(${delayPassed ? 0 : "-50%"});
            opacity: ${delayPassed ? 1 : 0};
            cursor: pointer;

            transition: 200ms ease;
            transition-property: transform, opacity, color, width, height;
            transition-delay: ${hasAnimationFinished ? "0" : "100ms"};

            :hover {
              width: 42px;
              height: 32px;
              color: ${headerItemSelect};
            }
          `}
        />
        <EmailIcon
          css={css`
            margin: 16px 0;
            width: 30px;
            transform: translateY(${delayPassed ? 0 : "-50%"});
            opacity: ${delayPassed ? 1 : 0};
            cursor: pointer;

            transition: 200ms ease;
            transition-property: transform, opacity, color, width, height;
            transition-delay: ${hasAnimationFinished ? "0" : "200ms"};

            :hover {
              width: 42px;
              height: 32px;
              color: ${headerItemSelect};
            }
          `}
        />
      </div>
    </div>
  );
}
