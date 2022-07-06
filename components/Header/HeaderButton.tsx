import React, { ReactNode, useContext, useState } from "react";
import { css } from "@emotion/react";
import { headerItemSelect, textOnWhite } from "../../res/colors";
import { useRouter } from "next/router";
import { _AppContext } from "../../helpers/providers/provider_App";
import { getActiveTab, getSubTab } from "../../tools/tools";

interface Props {
  page: string;
  justLoaded: boolean;
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  children?: ReactNode;
  homeClicked?: () => void;
}

export default function HeaderButton(p: Props) {
  const router = useRouter();
  const buttonSelected = getActiveTab(router) === p.page;
  const isTabRootSelected = getSubTab(router) === undefined;

  const [isHovering, setIsHovering] = useState(false);
  const { setNewTabSelected, setFlashContent } = useContext(_AppContext);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => {
        p.setSelectedPage(p.page);
        if (p.page === p.selectedPage && isTabRootSelected) {
          setFlashContent(true);
        } else {
          if (p.page === "home") {
            p.homeClicked();
          } else {
            setNewTabSelected(p.page);
            setTimeout(() => {
              router.push(`/${p.page}/`);
            }, 100);
          }
        }
      }}
      css={css`
        display: flex;
        flex-direction: column;
        padding: 0 8px;
        height: 60px;
        align-items: center;
        justify-content: end;
        cursor: pointer;
        opacity: ${p.justLoaded ? 0 : 1};
        transition: opacity 1000ms ease;
        transition-delay: 1500ms;
      `}
    >
      <p
        css={css`
          height: 14px;
          color: ${buttonSelected && isTabRootSelected
            ? headerItemSelect
            : textOnWhite};
          opacity: ${p.selectedPage === undefined ? 0 : 1};
          padding: ${buttonSelected || isHovering ? 9 : 0}px 16px 0;
          text-shadow: ${isHovering ? `0 0 12px ${headerItemSelect}40` : ""};

          transition: 200ms ease;
          transition-property: color, opacity, padding-top;
        `}
      >
        {p.children}
      </p>
      <div
        css={css`
          width: 100%;
          height: 1.5px;
          margin-bottom: 5px;
          background-color: #b0b0b0;
          align-self: end;
          opacity: ${p.selectedPage === undefined ? 0 : 1};

          transition: 70ms ease;
          transition-delay: 130ms;
          transition-property: transform, opacity;
        `}
      />
    </div>
  );
}
