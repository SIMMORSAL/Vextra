import React from "react";
import { css } from "@emotion/react";
import { headerHeight } from "../Header";
import EmailIcon from "@mui/icons-material/Email";

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
        padding: ${headerHeight}px 24px 150px;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          user-select: text;
          height: 100%;
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
    </div>
  );
}
