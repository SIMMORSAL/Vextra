import React from "react";
import { css } from "@emotion/react";
import { getAchievements } from "../../data/local/dataAchievements";
import { Achievement } from "../../data/models/achievement";

interface Props {}

export default function Achievements(props: Props) {
  const achievements = getAchievements();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: calc(100% - 24px);
        max-width: 476px;
        background-color: #eaeaea;
      `}
    >
      {achievements.map((value) => {
        return <Ach key={value.groupName} ach={value} />;
      })}
    </div>
  );
}

function Ach({ ach }: { ach: Achievement }) {
  return (
    <div key={ach.groupName}>
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
        <h4
          css={css`
            color: #333333;
            margin: 0 0 0 12px;
          `}
        >
          {ach.groupName}
        </h4>
      </div>
      {ach.items.map((value) => {
        return (
          <p
            key={value.title}
            css={css`
              padding: 0 12px;
            `}
          >
            {value.title}
            <span
              css={css`
                font-weight: bold;
                color: #646464;
                margin-left: 12px;
              `}
            >
              {value.data}
            </span>
          </p>
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
