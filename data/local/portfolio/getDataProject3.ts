import { RichChunkModel } from "../../models/rich-chunk/RichChunkModel";

export function getDataProject3(): RichChunkModel[] {
  return [
    {
      nameId: "spaceAtTop",
      freeSpaceBottom: "25vh",
    },
    {
      nameId: "comingSoon",
      smallImage: {
        path: "/images/coming_soon.jpg",
        aspectRatio: "360/196",
      },
    },
    {
      nameId: "comingSoonText",
      longTextsTop: [
        {
          align: "center",
          text: "## More of my work will be on display soon 😊",
        },
      ],
    },
  ] as RichChunkModel[];
}
