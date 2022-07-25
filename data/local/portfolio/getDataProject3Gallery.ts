import { RichChunkModel } from "../../models/rich-chunk/RichChunkModel";

export function getDataProject3Gallery(): RichChunkModel[] {
  const images = Array(9).fill(0).map((_, i) => {
      return {
        freeSpaceBottom: "24px",
        smallImage: {
          path: `/images/portfolio/gallery/g${i}.jpg`,
          aspectRatio: "1",
          animation: {
            animateOnScroll: true,
            animateFrom: "bottom",
          }
        }
      } as RichChunkModel;
    }
  );
  
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
      ...images,
      {
        minHeight: "30vh",
      },
    ] as RichChunkModel[]
  ).map((v: RichChunkModel, i) => {
    if (v.nameId === undefined) v.nameId = i.toString();
    return v;
  });
}
