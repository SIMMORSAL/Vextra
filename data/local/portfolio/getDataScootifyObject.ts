// noinspection DuplicatedCode

import {
  RichChunkModel,
  RichTextModel,
} from "../../models/rich-chunk/RichChunkModel";

export function getDataScootifyObject(): RichChunkModel[] {
  return (
    [
      {
        textsTop: [
          {
            text: `
This is all you need to write to make the scootify page

\`\`\`ts
const getImagePath = (name: string) => {
  return \`/images/portfolio/scootify/\${name}\`;
};

return (
  [
    {
      nameId: "1",
      textsTop: [
        {
          align: "center",
          text: "# Scootify",
          color: "#e3d9d9",
        },
        {
          align: "center",
          animation: {
            animateOnScroll: false,
            duration: 3000,
          },
          text: \`...\`,
        },
      ],
    },
    // ---
    {
      nameId: "2",
      gradient: ["#ee644e", "#b94134"],
      bigImage: {
        path: getImagePath("scootify_red.jpg"),
        aspectRatio: "2000/1660",
      },
    },
    // ---
    {
      nameId: "3",
      minHeight: "400px",
      textsTop: [
        {
          color: "rgba(255,255,255,0.91)",
          text: \`...\`,
        },
      ],
    },
    // ---
    {
      nameId: "4",
      smallImage: {
        path: getImagePath("scootify_green.jpg"),
        aspectRatio: "1000/680",
        animation: {
          animateOnScroll: true,
        },
      },
    },
    // ---
    {
      nameId: "5",
      freeSpaceTop: "20px",
      smallImage: {
        path: getImagePath("scootify_yellow.jpg"),
        aspectRatio: "1000/680",
        animation: {
          animateOnScroll: true,
        },
      },
    },
    // ---
    {
      nameId: "6",
      freeSpaceBottom: "70px",
      textsTop: [
        {
          color: "rgba(255,255,255,0.91)",
          text: \`...\`,
        },
      ],
    },
    // ---
    {
      nameId: "7",
      gradient: ["rgb(18,18,18)", "#212121"],
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
            text: \`...\`,
          },
        ],
      },
    },
    // ---
    {
      nameId: "8",
      backgroundColor: "#101010",
      minHeight: "90vh",
      textColor: "white",
      textsBottom: [
        {
          align: "center",
          text: \`...\`,
        },
      ],
    },
    // ---
    {
      nameId: "9",
      gradient: ["#fcc3a788", "#e0500088"],
      freeSpaceTop: "15vh",
      freeSpaceBottom: "15vh",
      textsTop: [
        {
          text: \`...\`,
        },
        {
          align: "center",
          size: "2em",
          color: "#b23500",
          text: \`<i class="fa-solid fa-shuttle-space"></i> **VESPIA**\`,
        },
      ],
    },
    // ---
    {
      nameId: "10",
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
    // ---
    {
      nameId: "11",
      textColor: "#fff",
      freeSpaceTop: "50px",
      freeSpaceBottom: "70px",
      textsTop: [
        {
          text: \`...\`,
        },
      ],
    },
    // ---
    {
      nameId: "12",
      freeSpaceBottom: "800px",
      backgroundImage: getImagePath("vespia_purple.jpg"),
      textsTop: [
        {
          align: "end",
          text: "...",
          color: "#fff",
        },
      ],
    },
    // ---
    {
      nameId: "13",
      freeSpaceTop: "100px",
      freeSpaceBottom: "200px",
      gradient: ["#aa64d5", "#a948eb"],
      textColor: "#fff",
      textsTop: [
        {
          text: \`...\`,
        },
      ],
    },
    // ---
    {
      nameId: "14",
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
    // ---
    {
      nameId: "15",
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
          text: \`...\`,
        },
      ],
    },
  ] as RichChunkModel[];
\`\`\`
`,
          },
        ],
      },
    ] as RichChunkModel[]
  ).map((v: RichChunkModel, i) => {
    if (v.nameId === undefined) v.nameId = i.toString();
    if (v.textsTop !== undefined)
      v.textsTop = v.textsTop.map((vv: RichTextModel) => {
        if (vv.userSelect === undefined) vv.userSelect = "text";
        return vv;
      });
    return v;
  });
}
