import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { headerHeight } from "../Header";
import EmailIcon from "@mui/icons-material/Email";
import SharedIdLinks from "./SharedIdLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OneLineLink from "./OneLineLink";
import { _AppContext } from "../../data/providers/provider_App";
import { useRouter } from "next/router";
import { getActiveTab } from "../../tools/tools";

interface Props {}

export default function ContactMeContent(props: Props) {
  const router = useRouter();

  const { newTabSelected } = useContext(_AppContext);
  const [fadeOut, setFadeOut] = useState(false);

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 50);
  }, []);

  useEffect(() => {
    if (newTabSelected !== getActiveTab(router)) setFadeOut(true);
    else setFadeOut(false);
  }, [newTabSelected, router]);

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
        opacity: ${fadeIn && !fadeOut ? 1 : 0};

        transition: ${fadeOut ? 100 : 200}ms ease;
        transition-property: opacity;
      `}
    >
      <OneLineLink />
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
    </div>
  );
}
