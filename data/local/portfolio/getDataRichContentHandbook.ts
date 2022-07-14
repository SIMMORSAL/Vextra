import { RichChunkModel, RichTextModel } from "../../models/RichChunkModel";

export function getDataRichContentHandbook(): RichChunkModel[] {
  const translationTypes = [
    "none",
    "topRight",
    "right",
    "bottomRight",
    "bottom",
    "bottomLeft",
    "left",
    "topLeft",
    "top",
  ];

  const animatedTexts = translationTypes.map((value, index) => {
    return {
      longTextsTop: [
        {
          textAlign: "center",
          // text: texts[index].toUpperCase(),
          text: "### coming from " + translationTypes[index].toUpperCase(),
          animation: {
            animateOnScroll: true,
            animateFrom: value,
            translateDistance: 30,
          },
        },
      ],
      freeSpace: "20px",
    } as RichChunkModel;
  });

  const animatedImages = translationTypes.map((value, index) => {
    return {
      smallImage: {
        // path: images[index],
        path: "https://th.bing.com/th/id/OIP.XInPSfSw_KKOcuwTSDbW1AHaF7?pid=ImgDet&rs=1",
        aspectRatio: "474/379",
        animation: {
          animateOnScroll: true,
          animateFrom: value,
          translateDistance: 30,
        },
      },
      freeSpace: "20px",
    } as RichChunkModel;
  });

  return [
    {
      nameId: "intro",
      longTextsTop: [
        {
          textAlign: "center",
          text: `
# Rich Content Handbook
`,
        },
        {
          text: `You can see the data file of this code [from this link](https://google.com)
          
This is a full blown test in demonstration of Rich Chunks abilities. \ 

The best way to learn how it work is to first look at the Models.
\` \`  
\` \`  
\` \`  

## Model
---
\`\`\`js
const x = "69" - 420;
\`\`\`




### Basic tools at your disposal:

"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida facilisis urna et scelerisque. Nulla dignissim ac eros ut lobortis. Donec eleifend quis nisi in fringilla. Integer rhoncus, leo vulputate dictum elementum, odio velit condimentum massa, a eleifend orci tellus sed ligula. Duis convallis volutpat augue, id volutpat augue porttitor eu. Donec risus mi, semper non dictum finibus, efficitur nec nunc. Sed iaculis odio nec efficitur posuere. Aliquam porta lectus orci, vel cursus sem laoreet sit amet. Ut viverra nulla at scelerisque aliquam. Duis venenatis arcu nunc, sit amet luctus augue egestas sit amet. Sed eget est est. Proin quis lectus eget magna volutpat consequat at luctus ex. Quisque posuere iaculis vestibulum. Phasellus non interdum nibh. Ut nisi orci, cursus nec euismod at, pharetra quis massa." 
`,
        },
      ],
    },
    {
      longTextsTop: [
        {
          text: `
## Animated Texts
--- 
`,
        },
      ],
    },
    ...animatedTexts,
    {
      nameId: "freeSpace",
      freeSpace: "5vh",
    },
    {
      longTextsTop: [
        {
          text: `
## Animated Images
--- 
`,
        },
      ],
    },
    ...animatedImages,
    {
      freeSpace: "30vh",
    },
  ].map((v: RichChunkModel, i) => {
    if (v.nameId === undefined) v.nameId = i.toString();
    if (v.longTextsTop !== undefined)
      v.longTextsTop = v.longTextsTop.map((v: RichTextModel) => {
        if (v.userSelect === undefined) v.userSelect = "text";
        return v;
      });
    return v;
  });
}
