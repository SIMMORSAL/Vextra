import { RichChunkModel } from "../../models/rich-chunk/RichChunkModel";
import { headerHeight } from "../../../components/Header";

export function getDataProject1XPhone(): RichChunkModel[] {
  const getImagePath = (name: string) => {
    return `/images/portfolio/xphone/${name}`;
  };

  const getVideoPath = (name: string) => {
    return `/videos/portfolio/xphone/${name}`;
  };

  return (
    [
      {
        nameId: "0",
        minHeight: "10vh",
        textsTop: [
          {
            align: "center",
            size: ".7em",
            animation: {
              animateFrom: "top",
            },
            text: `
**A CHANGE IS COMING**
`,
          },
        ],
      },
      {
        minHeight: `calc(60vh - ${headerHeight}px)`,
        backgroundImage: getImagePath("leading-background.jpg"),
        freeSpaceTop: "15vh",
        freeSpaceBottom: "5vh",
        bigImage: {
          path: getImagePath("xphone.png"),
          animation: {
            animateFrom: "right",
            duration: 700,
          },
        },
      },
      {
        textsBottom: [
          {
            align: "center",
            size: "4em",
            shadow: `-12px 0 64px ${"#3f0826"}`,
            animation: {
              animateOnScroll: true,
              animateFrom: "right",
            },
            text: `
**<span style="color: red; ">X</span><span style="font-size: .92em;">|</span>Phone**
`,
          },
        ],
      },
      {
        textsTop: [
          {
            animation: {
              animateOnScroll: true,
            },
            text: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida facilisis urna et scelerisque. Nulla dignissim ac eros ut lobortis. Donec eleifend quis nisi in fringilla. Integer rhoncus, leo vulputate dictum elementum, odio velit condimentum massa, a eleifend orci tellus sed ligula. Duis convallis volutpat augue, id volutpat augue porttitor eu. Donec risus mi, semper non dictum finibus, efficitur nec nunc. Sed iaculis odio nec efficitur posuere. Aliquam porta lectus orci, vel cursus sem laoreet sit amet. Ut viverra nulla at scelerisque aliquam. Duis venenatis arcu nunc, sit amet luctus augue egestas sit amet. Sed eget est est. Proin quis lectus eget magna volutpat consequat at luctus ex. Quisque posuere iaculis vestibulum. Phasellus non interdum nibh. Ut nisi orci, cursus nec euismod at, pharetra quis massa.
`,
          },
        ],
      },
      ...([
        "Snapdragon 969",
        "420 Hertz display",
        "IP68 Water and Dust Resistant",
        "2TB NVME Storage",
      ].map((s) => {
        return {
          textsTop: [
            {
              text: `### ${s}`,
              animation: {
                animateOnScroll: true,
                animateFrom: "left",
                duration: 350,
              },
            },
            {
              animation: {
                animateOnScroll: true,
                animateFrom: "left",
                duration: 500,
              },
              color: "rgba(255,255,255,0.66)",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida facilisis urna et scelerisque. Nulla dignissim ac eros ut lobortis.",
            },
          ],
        };
      }) as RichChunkModel[]),
      {
        minHeight: "100vh",
        textsTop: [
          {
            text: `
## Attribution
#### <a href="https://unsplash.com/@efekurnaz"><span style="color: #ff9465;">Efe kurnaz</span></a>
#### <a href="https://www.pexels.com/@ambient_nature_-atmosphere-1682386/https://unsplash.com/@efekurnaz"><span style="color: #ff9465;">Ambient_Nature_Atmosphere</span></a>
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
