import React, { ReactNode } from "react";
import { css } from "@emotion/react";
import { headerItemSelect, textOnWhite } from "../../res/colors";
import { useRouter } from "next/router";

interface Props {
  page: string;
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  children?: ReactNode;
}

export default function HeaderButton(props: Props) {
  const router = useRouter();
  const buttonSelected = props.selectedPage === props.page;
  console.log(`11111  HeaderButton ${props.page}:  ${props.selectedPage}`);
  return (
    <a
    // href={props.page !== "home" ? `/${props.page}/` : undefined}
    >
      <div
        onClick={() =>
          setTimeout(() => {
            if (props.page !== "home") router.push(`/${props.page}/`);
          }, 100)
        }
        css={css`
          display: flex;
          flex-direction: column;
          padding: 0 8px;
          //width: 130px;
          height: 60px;
          align-items: center;
          justify-content: end;
        `}
      >
        <p
          onClick={() => props.setSelectedPage(props.page)}
          css={css`
            cursor: pointer;
            //margin: 0 16px;
            height: 14px;
            color: ${buttonSelected ? headerItemSelect : textOnWhite};
            opacity: ${props.selectedPage === undefined ? 0 : 1};
            padding: ${buttonSelected ? 6 : 0}px 16px 0;

            transition: 200ms ease;
            transition-property: color, text-shadow, transform, opacity, font-weight,
              font-size, margin-bottom, margin-top, padding-top;

            :hover {
              color: ${headerItemSelect};
              text-shadow: 0 0 12px ${headerItemSelect}40;
              //margin-bottom: 6px;
              padding-top: 6px;
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
