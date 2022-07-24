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
            align: "center",
            text: "# Scootify",
            color: "#e3d9d9",
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
        nameId: "sdfsdf",
        gradient: ["#fcc3a788", "#e0500088"],
        freeSpaceTop: "15vh",
        freeSpaceBottom: "15vh",
        longTextsTop: [
          {
            text: `
For two years I worked 
with  <img alt="SpaceX" src="/images/portfolio/scooter/spacex_logo.png" width="100px"/> and 
some brilliant Italian engineers,
and together we made a Vespa capable of driving on Mars, 
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
        textColor: "#fff",
        freeSpaceTop: "50px",
        freeSpaceBottom: "70px",
        longTextsTop: [
          {
            text: `
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida facilisis urna et scelerisque. Nulla dignissim ac eros ut lobortis. Donec eleifend quis nisi in fringilla. Integer rhoncus, leo vulputate dictum elementum, odio velit condimentum massa, a eleifend orci tellus sed ligula. Duis convallis volutpat augue, id volutpat augue porttitor eu. Donec risus mi, semper non dictum finibus, efficitur nec nunc. Sed iaculis odio nec efficitur posuere. Aliquam porta lectus orci, vel cursus sem laoreet sit amet. Ut viverra nulla at scelerisque aliquam. Duis venenatis arcu nunc, sit amet luctus augue egestas sit amet. Sed eget est est. Proin quis lectus eget magna volutpat consequat at luctus ex. Quisque posuere iaculis vestibulum. Phasellus non interdum nibh. Ut nisi orci, cursus nec euismod at, pharetra quis massa."

  - Cisero

\` \`  
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
      {
        freeSpaceTop: "100px",
        freeSpaceBottom: "200px",
        gradient: ["#aa64d5", "#a948eb"],
        textColor: "#fff",
        longTextsTop: [
          {
            text: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida facilisis urna et scelerisque. Nulla dignissim ac eros ut lobortis. Donec eleifend quis nisi in fringilla. Integer rhoncus, leo vulputate dictum elementum, odio velit condimentum massa, a eleifend orci tellus sed ligula. Duis convallis volutpat augue, id volutpat augue porttitor eu. Donec risus mi, semper non dictum finibus, efficitur nec nunc. Sed iaculis odio nec efficitur posuere. Aliquam porta lectus orci, vel cursus sem laoreet sit amet. Ut viverra nulla at scelerisque aliquam. Duis venenatis arcu nunc, sit amet luctus augue egestas sit amet. Sed eget est est. Proin quis lectus eget magna volutpat consequat at luctus ex. Quisque posuere iaculis vestibulum. Phasellus non interdum nibh. Ut nisi orci, cursus nec euismod at, pharetra quis massa.

Donec eleifend quis nisi in fringilla. Integer rhoncus, leo vulputate dictum elementum, odio velit condimentum massa, a eleifend orci tellus sed ligula. Duis convallis volutpat augue, id volutpat augue porttitor eu. Donec risus mi, semper non dictum finibus, efficitur nec nunc. Sed iaculis odio nec efficitur posuere. Aliquam porta lectus orci, vel cursus sem laoreet sit amet. Ut viverra nulla at scelerisque aliquam. Duis venenatis arcu nunc, sit amet luctus augue egestas sit amet. Sed eget est est. Proin quis lectus eget magna volutpat consequat at luctus ex. Quisque posuere iaculis vestibulum. Phasellus non interdum nibh. Ut nisi orci, cursus nec euismod at.
`,
          },
        ],
      },
      {
        backgroundImage: getImage("vespia_boop.jpg"),
        minHeight: "70vh",
        mediaBar: {
          texts: [
            {
              text: "### BEEP",
              color: "#bc9141",
              animation: {
                animateOnScroll: true,
                animateFrom: "right",
                duration: 500,
              },
            },
            {
              color: "#bc9141",
              text: "### BEEEEEP",
              animation: {
                animateOnScroll: true,
                animateFrom: "right",
                duration: 1100,
              },
            },
          ],
        },
      },
      {
        minHeight: "100vh",
        textColor: "#fff",
        backgroundColor: "#b53f32",
        longTextsTop: [
          {
            animation: {
              animateOnScroll: true,
              animateFrom: "top",
              translateDistance: 10,
            },
            text: `
Special thanks to

#### <a href="https://www.freepik.com/photos/moped">Rochak Shukla</a> for Scootify and Vespia images
#### <a href="https://unsplash.com/@marekpiwnicki">Marek Piwnicki</a> for the glimpse into Mars
`,
          },
        ],
      },
    ] as RichChunkModel[]
  ).map((v: RichChunkModel, i) => {
    if (v.nameId === undefined) v.nameId = i.toString();
    return v;
  });
}
