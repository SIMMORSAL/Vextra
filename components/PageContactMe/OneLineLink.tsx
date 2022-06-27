import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import EmailIcon from "@mui/icons-material/Email";
import { ContactGroup } from "../../data/models/contactGroup";

interface Props {
  // text: string;
  // href: string;
  contact: ContactGroup;
}

export default function OneLineLink(props: Props) {
  const [beginAnimation, setBeginAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBeginAnimation(true);
    }, 50);
  }, []);

  const _target =
    props.contact.links[0].href.startsWith("tel") ||
    props.contact.links[0].href.startsWith("mailto")
      ? "_self"
      : "_blank";

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        font-weight: bold;
        margin-bottom: 8px;
        text-align: center;
      `}
    >
      <div
        css={css`
          width: 30px;
          height: 30px;
          margin-right: 12px;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
        `}
      >
        <a
          href={props.contact.links[0].href}
          target={_target}
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: fit-content;

            transition: 140ms ease;
            transition-property: width, height, margin-right, opacity, transform;
          `}
          rel="noreferrer"
        >
          <i
            className={props.contact.links[0].icon}
            css={css`
              width: 24px;
              cursor: pointer;
              opacity: ${beginAnimation ? 1 : 0};
              margin-right: ${beginAnimation ? 0 : 16}px;
              text-align: right;
              font-size: 24px;
              transform: scale(1.1);

              transition: 140ms ease;
              transition-property: width, height, margin-right, opacity, transform,
                font-size;

              :hover {
                width: 30px;
                font-size: 30px;
                //transform: scale(1.47);
              }
            `}
          />
          {/*<EmailIcon*/}
          {/*  css={css`*/}
          {/*    width: 24px;*/}
          {/*    height: 24px;*/}
          {/*    cursor: pointer;*/}
          {/*    margin-right: ${beginAnimation ? 0 : 16}px;*/}
          {/*    opacity: ${beginAnimation ? 1 : 0};*/}

          {/*    transition: 140ms ease;*/}
          {/*    transition-property: width, height, margin-right, opacity;*/}

          {/*    :hover {*/}
          {/*      width: 30px;*/}
          {/*      height: 30px;*/}
          {/*    }*/}
          {/*  `}*/}
          {/*/>*/}
        </a>
      </div>
      <div
        css={css`
          user-select: text;
          margin-bottom: 0.2em;
        `}
      >
        {props.contact.socialHandle}
      </div>
    </div>
  );
}
