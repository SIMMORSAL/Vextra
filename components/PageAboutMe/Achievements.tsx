import React from "react";
import { css } from "@emotion/react";
import { getHistory } from "../../data/local/dataAboutMePage";
import { History } from "../../data/models/local-data/history";
import MarkDown from "../RichContent/Markdown/Markdown";

interface Props {}

export default function Achievements(props: Props) {
  const achievements = getHistory();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: calc(100% - 24px);
        max-width: 476px;
        background-color: #efefef;
      `}
    >
      {achievements.map((value) => {
        return <Ach key={value.groupTitle} ach={value} />;
      })}
    </div>
  );
}

function Ach({ ach }: { ach: History }) {
  return (
    <div key={ach.groupTitle}>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 0;
          padding: 8px 12px;
          background-color: #dcdcdc;
        `}
      >
        <i
          className={ach.icon}
          css={css`
            height: 1em;
          `}
        />
        <p
          css={css`
            color: #333333;
            margin: 0 0 0 12px;
            font-weight: bold;
            font-size: 0.93em;
          `}
        >
          {ach.groupTitle}
        </p>
      </div>
      {ach.items.map((value) => {
        return (
          <div
            key={value.title}
            css={css`
              margin-top: 18px;
              user-select: text;
            `}
          >
            <div>
              <p
                css={css`
                  padding: 0 12px;
                  font-weight: 600;
                  color: #4d4d4d;
                  font-size: 1.07em;
                `}
              >
                {value.title}
                <span
                  css={css`
                    font-size: 0.9em;
                    font-weight: lighter;
                    color: #646464;
                    margin-left: 12px;
                    user-select: none;
                  `}
                >
                  {value.date}
                </span>
              </p>
            </div>
            <MarkDown
              text={value.description}
              style={css`
                padding: 0 12px;
                font-size: 0.9em;
                margin-top: -4px;
                color: #151515;
              `}
            />
          </div>
        );
      })}
      <div
        css={css`
          height: 24px;
        `}
      />
    </div>
  );
}
