import React, { ReactNode, useContext, useState } from "react";
import { css } from "@emotion/react";
import {
  colorHeaderItem,
  colorHeaderItemSelect,
  colorElements,
} from "../../data/colors";
import { useRouter } from "next/router";
import { _AppContext } from "../../helpers/providers/provider_App";
import { changePage, getActiveTab, getSubTab } from "../../helpers/tools";

interface Props {
  page: string;
  color: string;
  justLoaded: boolean;
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  children?: ReactNode;
  homeClicked?: () => void;
  showDev: boolean;
}

export default function HeaderButton(p: Props) {
  const router = useRouter();
  const buttonSelected = getActiveTab(router) === p.page;
  const isTabRootSelected = getSubTab(router) === undefined;

  const [isHovering, setIsHovering] = useState(false);
  const { setNewTabSelected, setFlashContent, setTabChangeRequested } =
    useContext(_AppContext);

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
            // setTimeout(() => {
            //   router.push(`/${p.page}/`);
            // }, 100);
            changePage(router, `/${p.page}/`, 400, setTabChangeRequested);
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
        opacity: ${p.justLoaded || p.showDev ? 0 : 1};
        transition: opacity ${p.showDev ? 600 : 1000}ms ease;
        transition-delay: ${p.showDev ? 0 : 500}ms;
      `}
    >
      <p
        css={css`
          height: 12px;
          font-family: Righteous, cursive;
          color: ${buttonSelected && isTabRootSelected && p.color === colorHeaderItem
            ? colorHeaderItemSelect
            : p.color.length === 7
            ? p.color + "f0"
            : p.color};
          opacity: ${p.selectedPage === undefined ? 0 : 1};
          padding: ${buttonSelected || isHovering ? 9 : 0}px 16px 0;
          text-shadow: ${isHovering ? `0 0 12px ${colorHeaderItemSelect}40` : ""};

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
          background-color: ${p.color}88;
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
