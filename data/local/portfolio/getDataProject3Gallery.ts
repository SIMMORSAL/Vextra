import { RichChunkModel } from "../../models/rich-chunk/RichChunkModel";

export function getDataProject3Gallery(): RichChunkModel[] {
  return (
    [
      {
        nameId: "spaceAtTop",
        freeSpaceBottom: "25vh",
      },
      {
        nameId: "comingSoon",
        smallImage: {
          path: "https://www.instagram.com/p/CBV0FrEnM5X/?utm_source=ig_web_copy_link",
          aspectRatio: "360/196",
        },
        textsTop: [
            {
              text: `
`,
            }
          ],
      },
    ] as RichChunkModel[]
  ).map((v: RichChunkModel, i) => {
    if (v.nameId === undefined) v.nameId = i.toString();
    return v;
  });
}
