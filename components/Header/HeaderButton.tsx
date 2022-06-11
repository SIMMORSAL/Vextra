import React, { ReactNode, useContext, useState } from "react";
import { css } from "@emotion/react";
import { headerItemSelect, textOnWhite } from "../../res/colors";
import { useRouter } from "next/router";
import { _AppContext } from "../../data/providers/provider_App";
import { getActiveTab } from "../../tools/tools";

interface Props {
  page: string;
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  children?: ReactNode;
  homeClicked?: () => void;
}

export default function HeaderButton(props: Props) {
  const router = useRouter();
  const buttonSelected = getActiveTab(router) === props.page;
  // const buttonSelected = selectedPage === props.page;
  const [isHovering, setIsHovering] = useState(false);
  const { setNewTabSelected, setFlashContent } = useContext(_AppContext);

  return (
    <a
    // href={props.page !== "home" ? `/${props.page}/` : undefined}
    >
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => {
          props.setSelectedPage(props.page);
          if (props.page === props.selectedPage) {
            setFlashContent(true);
          } else {
            if (props.page === "home") {
              props.homeClicked();
            } else {
              setNewTabSelected(props.page);
              setTimeout(() => {
                router.push(`/${props.page}/`);
              }, 100);
            }
          }
        }}
        css={css`
          display: flex;
          flex-direction: column;
          padding: 0 8px;
          //width: 130px;
          height: 60px;
          align-items: center;
          justify-content: end;
          cursor: pointer;
        `}
      >
        <p
          css={css`
            //margin: 0 16px;
            height: 14px;
            color: ${buttonSelected ? headerItemSelect : textOnWhite};
            opacity: ${props.selectedPage === undefined ? 0 : 1};
            padding: ${buttonSelected || isHovering ? 9 : 0}px 16px 0;
            text-shadow: ${isHovering ? `0 0 12px ${headerItemSelect}40` : ""};

            transition: 200ms ease;
            transition-property: color, opacity, padding-top;

            :hover {
              //color: ${headerItemSelect};
              // text-shadow: 0 0 12px ${headerItemSelect}40;
              //margin-bottom: 6px;
              //padding-top: 6px;
              //margin-bottom: -6px;
            }
          `}
        >
          {props.children}
        </p>
        <div
          css={css`
            width: 100%;
            height: 2px;
            margin-bottom: 5px;
            background-color: #b0b0b0;
            align-self: end;
            opacity: ${props.selectedPage === undefined ? 0 : 1};

            transition: 70ms ease;
            transition-delay: 130ms;
            transition-property: transform, opacity;
          `}
        />
      </div>
    </a>
  );
}
