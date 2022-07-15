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
          align: "center",
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
        path: `/images/portfolio/fireball_${index}.gif`,
        // path: "https://th.bing.com/th/id/OIP.XInPSfSw_KKOcuwTSDbW1AHaF7?pid=ImgDet&rs=1",
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
          align: "center",
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
_The two color properties are used by other parts of the website to style the page, 
and they are unrelated to Rich Content._
\` \`           
\` \`           
\` \`           


Rich Content gives you the ability to create beautiful and animated pages very quickly. 
The best way to learn how it work is to first look at the Models.

# Model



\`\`\`birb
interface RichChunkModel {
  nameId: string;
  backgroundColor?: string;
  textColor?: string;
  longTextsTop?: RichTextModel[];
  bigImage?: RichImageModel;
  smallImage?: RichImageModel;
  bigVideo?: RichVideoModel;
  smallVideo?: RichVideoModel;
  mediaBar?: MediaBarModel;
  longTextsBottom?: RichTextModel[];
  freeSpace?: string; // e.g: "200px", or "20vh"
}

interface RichTextModel {
  text: string;
  align?: "start" | "center" | "end";
  userSelect?: string;
  animation?: RichAnimation;
}

interface RichImageModel {
  path: string;
  subText?: string;
  align?: "start" | "center" | "end"; // works only if small
  aspectRatio?: string;
  animation?: RichAnimation;
}

interface RichVideoModel {
  path: string;
  align?: "start" | "center" | "end"; // works only if small
  aspectRatio?: string;
  animation?: RichAnimation;
}

interface MediaBarModel {
  leftImage?: RichImageModel;
  leftVideo?: RichVideoModel;
  text?: RichTextModel[];
  rightImage?: RichImageModel;
  rightVideo?: RichVideoModel;
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


You can create a page by chaining multiple Chunks together, while making each
of them look and feel unique. Each chunk can hold one or more rich elements in it.
This page you're reading is entirely rendered using Rich Content. you can check it's data
file from the link at the top of the page.
\` \`        
\` \`        
Let's go through all of the features with examples
`,
        },
      ],
    },
    {
      longTextsTop: [
        {
          text: `
# Rich Text
The way Rich Text is intended to work, is by having a list of it that work 
independently of each other. This way a part of the text can be centered, 
or animated individually.

Example:
\`\`\`js

    {
      nameId: "textTest",
      longTextsTop: [
        {
          text: "First text part",
          align: "center",
        },
        {
          text: \`
# Test Text

This is a loooong text
... 
\`,
        },
        {
          text: "Animated text part",
          animation: {
            animateOnScroll: true,
            animateFrom: "bottomLeft",
            translateDistance: 30,
          },
        },
      ],
    },
\`\`\`
_More on ${getInlineCode("animation", "#9d0006")} below._

## Markdown

All the texts are rendered as Markdown for easy and fast typing.

If you need to edit code-block and it's syntax highlighting, you can do so by 
editing ${getInlineCode(
            "/components/RichContent/Markdown/MarkdownSyntaxTheme.ts ",
            "green"
          )}.
          
To write inline-code, we suggest using ${getInlineCode(
            "getInlineCode(text, color)"
          )} in 
your markdown for better styling: 

\`\`\`js
text: \`
...
This is \${getInlineCode("anInlineCode", "#1140b2"}.
... 
\`,
\`\`\`


## Animated Texts
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
# Rich Images

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
      v.longTextsTop = v.longTextsTop.map((vv: RichTextModel) => {
        if (vv.userSelect === undefined) vv.userSelect = "text";
        return vv;
      });
    return v;
  });
}
