import {
  RichChunkModel,
  RichTextModel,
} from "../../models/rich-chunk/RichChunkModel";

export function getDataProject2Scootify(): RichChunkModel[] {
  const getImagePath = (name: string) => {
    return `/images/portfolio/scooter/${name}`;
  };
  return (
    [
      {
        nameId: "project-name",
        textColor: "#e3d9d9",
        textsTop: [
          {
            align: "center",
            text: "# Scootify",
          },
          {
            align: "center",
            animation: {
              animateOnScroll: false,
              duration: 3000,
            },
            text: `
Scootify is protected by Carbon-Ceramic and runs on Quantized-hydroxium
`,
          },
        ],
      },
      {
        gradient: ["#ee644e", "#b94134"],
        bigImage: {
          path: getImagePath("scootify_red.jpg"),
          aspectRatio: "2000/1660",
        },
      },
      {
        minHeight: "400px",
        textsTop: [
          {
            color: "rgba(255,255,255,0.91)",
            text: `
## Structure:

Protected by **Carbon-Ceramic**, Scootify is able to withstand 10,000k N/m<sup>3</sup> on direct impact, which makes it virtually indestructable.

## Fuel:

Scootify runs on **Quantized-hydroxium** which is such a potent energy source that it
gives minor floating abilities to scootify. This makes this scooter drivable even when
stranded by death.


## Customizable:

The way production plans for this product is planned, makes us 
able to have the finished product in multiple colors
`,
          },
        ],
      },
      {
        smallImage: {
          path: getImagePath("scootify_green.jpg"),
          aspectRatio: "1000/680",
          animation: {
            animateOnScroll: true,
          },
        },
      },
      {
        freeSpaceTop: "20px",
        smallImage: {
          path: getImagePath("scootify_yellow.jpg"),
          aspectRatio: "1000/680",
          animation: {
            animateOnScroll: true,
          },
        },
      },
      {
        freeSpaceBottom: "70px",
        textsTop: [
          {
            color: "rgba(255,255,255,0.91)",
            text: `
### Other notable features
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida facilisis urna et scelerisque. Nulla dignissim ac eros ut lobortis. Donec eleifend quis nisi in fringilla. Integer rhoncus, leo vulputate dictum elementum, odio velit condimentum massa, a eleifend orci tellus sed ligula. Duis convallis volutpat augue, id volutpat augue porttitor eu. Donec risus mi, semper non dictum finibus, efficitur nec nunc. Sed iaculis odio nec efficitur posuere. Aliquam porta lectus orci, vel cursus sem laoreet sit amet. Ut viverra nulla at scelerisque aliquam. Duis venenatis arcu nunc, sit amet luctus augue egestas sit amet. Sed eget est est. Proin quis lectus eget magna volutpat consequat at luctus ex. Quisque posuere iaculis vestibulum. Phasellus non interdum nibh. Ut nisi orci, cursus nec euismod at, pharetra quis massa.
`,
          },
        ],
      },
      {
        backgroundColor: "#212121",
        minHeight: "40vh",
        textColor: "white",
        mediaBar: {
          leftImage: { path: getImagePath("scootify_redOnBlack.jpg") },
          texts: [
            {
              align: "center",
              animation: {
                animateOnScroll: true,
                animateFrom: "right",
              },
              text: `
### Look On Fleek
`,
            },
          ],
        },
      },
      {
        backgroundColor: "#101010",
        minHeight: "80vh",
        textColor: "white",
        textsBottom: [
          {
            align: "center",
            text: `
That's not all I've brought to life in the world of transportation
`,
          },
        ],
      },
      {
        gradient: ["#fcc3a788", "#e0500088"],
        freeSpaceTop: "15vh",
        freeSpaceBottom: "15vh",
        textsTop: [
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
      },
      {
        minHeight: "80vh",
        backgroundImage: getImagePath("mars_bg.jpg"),
        bigImage: {
          path: getImagePath("vespia.png"),
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
        textsTop: [
          {
            text: `
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida facilisis urna et scelerisque. Nulla dignissim ac eros ut lobortis. Donec eleifend quis nisi in fringilla. Integer rhoncus, leo vulputate dictum elementum, odio velit condimentum massa, a eleifend orci tellus sed ligula. Duis convallis volutpat augue, id volutpat augue porttitor eu. Donec risus mi, semper non dictum finibus, efficitur nec nunc. Sed iaculis odio nec efficitur posuere. Aliquam porta lectus orci, vel cursus sem laoreet sit amet. Ut viverra nulla at scelerisque aliquam. Duis venenatis arcu nunc, sit amet luctus augue egestas sit amet. Sed eget est est. Proin quis lectus eget magna volutpat consequat at luctus ex. Quisque posuere iaculis vestibulum. Phasellus non interdum nibh. Ut nisi orci, cursus nec euismod at, pharetra quis massa."

  &minus; Cisero

\` \`  
This product comes in a variety of colors as well
`,
          },
        ],
      },
      {
        // freeSpaceTop: "300px",
        freeSpaceBottom: "800px",
        backgroundImage: getImagePath("vespia_purple.jpg"),
        textsTop: [
          {
            align: "end",
            text: "**I like the purple color**  \n**more than red and blue combined**",
            color: "#fff",
          },
        ],
      },
      {
        freeSpaceTop: "100px",
        freeSpaceBottom: "200px",
        gradient: ["#aa64d5", "#a948eb"],
        textColor: "#fff",
        textsTop: [
          {
            text: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida facilisis urna et scelerisque. Nulla dignissim ac eros ut lobortis. Donec eleifend quis nisi in fringilla. Integer rhoncus, leo vulputate dictum elementum, odio velit condimentum massa, a eleifend orci tellus sed ligula. Duis convallis volutpat augue, id volutpat augue porttitor eu. Donec risus mi, semper non dictum finibus, efficitur nec nunc. Sed iaculis odio nec efficitur posuere. Aliquam porta lectus orci, vel cursus sem laoreet sit amet. Ut viverra nulla at scelerisque aliquam. Duis venenatis arcu nunc, sit amet luctus augue egestas sit amet. Sed eget est est. Proin quis lectus eget magna volutpat consequat at luctus ex. Quisque posuere iaculis vestibulum. Phasellus non interdum nibh. Ut nisi orci, cursus nec euismod at, pharetra quis massa.
`,
          },
        ],
      },

      {
        freeSpaceTop: "20px",
        gradient: ["#a64bef", "#a34cf1"],
        textColor: "#fff",
        smallImage: {
          path: getImagePath("vespia_purpleSmall.jpg"),
          aspectRatio: "1000/680",
          animation: {
            animateOnScroll: true,
            animateFrom: "left",
          },
        },
      },

      {
        gradient: ["#aa64d5", "#a948eb"],
        textColor: "#fff",
        textsBottom: [
          {
            text: `
Donec eleifend quis nisi in fringilla. Integer rhoncus, leo vulputate dictum elementum, odio velit condimentum massa, a eleifend orci tellus sed ligula. Duis convallis volutpat augue, id volutpat augue porttitor eu. Donec risus mi, semper non dictum finibus, efficitur nec nunc. Sed iaculis odio nec efficitur posuere. Aliquam porta lectus orci, vel cursus sem laoreet sit amet. Ut viverra nulla at scelerisque aliquam. Duis venenatis arcu nunc, sit amet luctus augue egestas sit amet. Sed eget est est. Proin quis lectus eget magna volutpat consequat at luctus ex. Quisque posuere iaculis vestibulum. Phasellus non interdum nibh. Ut nisi orci, cursus nec euismod at.
`,
          },
        ],
      },
      {
        backgroundImage: getImagePath("vespia_boop.jpg"),
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
        textsTop: [
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
