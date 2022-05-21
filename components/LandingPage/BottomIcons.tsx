import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { textOnWhite } from "../../res/colors";
import Image from "next/image";

interface Props {
  begin: boolean;
}

export default function BottomIcons({ begin }: Props) {
  const [delayPassed, setDelayPassed] = useState(false);

  useEffect(() => {
    if (begin)
      setTimeout(() => {
        setDelayPassed(true);
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
          overflow: hidden;
          // color: ${textOnWhite};
          color: black;
        `}
      >
        <PinterestIcon
          css={css`
            margin: 16px 4px;
            transform: translateY(${delayPassed ? 0 : "-50%"});
            opacity: ${delayPassed ? 1 : 0};

            transition: 200ms ease;
            transition-property: transform, opacity;
          `}
        />
        <div
          css={css`
            width: 24px;
            height: 24px;
            margin: 16px 4px;
            transform: translateY(${delayPassed ? 0 : "-50%"});
            opacity: ${delayPassed ? 1 : 0};

            transition: 200ms ease;
            transition-property: transform, opacity;
            transition-delay: 300ms;
          `}
        >
          <Image
            src={require("/res/images/behance.png")}
            alt={"behance"}
            layout={"intrinsic"}
            // css={css`
            //   filter: brightness(0) saturate(100%) invert(96%) sepia(97%)
            //     saturate(12%) hue-rotate(237deg) brightness(103%) contrast(103%);
            // `}
          />
        </div>
        <LinkedInIcon
          css={css`
            margin: 16px 4px;
            transform: translateY(${delayPassed ? 0 : "-50%"});
            opacity: ${delayPassed ? 1 : 0};

            transition: 200ms ease;
            transition-property: transform, opacity;
            transition-delay: 400ms;
          `}
        />
        <InstagramIcon
          css={css`
            margin: 16px 4px;
            transform: translateY(${delayPassed ? 0 : "-50%"});
            opacity: ${delayPassed ? 1 : 0};

            transition: 200ms ease;
            transition-property: transform, opacity;
            transition-delay: 100ms;
          `}
        />
        <EmailIcon
          css={css`
            margin: 16px 4px;
            transform: translateY(${delayPassed ? 0 : "-50%"});
            opacity: ${delayPassed ? 1 : 0};

            transition: 200ms ease;
            transition-property: transform, opacity;
            transition-delay: 200ms;
          `}
        />
        {/*<LocalPhoneIcon*/}
        {/*  css={css`*/}
        {/*    margin: 16px 4px;*/}
        {/*    transform: translateY(${delayPassed ? 0 : "-50%"});*/}
        {/*    opacity: ${delayPassed ? 1 : 0};*/}

        {/*    transition: 200ms ease;*/}
        {/*    transition-property: transform, opacity;*/}
        {/*    transition-delay: 400ms;*/}
        {/*  `}*/}
        {/*/>*/}
      </div>
    </div>
  );
}
