import {
  RichChunkModel,
  RichTextModel,
} from "../../models/rich-chunk/RichChunkModel";
import { getInlineCode } from "../../../components/RichContent/Markdown/MarkdownTools";

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
          text: ` 

This is a full blown test in demonstration of Rich Chunks abilities. You can see the data file of this page [from this link](https://google.com).
\` \`           
\` \`           

Each portfolio page is dynamically created by reading a list 
of ${getInlineCode("RichChunkModel")} items provided in your portfolio object:

\`\`\`birb(2)
interface Portfolio {
  ...
  pageRichContent: RichChunkModel[];
  headerColor: string;
  headerItemsColor: string;
}
\`\`\`
_The two color properties work when inside the page._
\` \`           
\` \`           
\` \`           


Rich Content gives you the ability to beautiful and animated pages very quickly. 
The best way to learn how it work is to first look at the Models.

## Model



\`\`\`birb
interface RichChunkModel {
  nameId: string;
  backgroundColor?: string;
  textColor?: string;
  longTextsTop?: RichTextModel[];
  bigImage?: RichImageModel;
  smallImage?: RichImageModel;
  videoClip?: string;
  mediaBarLeftImage?: RichImageModel;
  mediaBarLeftVideo?: string;
  mediaBarText?: RichTextModel[];
  mediaBarRightImage?: RichImageModel;
  mediaBarRightVideo?: string;
  longTextsBottom?: RichTextModel[];
  freeSpace?: string; // e.g: "200px", or "20vh"
}

interface RichTextModel {
  text: string;
  textAlign?: "start" | "center" | "end";
  userSelect?: string;
  animation?: RichAnimation;
}

interface RichImageModel {
  path: string;
  subText?: string;
  aspectRatio?: string; 
  animation?: RichAnimation;
}

interface RichAnimation {
  animateOnScroll?: boolean;
  translateDistance?: number; // e.g: 25vh and 25vw
  animateFrom?:
    | "none"
    | "top"
    | "topRight"
    | "right"
    | "bottomRight"
    | "bottom"
    | "bottomLeft"
    | "left"
    | "topLeft";
}
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
