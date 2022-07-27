import { RichChunkModel } from "../../models/rich-chunk/RichChunkModel";

export function getDataProject3Gallery(): RichChunkModel[] {
  const images = Array(18).fill(0).map((_, i) => {
      return {
        freeSpaceTop: "24px",
        bigImage: {
          path: `/images/portfolio/gallery/g${i}.jpg`,
          animation: {
            animateOnScroll: i !== 0,
            animateFrom: "bottom",
          }
        }
      } as RichChunkModel;
    }
  );
  
  return (
    [
      {
        minHeight: "20vh",
        textsTop: [
            {
              align: "center",
              site: "2em",
              text: "# Gallery",
            }
          ],
      },
      {
        backgroundColor: "#eee",
        textsTop: [
            {
              align: "center",
              text: `
One of my hobbies is climbing mountains and taking pictures. Please enjoy some of them
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
