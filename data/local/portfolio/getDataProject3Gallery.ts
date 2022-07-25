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
        minHeight: "35vh",
        textsTop: [
            {
              align: "center",
              site: "2em",
              text: "# gallery",
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
