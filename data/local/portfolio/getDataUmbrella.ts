import { RichChunkModel } from "../../models/rich-chunk/RichChunkModel";

export function getDataUmbrella() {
  return [
    {
      nameId: "1",
      backgroundColor: "#60a8ff",
      minHeight: "200px",
      textsTop: [
        {
          text: "tfhtsrhtrhrth thgretgtht",
          color: "#ffffff",
          align: "center",
        },
        {
          text: `
dfg;lk o;lkfga 'l dfslk' adfkl'  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida facilisis urna et scelerisque. Nulla dignissim ac eros ut lobortis. Donec eleifend quis nisi in fringilla. Integer rhoncus, leo vulputate dictum elementum, odio velit condimentum massa, a eleifend orci tellus sed ligula. Duis convallis volutpat augue, id volutpat augue porttitor eu. Donec risus mi, semper non dictum finibus, efficitur nec nunc. Sed iaculis odio nec efficitur posuere. Aliquam porta lectus orci, vel cursus sem laoreet sit amet. Ut viverra nulla at scelerisque aliquam. Duis venenatis arcu nunc, sit amet luctus augue egestas sit amet. Sed eget est est. Proin quis lectus eget magna volutpat consequat at luctus ex. Quisque posuere iaculis vestibulum. Phasellus non interdum nibh. Ut nisi orci, cursus nec euismod at, pharetra quis massa.
`,
        },
      ],
    },
    {
      nameId: "1.2",
      minHeight: " 500px",
      backgroundColor: "#afa2e8",
    },
    {
      nameId: "2",
      backgroundColor: "#708a50",
      freeSpaceBottom: "200px",
      bigImage: {
        path: "/images/portfolio/umbrella/3-1.22.png",
        animation: {
          animateOnScroll: true,
          animateFrom: "topRight",
          translateDistance: 1,
          duration: 800,
        },
      },
    },
  ] as RichChunkModel[];
}
