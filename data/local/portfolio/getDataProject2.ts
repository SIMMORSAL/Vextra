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
        nameId: "sdfsdf",
        minHeight: "200px",
        gradient: ["#fcc3a7", "#e05000a8"],
        longTextsTop: [
          {
            text: `
For two years I worked with SpaceX and some brilliant Italian engineers
and together we made a Vespa, capable of driving on Mars
`,
          },
        ],
      },
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
        //smallImage: {
        // path: getImage("vespia_name.png"),
        // align: "start",
        // },
      },
    ] as RichChunkModel[]
  ).map((v: RichChunkModel, i) => {
    if (v.nameId === undefined) v.nameId = i.toString();
    return v;
  });
}
