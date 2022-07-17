import {
  RichChunkModel,
  RichTextModel,
} from "../../models/rich-chunk/RichChunkModel";
import { getInlineCode } from "../../../components/RichContent/Markdown/MarkdownTools";
import { headerHeight } from "../../../components/Header";

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
      freeSpaceBottom: "20px",
    } as RichChunkModel;
  });

  const animatedImages = translationTypes.map((value, index) => {
    return {
      smallImage: {
        path: `/images/portfolio/handbook/fireball_${index}.gif`,
        // path: "https://th.bing.com/th/id/OIP.XInPSfSw_KKOcuwTSDbW1AHaF7?pid=ImgDet&rs=1",
        aspectRatio: "474/379",
        animation: {
          animateOnScroll: true,
          animateFrom: value,
          translateDistance: 30,
        },
      },
      // freeSpace: "20px",
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

\`\`\`birb
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
  textColor?: string;
  backgroundColor?: string;
  gradient?: string[];
  gradientDegree?: number;
  backgroundImage?: string;
  freeSpaceTop?: string; // e.g: "200px", or "20vh" // TODO
  freeSpaceBottom?: string;
  minHeight?: string; // e.g: "500px", or "80vh"
  longTextsTop?: RichTextModel[];
  bigImage?: RichImageModel;
  smallImage?: RichImageModel;
  bigVideo?: RichVideoModel;
  smallVideo?: RichVideoModel;
  mediaBar?: MediaBarModel;
  longTextsBottom?: RichTextModel[];
}

interface RichTextModel {
  text: string;
  align?: "start" | "center" | "end";
  userSelect?: string;
  color?: string;
  size?: string; // eg: "2em" or "25px"
  fontFamily?: string;
  animation?: RichAnimation;
}

interface RichImageModel {
  path: string;
  subText?: string;
  align?: "start" | "center" | "end"; // works only if small // TODO
  aspectRatio?: string; // you can write your image's width and height
  animation?: RichAnimation;
}

// TODO
interface RichVideoModel {
  path: string;
  align?: "start" | "center" | "end"; // works only if small
  aspectRatio?: string;
  animation?: RichAnimation;
}

// TODO
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
  duration?: number; // in milliseconds  // TODO
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
# Rich Chunk

You can create a page by chaining multiple Chunks together, while making each
of them look and feel unique. Each chunk can hold one or more rich elements in it.
This page you're reading is entirely rendered using Rich Chunks. you can check it's data
file from the link at the top of the page.

###### Example

\`\`\`js
[
  {
    nameId: "projectImage#3",
    textColor: black,
    backgroundColor: "#eaeaea",
    gradient: [blue, pink],
    gradientDegree: 45,
    backgroundImage: "/bgImage3".
    freeSpaceTop: "200px",
    freeSpaceBottom: "10vh",
    minHeight: "80vh",
    ...
  }
]
\`\`\`

Below is an example of a chunk with image as it's background. It 
utilizes ${getInlineCode("backgroundImage", "#9d0006")} &#8291;
and ${getInlineCode("minHeight", "#9d0006")}:
`,
        },
      ],
    },
    {},
    {
      minHeight: `calc(100vh - ${headerHeight}px)`,
      freeSpaceTop: "30vh",
      backgroundImage: "/images/portfolio/handbook/bg_sample.jpg",
      longTextsTop: [
        {
          align: "center",
          color: "#eeeeee",
          size: "2em",
          fontFamily: "'Rubik Moonrocks', cursive",
          userSelect: "none",
          animation: {
            animateOnScroll: true,
          },
          text: "## Nebuland",
        },
        {
          align: "center",
          color: "#eeeeee",
          userSelect: "none",
          animation: {
            animateOnScroll: true,
            animateFrom: "top",
            translateDistance: 10,
          },
          text: `
This image will always fill the entire width of the screen, 
and expand or shrink depending on the space it has 

\` \`  
\` \`  
\` \`  
\` \`  
\` \`  
\` \`  
\` \`  

&#8291;
`,
        },
        {
          color: "#eeeeee",
          text: "Image by [Javier Miranda](https://unsplash.com/@nuvaproductions)",
          animation: {
            animateOnScroll: true,
            animateFrom: "left",
          },
        },
      ],
    },
    {
      minHeight: "100px",
      longTextsTop: [
        {
          text: `
Below is what you get when you give some colors to ${getInlineCode(
            "gradient",
            "#9d0006"
          )} property:
`,
        },
      ],
    },
    {
      minHeight: "60vh",
      freeSpaceTop: "5vh",
      freeSpaceBottom: "10vh",
      gradient: [
        "#ff0000",
        "#ff5a00",
        "#ff9a00",
        "#ffce00 25%",
        "#ffce00 75%",
        "#ff9a00",
        "#ff5a00",
        "#ff0000",
      ],
      longTextsTop: [
        {
          align: "center",
          color: "black",
          text: `
          
### This is how you make this gradient:

\`\`\`js
{
  gradient: [
    "#ff0000",
    "#ff5a00",
    "#ff9a00",
    "#ffce00 25%",
    "#ffce00 75%",
    "#ff9a00",
    "#ff5a00",
    "#ff0000",
  ],
},
\`\`\`
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

###### Example:
\`\`\`js
{
  ...
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
            "/components/RichContent/&#8291;Markdown/MarkdownSyntaxTheme.ts ",
            "green"
          )}.
          
To write inline-code, it's better to use ${getInlineCode(
            "getInlineCode(text, color)"
          )} in 
your markdown for better styling: 

\`\`\`js
text: \`
...
This is \${getInlineCode("anInlineCode", "#1140b2")}.
... 
\`,
\`\`\`
`,
        },
      ],
    },
    {
      longTextsTop: [
        {
          text: `
# Rich Image 

You can use an instance of Rich Image in multiple places, such 
as ${getInlineCode("bigImage", "#e19400")}, ${getInlineCode(
            "smallImage",
            "#e19400"
          )}, 
and ${getInlineCode("mediaBar", "#e19400")}.

###### Example:

\`\`\`js
{
  ...
  bigImage: {
      path: "/images/myImage.jpg",
      subText: "Optional text at the bottom of image",
      aspectRatio: "800/600",
      animation: {
        animateOnScroll: true,
        animateFrom: "bottom",
      },
    },
  },
}
\`\`\`

${getInlineCode("aspectRatio", "#9d0006")}: It is 
not important no provide this, but if you do, content won't jump down when image starts loading.

`,
        },
      ],
      bigImage: {
        path: "/images/portfolio/handbook/sample.jpg",
        subText: "Image by [Mark Harpur](https://unsplash.com/@luckybeanz)",
        animation: {
          animateOnScroll: true,
          animateFrom: "bottom",
          translateDistance: 10,
        },
      },
    },
    {
      longTextsTop: [
        {
          text: `
# Rich Animation

RichImage and RichText elements accept an animation object.


###### Example:
\`\`\`js
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
    
{
  ...
  animation: {
    
  }
}
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

## Animated Images
`,
        },
      ],
    },
    ...animatedImages,
    {
      longTextsTop: [
        {
          text: `
# Media Bar
`,
        },
      ],
    },
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
