import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import EmailIcon from "@mui/icons-material/Email";

interface Props {}

export default function OneLineLink(props: Props) {
  const [beginAnimation, setBeginAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBeginAnimation(true);
    }, 50);
  }, []);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        user-select: text;
        font-weight: bold;
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
        <EmailIcon
          css={css`
            width: 24px;
            height: 24px;
            cursor: pointer;
            margin-right: ${beginAnimation ? 0 : 16}px;
            opacity: ${beginAnimation ? 1 : 0};

            transition: 140ms ease;
            transition-property: width, height, margin-right, opacity;

            :hover {
              width: 30px;
              height: 30px;
            }
          `}
        />
      </div>
      mhmitra.mh@gmail.com
    </div>
  );
}
