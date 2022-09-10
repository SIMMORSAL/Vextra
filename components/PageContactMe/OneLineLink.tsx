import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { ContactGroup } from "../../data/models/local-data/contactGroup";

interface Props {
  contact: ContactGroup;
}

export default function OneLineLink(props: Props) {
  const [beginAnimation, setBeginAnimation] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setBeginAnimation(true);
    }, 350);
    return () => {
      clearTimeout(t);
    };
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
          <a target={_target} href={props.contact.links[0].href} rel={"noreferrer"}>
            <i
              className={props.contact.links[0].icon}
              css={css`
                width: 30px;
                cursor: pointer;
                opacity: ${beginAnimation ? 1 : 0};
                margin: 16px 0;
                padding: 0;
                transform: translateX(${beginAnimation ? 0 : "-50%"});
                text-align: center;
                font-size: 150%;

                transition: 140ms ease;
                transition-property: width, transform, opacity;

                :hover {
                  transform: scale(1.3) translateX(0.1em);
                  width: 42px;
                }
              `}
            />
          </a>
        </div>
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
