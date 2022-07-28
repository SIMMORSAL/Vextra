import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { headerHeight } from "../Header";
import SharedHandleLinks from "./SharedHandleLinks";
import OneLineLink from "./OneLineLink";
import { _AppContext } from "../../helpers/providers/provider_App";
import { useRouter } from "next/router";
import { getActiveTab } from "../../helpers/tools";
import { getContacts } from "../../data/local/dataContactPage";

interface Props {}

export default function PageContactMe(props: Props) {
  const router = useRouter();

  const { newTabSelected, setNewTabSelected } = useContext(_AppContext);

  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const contacts = getContacts();

  useEffect(() => {
    setNewTabSelected(getActiveTab(router));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setFadeIn(true);
    }, 50);
    return () => {
      clearTimeout(t);
    };
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
      {contacts.map((contact) => {
        if (contact.links.length === 1) {
          return <OneLineLink key={contact.socialHandle} contact={contact} />;
        }
        return (
          <SharedHandleLinks
            key={contact.socialHandle}
            begin={true}
            contact={contact}
          />
        );
      })}
    </div>
  );
}
