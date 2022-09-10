// noinspection DuplicatedCode

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
      textsTop: [
        {
          align: "center",
          // texts: texts[index].toUpperCase(),
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
        aspectRatio: "474/379",
        animation: {
          animateOnScroll: true,
          animateFrom: value,
          translateDistance: 30,
        },
      },
    } as RichChunkModel;
  });

  return (
    [
      {
        nameId: "header",
        freeSpaceTop: "16px",
        backgroundColor: "#a86048",
        textsTop: [
          {
            align: "center",
            color: "white",
            shadow: "rgb(126,35,5)",
            userSelect: "none",
            animation: {
              duration: 2000,
            },
            text: `
# Rich Content Handbook
`,
          },
        ],
      },
      {
        nameId: "intro",
        textsTop: [
          {
            size: ".88em",
            animation: {
              animateFrom: "bottom",
              duration: 600,
              translateDistance: 6,
            },
            text: `
This is a full blown test in demonstration of Rich Chunks abilities, alongside 
explanations. You can find the data file of this and all the other portfolio pages
in ${getInlineCode("/data/local/portfolio/", "green")}.
`,
          },
          {
            animation: {
              animateFrom: "bottom",
              duration: 1000,
              translateDistance: 10,
            },
            text: ` 

Each portfolio page is dynamically created by reading a JavaScript List 
of ${getInlineCode("RichChunkModel")} items provided in your portfolio object:

\`\`\`birb
interface Portfolio {
  ...
  pageRichContent: RichChunkModel[];
  backgroundColor?: string;
  textColor?: string;
  headerItemsColor?: string;
}
\`\`\`
${getInlineCode("backgroundColor", "#9d6301")} and ${getInlineCode(
              "textColor",
              "#9d6301"
            )} : 
 These are used to set the default colors of the whole page.

${getInlineCode("headerItemColor", "#9d6301")} : 
_this is used by other parts of the website 
to style the page, and is unrelated to Rich Content._
\` \`           
\` \`           
\` \`           


Rich Content gives you the ability to create beautiful and animated pages very quickly. 
You can hook it up to your CMS or Backend for an even easier workflow.


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
  freeSpaceTop?: string; // e.g: "200px", or "20vh" 
  minHeight?: string; // e.g: "500px", or "80vh"
  textsTop?: RichTextModel[];
  bigImage?: RichImageModel;
  smallImage?: RichImageModel;
  bigVideo?: RichVideoModel;
  smallVideo?: RichVideoModel;
  freeSpaceMiddle?: string;
  mediaBar?: MediaBarModel;
  textsBottom?: RichTextModel[];
  freeSpaceBottom?: string;
}

interface RichTextModel {
  text: string;
  align?: "start" | "center" | "end";
  userSelect?: string; // eg: "none" or "texts" - def: "none"
  color?: string;
  size?: string; // eg: "2em" or "25px"
  fontFamily?: string;
  shadow?: string;
  animation?: RichAnimation;
}

interface RichImageModel {
  path: string;
  subText?: string;
  align?: "start" | "center" | "end"; // works only if small 
  aspectRatio?: string; // you can write your image's width and height
  animation?: RichAnimation;
}

interface RichVideoModel {
  path: string;
  align?: "start" | "center" | "end"; // works only if small
  aspectRatio?: string; // you can write your video's width and height
  autoPlay?: boolean; // will mute the sound if true
  loop?: boolean;
  controls?: boolean;
  animation?: RichAnimation;
}

interface MediaBarModel {
  leftImage?: RichImageModel;
  leftVideo?: RichVideoModel;
  texts?: RichTextModel[];
  rightImage?: RichImageModel;
  rightVideo?: RichVideoModel;
}

interface RichAnimation {
  animateOnScroll?: boolean;
  translateDistance?: number; // e.g: 25vh and 25vw
  duration?: number; // in milliseconds
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
And here's a diagram of how everything is placed:
`,
          },
        ],
        smallImage: {
          path: "/images/portfolio/handbook/chunk_layout.png",
        },
        textsBottom: [
          {
            text: "Let's go through the features with examples",
          },
        ],
      },
      {
        textsTop: [
          {
            text: `
# Rich Chunk

You can create a page by chaining multiple Chunks together, while making each
of them look and feel unique. Each chunk can hold one or more rich elements in it.
This page you're reading is entirely rendered using Rich Chunks.

###### Example

\`\`\`js
[
  {
    nameId: "image3",
    textColor: black,
    backgroundColor: "#eaeaea",
    gradient: [blue, pink],
    gradientDegree: 45,
    backgroundImage: "/images/bgImage3".
    freeSpaceTop: "8vh",
    freeSpaceMiddle: "60px",
    freeSpaceBottom: "10vh",
    minHeight: "80vh",
    ...
  }
]
\`\`\`

${getInlineCode("nameId", "#9d0006")}: Providing this is 
necessary. React uses this to keep track of each chunk to update it correctly. 
Each nameId should be unique, and they won't show up in the page.

${getInlineCode("minHeight", "#9d0006")}: Your chunk will always be
this high, unless the content need more space.

\` \`  
\` \`  
\` \`  
\` \`  

Below is an example of a chunk with image as it's background. It 
utilizes ${getInlineCode("backgroundImage", "#9d0006")} &#8291;
and ${getInlineCode("minHeight", "#9d0006")}:
`,
          },
        ],
      },
      {},
      {
        minHeight: `200vh`,
        freeSpaceTop: "20vh",
        freeSpaceMiddle: "40vh",
        backgroundImage: "/images/portfolio/handbook/bg_sample.jpg",
        textsTop: [
          {
            align: "center",
            color: "#eeeeee",
            size: "2em",
            fontFamily: "'Rubik Moonrocks', cursive",
            userSelect: "none",
            animation: {
              animateOnScroll: true,
              animateFrom: "topRight",
              translateDistance: 7,
            },
            shadow: "24px -24px 48px #b67e7b",
            // shadow: "red",
            text: "## Nebuland",
          },
          {
            align: "center",
            color: "#eeeeee",
            userSelect: "none",
            animation: {
              animateOnScroll: true,
              animateFrom: "top",
              translateDistance: 6,
              duration: 500,
            },
            text: `
\` \`  
\` \`  

This image will always fill the entire width of the screen, 
and expand or shrink depending on the size that is given min height, 
or how much space it's content need

\` \`  
\` \`  

&#8291;
`,
          },
        ],
        textsBottom: [
          {
            color: "#eeeeee",
            text: "Image by [Javier Miranda](https://unsplash.com/@nuvaproductions)",
            animation: {
              animateOnScroll: true,
              animateFrom: "left",
              duration: 600,
            },
          },
        ],
      },
      {
        minHeight: "100px",
        textsTop: [
          {
            text: `
\` \`  
\` \`  
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
        textsTop: [
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
        textsTop: [
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
  textsTop: [
    {
      text: "First text part",
      align: "center",
      userSelect: "text",
      color: "red",
      size: "1.4em",
      fontFamily: "'Rubik Moonrocks', cursive",
      shadow: "#989898", // or "3px 4px 6px #ff5a00"
    },
    {
      text: \`
# Test Text

This is a loooong text

This is a <a href="https://www..."><span style="color: #ff9465;">Colored Link</span></a>

Etcetera <i class="fa-solid fa-fire"></i> text.
\`,
    },
    {
      text: "Animated text part",
      animation: {
        animateOnScroll: true,
        animateFrom: "bottomLeft",
        translateDistance: 30,
        duration: 600,
      },
    },
  ],
},
\`\`\`
_More on ${getInlineCode("animation", "#9d0006")} below._

## Markdown

All the texts are rendered as Markdown for easy 
and fast typing.
            
<i class="fa-solid fa-fire"></i>  To use fonts in you text, go 
to [fontawesome.com/icons](https://fontawesome.com/icons)
and once you find the icon you want, copy the **HTML** code 
then paste it in your text, like in the example above. If some 
fonts don't work for you, it's because you need to be on a higher tier plan.

To colorize your text links, you can create an \`a\` tag with a \`span\`
inside ${getInlineCode(
              `\<a...\>\<span...\>TITLE\<\/span\></a\>`
            )} like in the example above.

If you need to edit code-block and it's syntax highlighting, you can do so by 
editing ${getInlineCode(
              "/components/RichContent/Markdown/MarkdownSyntaxTheme.ts ",
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
        textsTop: [
          {
            text: `
# Rich Image 

You can use an instance of Rich Image in multiple places, such 
as ${getInlineCode("bigImage", "#794d00")}, ${getInlineCode(
              "smallImage",
              "#794d00"
            )}, 
and ${getInlineCode("mediaBar", "#794d00")}.

###### Example:

\`\`\`js
{
  ...
  bigImage: {
    path: "/images/myImage.jpg",
    subText: "Optional text at the bottom of image",
    align: "end",
    aspectRatio: "800/600",
    animation: {
      animateOnScroll: true,
      animateFrom: "bottom",
    },
  },
}
\`\`\`

${getInlineCode("aspectRatio", "#9d0006")}: It is 
not important no provide this, but if you do, content won't jump down when image starts loading.\  
You may also play with this number to crop images.

${getInlineCode("align", "#9d0006")}: Only works 
in ${getInlineCode("smallImage ", "#794d00")}.
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
        textsTop: [
          {
            text: `
# Rich Video

Like Rich Image, you can use this in multiple places such 
as ${getInlineCode("bigVideo", "#794d00")}, ${getInlineCode(
              "smallVideo",
              "#794d00"
            )}, 
and ${getInlineCode("mediaBar", "#794d00")}.

###### Example
\`\`\`js
{
  ...
  smallVideo: {
    path: "https://www.youtube.com/watch?v=FK3HyJglFQ0",
    align: "end",
    aspectRatio: "1/1",
    autoPlay: true,
    loop: true,
    controls: false,
    animation: {
      ...
    },
  }
}
\`\`\`

${getInlineCode("path", "#9d0006")}: Rich Video 
uses [ReactPlayer](https://github.com/CookPete/react-player) under the hood which is
able to recognize the path you give it and load an appropriate player based on it.
It can recognize YouTube, Facebook, SoundCloud, Vimeo, Twitch, DailyMotion, Kaltura, Mixcloud, Vidyars, and Wistia. \ 
Otherwise it loads an standard player.


${getInlineCode("aspectRatio", "#9d0006")}: Unlike 
Rich Image, **setting this in videos is rather important** unless your video's
aspect ratio is '16/9', as this number will determine how much of the available space 
the video player will cover. By default this number is set to '16/9', and you can
again put your videos width and height as this.

${getInlineCode("autoPlay", "#9d0006")}: By setting this to true, 
videos will start playing as soon as you scroll to them or they animate in 
on scroll, and will pause when they're out of view. 
However bear in mind
that modern browsers won't allow videos to autoplay with sound, therefore the sound will be muted.

${getInlineCode("align", "#9d0006")}: Only works 
in ${getInlineCode("smallVideo ", "#794d00")}.
`,
          },
        ],
        bigVideo: {
          path: "/videos/vextra.mp4",
          aspectRatio: "1/1",
          loop: true,
          controls: false,
          autoPlay: true,
        },
        // smallVideo: {
        //   path: "https://www.youtube.com/watch?v=FK3HyJglFQ0",
        //   aspectRatio: "16/9",
        //   loop: true,
        //   autoPlay: true,
        //   animation: {
        //     animateOnScroll: true,
        //     animateFrom: "left",
        //   },
        // },
        freeSpaceTop: "30px",

        freeSpaceBottom: "40px",
      },
      {
        textsTop: [
          {
            text: `
# Rich Animation

RichText, RichImage, and RichVideo elements accept an animation object.


###### Example:
\`\`\`js    
{
  ...
  animation: {
    animateOnScroll: true,
    translateDistance: 15,
    duration: 500,
    animateFrom: "topLeft",
  }
}
\`\`\`

${getInlineCode("animateOnScroll", "#9d0006")}: If you set this to true
the object will listen to scroll and animates itself in or out. 
RichText animates in when it's 20vh high from the bottom. RichImage and RichVideo do at 40vh.

For the first few element you expect to immediately be seen when a page loads,
you can set this to false, and still fill the rest of the properties to control their initial animation.

${getInlineCode("translateDistance", "#9d0006")}: For left and right 
translations, the number 15 written above will be counted 
as ${getInlineCode("∓15vw")} and for up and down
as ${getInlineCode("∓15vh")} .

* if you add a new animation object to an element, you might need to refresh
the page for the changes to take effect.

As you've seen so far, by playing around with Rich Animations you can create compelling
and beautiful experiences in no time that would otherwise take hours to do from scratch.

Here are some more animation to display different directions that elements
can animate from:

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
        textsTop: [
          {
            text: `

## Animated Images
`,
          },
        ],
      },
      ...animatedImages,
      {
        textsTop: [
          {
            text: `
## Animated Videos

You get the gist!
`,
          },
        ],
      },
      {
        textsTop: [
          {
            text: `
# Media Bar

Media Bar is basically a collection of Rich elements, laid horizontally. 
`,
          },
        ],
        smallImage: {
          path: "/images/portfolio/handbook/handbook_mediabar_1.png",
        },
      },
      {
        textsTop: [
          {
            text: `
If we break up the Media Bar to three columns, then
this is how things will look on different screen sizes
`,
          },
        ],
        smallImage: {
          path: "/images/portfolio/handbook/handbook_mediabar_responsiveness.png",
        },
        textsBottom: [
          {
            text: `
###### Example

\`\`\`js
{
  ...
  mediaBar: {
    leftVideo: {
      path: "/videos/myVideo.mp4",
      autoPlay: true,
    },
    texts: [
      {
        text: "lorem ipsum",
      },
    ],
    rightImage: {
      path: "/images/myImage.png",
      animation: {
        animateOnScroll: true,
        animateFrom: "right",
      },
    },
  },
},
\`\`\`
`,
          },
        ],
      },
      {
        freeSpaceTop: "40px",
        freeSpaceBottom: "40px",
        // backgroundColor: "#eceaed",
        gradient: ["#eae0d0", "#eeece4"],
        mediaBar: {
          leftImage: {
            path: "/images/portfolio/handbook/flowers.jpg",
            // aspectRatio: "597/895",
            animation: {
              animateOnScroll: true,
              animateFrom: "left",
              duration: 800,
            },
          },
          texts: [
            {
              align: "center",
              text: "#### Thank you for reading this ❤️",
              animation: {
                animateOnScroll: true,
                animateFrom: "right",
                duration: 600,
              },
            },
            {
              align: "center",
              text: "May your chunks be rich and beautiful!",
              animation: {
                animateOnScroll: true,
                animateFrom: "right",
                duration: 600,
              },
            },
          ],
        },
      },
      {
        minHeight: "60vh",
        textsTop: [
          {
            text: `
# Have this anywhere

you can have all of this anywhere you want by copying  ${getInlineCode(
              "/components/RichContent",
              "green"
            )} package.
`,
          },
        ],
      },
      {
        minHeight: "200px",
      },
      {
        nameId: "SIMMORSAL",
        minHeight: `calc(100vh - ${headerHeight}px)`,
        textColor: "#000000",
        backgroundColor: "#fdd403",
        // smallImage: {
        //   path: "/images/logo_big.png",
        //   animation: {
        //     animateOnScroll: true,
        //   },
        // },
        freeSpaceTop: "40vh",
        freeSpaceBottom: "15vh",
        textsBottom: [
          {
            align: "center",
            animation: {
              animateOnScroll: true,
              animateFrom: "bottom",
              duration: 500,
            },
            text: `
If there's something extra that you need 
that [this](https://github.com/simmorsal/Vextra) package 
doesn't cover, hit me up.\  
I give discounts on my own work ;)
`,
          },
          {
            align: "center",
            animation: {
              animateOnScroll: true,
              animateFrom: "bottom",
              duration: 700,
            },
            text: `
                  
<a href="mailto: soheil.sisakht@gmail.com">
  <div id="sim" style="
    display: flex; 
    flex-direction: row; 
    color: #5d3600; 
    align-items: center; 
    font-weight: bold;
    justify-content: center;
  ">
    <i
      class="fa-solid fa-envelope"
      style="
        width: 30px;
        color: #5d3600; 
        cursor: pointer;
        margin: 16px 8px;
        padding: 0;
        text-align: center;
        font-size: 150%;
      ">
    </i>
    soheil.sisakht@gmail.com
  </div>
</a>

`,
          },
        ],
      },
    ] as RichChunkModel[]
  ).map((v: RichChunkModel, i) => {
    if (v.nameId === undefined) v.nameId = i.toString();
    if (v.textsTop !== undefined) {
      v.textsTop = v.textsTop.map((vv: RichTextModel) => {
        if (vv.userSelect === undefined) vv.userSelect = "text";
        return vv;
      });
    }
    if (v.textsBottom !== undefined) {
      v.textsBottom = v.textsBottom.map((vv: RichTextModel) => {
        if (vv.userSelect === undefined) vv.userSelect = "text";
        return vv;
      });
    }
    if (v.backgroundColor === undefined && v.gradient === undefined)
      v.backgroundColor = "#f5d7af";

    return v;
  });
}
