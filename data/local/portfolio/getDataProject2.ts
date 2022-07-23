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
        nameId: "bigImage",
        gradient: ["#ee644e", "#b94134"],
        bigImage: {
          path: getImage("scooter_red.jpg"),
          aspectRatio: "2000/1660",
        },
      },
      {
        nameId: "sdfsdf",
        gradient: ["#fcc3a788", "#e0500088"],
        freeSpaceTop: "15vh",
        freeSpaceBottom: "15vh",
        longTextsTop: [
          {
            text: `
For two years I worked with SpaceX and some brilliant Italian engineers
and together we made a Vespa, capable of driving on Mars, 
and we named it 
`,
          },
          {
            align: "center",
            size: "2em",
            color: "#b23500",
            text: `<i class="fa-solid fa-shuttle-space"></i> **VESPIA**`,
          },
        ],
        // smallImage: {
        //   path: getImage("vespia_name.png"),
        //   align: "start",
        // },
      },
      {
        minHeight: "80vh",
        backgroundImage: getImage("mars_bg.jpg"),
        bigImage: {
          path: getImage("vespia.png"),
        },
      },
    ] as RichChunkModel[]
  ).map((v: RichChunkModel, i) => {
    if (v.nameId === undefined) v.nameId = i.toString();
    return v;
  });
}
