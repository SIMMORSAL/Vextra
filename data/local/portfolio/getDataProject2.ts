import {
  RichChunkModel,
  RichTextModel,
} from "../../models/rich-chunk/RichChunkModel";

export function getDataProject2(): RichChunkModel[] {
  const getImage = (name: string) => {
    return `/images/portfolio/scooter/${name}`;
  };
  return (
    [
      {
        minHeight: "80vh",
        backgroundImage: getImage("mars_bg.jpg"),
        // freeSpaceTop: "30vh",
        //       longTextsBottom: [
        //         {
        //           color: "#d9ae8b",
        //           size: "3em",
        //           text: `
        // # Scootify
        // `,
        //         },
        //       ],,
        bigImage: {
          path: getImage("vespia.png"),
        },
        smallImage: {
          path: getImage("vespia_name.png"),
          align: "start",
        },
      },
      {},
    ] as RichChunkModel[]
  ).map((v: RichChunkModel, i) => {
    if (v.nameId === undefined) v.nameId = i.toString();
    return v;
  });
}
