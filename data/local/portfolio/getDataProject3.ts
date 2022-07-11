import { RichChunkModel } from "../../models/RichChunkModel";

export function getDataProject3(): RichChunkModel[] {
  return [
    {
      nameId: "comingSoon",
      smallImage: {
        path: "/images/coming_soon.jpg",
        aspectRatio: "360/196",
      },
    },
    {
      nameId: "comingSoonText",
      longText: [
        {
          textAlign: "center",
          text: "## More of my work will be on display soon 😊",
        },
      ],
    },
  ];
}
