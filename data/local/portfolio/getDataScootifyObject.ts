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
      nameId: "project-name",
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
      gradient: ["#ee644e", "#b94134"],
      bigImage: {
        path: getImagePath("scootify_red.jpg"),
        aspectRatio: "2000/1660",
      },
    },
    // ---
    {
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
  ] as RichChunkModel[]
).map((v: RichChunkModel, i) => {
  if (v.nameId === undefined) v.nameId = i.toString();
  return v;
});
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
