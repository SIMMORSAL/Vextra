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
        longTextsTop: [
          {
            text: "Scootify",
          },
        ],
      },
      {
        nameId: "bigImage",
        gradient: ["#ee644e", "#b94134"],
        bigImage: {
          path: getImage("scooter_red.jpg"),
          aspectRatio: "2000/1660",
        },
      },
      {
        longTextsTop: [
          {
            text: "Scootify",
          },
        ],
      },
      {
        nameId: "sdfsdf",
        gradient: ["#fcc3a788", "#e0500088"],
        freeSpaceTop: "15vh",
        freeSpaceBottom: "15vh",
        longTextsTop: [
          {
            text: `
For two years I worked 
with  <img alt="SpaceX" src="/images/portfolio/scooter/spacex_logo.png" width="100px"/> and 
some brilliant Italian engineers
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
          animation: {
            animateOnScroll: true,
            animateFrom: "right",
          },
        },
      },
      {
        backgroundColor: "#ee644e",
        textColor: "#fff",
        freeSpaceTop: "50px",
        freeSpaceBottom: "70px",
        longTextsTop: [
          {
            text: `
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida facilisis urna et scelerisque. Nulla dignissim ac eros ut lobortis. Donec eleifend quis nisi in fringilla. Integer rhoncus, leo vulputate dictum elementum, odio velit condimentum massa, a eleifend orci tellus sed ligula. Duis convallis volutpat augue, id volutpat augue porttitor eu. Donec risus mi, semper non dictum finibus, efficitur nec nunc. Sed iaculis odio nec efficitur posuere. Aliquam porta lectus orci, vel cursus sem laoreet sit amet. Ut viverra nulla at scelerisque aliquam. Duis venenatis arcu nunc, sit amet luctus augue egestas sit amet. Sed eget est est. Proin quis lectus eget magna volutpat consequat at luctus ex. Quisque posuere iaculis vestibulum. Phasellus non interdum nibh. Ut nisi orci, cursus nec euismod at, pharetra quis massa."

This product comes in a variety of colors
`,
          },
        ],
      },
      {
        // freeSpaceTop: "300px",
        freeSpaceBottom: "500px",
        backgroundImage: getImage("vespia_purple.jpg"),
        longTextsTop: [
          {
            align: "center",
            text: "I like the purple color more than red and blue combined",
            color: "#fff",
          },
        ],
      },
    ] as RichChunkModel[]
  ).map((v: RichChunkModel, i) => {
    if (v.nameId === undefined) v.nameId = i.toString();
    return v;
  });
}
