import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import EmailIcon from "@mui/icons-material/Email";
import { ContactGroup } from "../../data/models/contactGroup";

interface Props {
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
          margin-right: 8px;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row-reverse;
          `}
        >
          <div>
            <a
              target={_target}
              href={props.contact.links[0].href}
              rel={"noreferrer"}
            >
              <i
                className={props.contact.links[0].icon}
                css={css`
                  width: 30px;
                  //height: 30px;
                  cursor: pointer;
                  opacity: ${beginAnimation ? 1 : 0};
                  margin: 16px 0;
                  padding: 0;
                  //background-color: red;
                  //background-color: red;
                  transform: translateX(${beginAnimation ? 0 : "-50%"});
                  text-align: center;
                  font-size: 150%;

                  transition: 140ms ease;
                  transition-property: width, height, margin-top, opacity, transform,
                    font-size, color;

                  :hover {
                    transform: scale(1.3);
                    width: 42px;
                  }
                `}
              />
            </a>
          </div>
        </div>
        {/*<a*/}
        {/*  href={props.contact.links[0].href}*/}
        {/*  target={_target}*/}
        {/*  css={css`*/}
        {/*    display: flex;*/}
        {/*    justify-content: center;*/}
        {/*    align-items: center;*/}
        {/*    width: fit-content;*/}

        {/*    transition: 140ms ease;*/}
        {/*    transition-property: width, height, margin-right, opacity, transform;*/}
        {/*  `}*/}
        {/*  rel="noreferrer"*/}
        {/*>*/}
        {/*  <i*/}
        {/*    className={props.contact.links[0].icon}*/}
        {/*    css={css`*/}
        {/*      width: 24px;*/}
        {/*      cursor: pointer;*/}
        {/*      opacity: ${beginAnimation ? 1 : 0};*/}
        {/*      margin-right: ${beginAnimation ? 0 : 16}px;*/}
        {/*      text-align: right;*/}
        {/*      font-size: 24px;*/}
        {/*      transform: scale(1.1);*/}

        {/*      transition: 140ms ease;*/}
        {/*      transition-property: width, height, margin-right, opacity, transform,*/}
        {/*        font-size;*/}

        {/*      :hover {*/}
        {/*        width: 30px;*/}
        {/*        font-size: 30px;*/}
        {/*        //transform: scale(1.47);*/}
        {/*      }*/}
        {/*    `}*/}
        {/*  />*/}
        {/*</a>*/}
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
