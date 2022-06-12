import React from "react";
import { css } from "@emotion/react";
import { headerHeight } from "../Header";
import EmailIcon from "@mui/icons-material/Email";
import SharedIdLinks from "./SharedIdLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {}

export default function ContactMeContent(props: Props) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        //border: 1px solid #484848;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: ${headerHeight}px 24px 0px;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          user-select: text;
          font-weight: bold;
          text-align: center;
        `}
      >
        <EmailIcon
          css={css`
            margin-right: 12px;
          `}
        />
        mhmitra.mh@gmail.com
      </div>
      <div
        css={css`
          margin-top: 16px;
          user-select: text;
          font-weight: bold;
          text-align: center;
        `}
      >
        @mhmitramh
      </div>
      <SharedIdLinks begin={true} />

      <FontAwesomeIcon icon={["fal", "coffee"]} />
      <FontAwesomeIcon icon={["far", "coffee"]} />
      <FontAwesomeIcon icon={["fas", "coffee"]} />
      <FontAwesomeIcon icon="coffee" />
      <FontAwesomeIcon icon={["fab", "github"]} />
    </div>
  );
}
