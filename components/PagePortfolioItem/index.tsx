import React from "react";
import { css } from "@emotion/react";
import RichContent from "../RichContent";
import { RichChunkModel } from "../../data/models/rich-content/RichChunkModel";
import { headerHeight } from "../Header";

interface Props {}

export default function PagePortfolioItem(p: Props) {
  const data: RichChunkModel[] = [
    {
      name: "asdf",
      longTextTop: [
        {
          textAlign: "center",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
      ],
      bigImage:
        "https://th.bing.com/th/id/R.58cc46069f9c1bfec000c83e79721d31?rik=V6%2bwTqIO36Y40g&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f05%2f24%2f374644-path-landscape-trees.jpg&ehk=4r8HqHCVUOTPA4f19szEL4vOhfNMFE4FPAQUSSsOg%2bA%3d&risl=&pid=ImgRaw&r=0",

      longTextMiddle: [
        {
          textAlign: "start",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
        {
          textAlign: "end",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
        {
          textAlign: "center",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
        {
          textAlign: "center",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
        {
          textAlign: "center",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
        {
          textAlign: "center",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
        {
          textAlign: "center",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
      ],
    },
  ];

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: ${headerHeight}px;
      `}
    >
      <RichContent data={data} />
    </div>
  );
}
