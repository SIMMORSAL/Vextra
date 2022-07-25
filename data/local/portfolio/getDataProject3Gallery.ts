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
          path: "https://www.instagram.com/p/CBV0FrEnM5X/media/?size=l",
        },
        textsTop: [
            {
              text: `
`,
            }
          ],
      },
      {
        smallImage: {
          path: "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/103686242_258332228602316_3789109940983767210_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=NoHGv70LxlAAX9gzGKU&edm=AGenrX8BAAAA&ccb=7-5&ig_cache_key=MjMyOTk5NzQ3MDQ5ODM0NDUzNQ%3D%3D.2-ccb7-5&oh=00_AT9NK5bVxJqNXfhrJF1SsZtPPvTQ1ny9W-Nr7vJzEV9Gjg&oe=62E65679&_nc_sid=5eceaa",
        }
      }
    ] as RichChunkModel[]
  ).map((v: RichChunkModel, i) => {
    if (v.nameId === undefined) v.nameId = i.toString();
    return v;
  });
}
