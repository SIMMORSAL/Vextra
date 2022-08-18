import {
  RichChunkModel,
  RichImageModel,
} from "../../models/rich-chunk/RichChunkModel";
import { headerHeight } from "../../../components/Header";

export function getDataProject1XPhone(): RichChunkModel[] {
  const getImagePath = (name: string) => {
    return `/images/portfolio/xphone/${name}`;
  };

  const getVideoPath = (name: string) => {
    return `/videos/portfolio/xphone/${name}`;
  };

  const cameraImagesFirstBatch = ["cs0.jpg", "cs1.jpg", "cs2.jpg"];
  const cameraImagesNightMode = ["nm0.jpg", "nm1.jpg"];

  // images in mediabar are a little larger than smallImage
  const makeMediaBarImages = (paths: string[]) => {
    return paths.map((p) => {
      return {
        backgroundColor: "#8a062c",
        mediaBar: {
          rightImage: {
            path: getImagePath(p),
          },
        },
        freeSpaceTop: "32px",
      };
    }) as RichChunkModel[];
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
        minHeight: `60vh`,
        backgroundImage: getImagePath("leading-background.jpg"),
        freeSpaceTop: "15vh",
        freeSpaceBottom: "5vh",
        bigImage: {
          path: getImagePath("xphone.png"),
          aspectRatio: "2000/1624",
          animation: {
            animateFrom: "topLeft",
            duration: 700,
            translateDistance: 5,
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
              translateDistance: 10,
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

<br>
<br>
<br>
<br>
<br>

# Phone Features
`,
          },
        ],
      },
      ...([
        "Snapdragon 999",
        "420 Hertz display",
        "IP69 Water and Dust Resistant",
        "2TB NVME Storage",
        "9800 mAh Battery",
        "6G Capable",
        "256 Megapixel Camera",
        "Triple Sim Tray",
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
        freeSpaceTop: "30vh",
        backgroundImage: getImagePath("red-background.jpg"),
        bigImage: {
          path: getImagePath("phone-in-hand.png"),
          animation: {
            animateOnScroll: true,
            animateFrom: "bottom",
            translateDistance: 7,
          },
        },
        textsTop: [
          {
            text: `# A NEW WORLD AT YOUR FINGERTIPS`,
            align: "center",
            shadow: "black",
          },
        ],
      },
      {
        gradient: ["#a3002f", "#410919", "#981843", "#880125"],
        minHeight: "60vh",
        textsTop: [
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida facilisis urna et scelerisque. Nulla dignissim ac eros ut lobortis. Donec eleifend quis nisi in fringilla. Integer rhoncus, leo vulputate dictum elementum, odio velit condimentum massa, a eleifend orci tellus sed ligula. Duis convallis volutpat augue, id volutpat augue porttitor eu. Donec risus mi, semper non dictum finibus, efficitur nec nunc. Sed iaculis odio nec efficitur posuere. Aliquam porta lectus orci, vel cursus sem laoreet sit amet. Ut viverra nulla at scelerisque aliquam. Duis venenatis arcu nunc, sit amet luctus augue egestas sit amet. Sed eget est est. Proin quis lectus eget magna volutpat consequat at luctus ex. Quisque posuere iaculis vestibulum. Phasellus non interdum nibh. Ut nisi orci, cursus nec euismod at, pharetra quis massa.`,
          },
        ],
        freeSpaceMiddle: "200px",
        //////////
        // CAMERA
        mediaBar: {
          texts: [
            {
              text: "# Revolutionary Camera System",
              align: "center",
              animation: {
                animateOnScroll: true,
                animateFrom: "bottomLeft",
                translateDistance: 8,
              },
            },
          ],
          leftImage: {
            path: getImagePath("camera-close.webp"),
            aspectRatio: "20/23",
            animation: {
              animateOnScroll: true,
              animateFrom: "bottomRight",
              translateDistance: 4,
            },
          },
        },
        textsBottom: [
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida facilisis urna et scelerisque. Nulla dignissim ac eros ut lobortis. Donec eleifend quis nisi in fringilla. Integer rhoncus, leo vulputate dictum elementum, odio velit condimentum massa, a eleifend orci tellus sed ligula. Duis convallis volutpat augue, id volutpat augue porttitor eu. Donec risus mi, semper non dictum finibus, efficitur nec nunc. Sed iaculis odio nec efficitur posuere. Aliquam porta lectus orci, vel cursus sem laoreet sit amet. Ut viverra nulla at scelerisque aliquam. Duis venenatis arcu nunc, sit amet luctus augue egestas sit amet. Sed eget est est. Proin quis lectus eget magna volutpat consequat at luctus ex. Quisque posuere iaculis vestibulum. Phasellus non interdum nibh. Ut nisi orci, cursus nec euismod at, pharetra quis massa.`,
          },
        ],
      },
      {
        backgroundColor: "#8a062c",
        bigImage: {
          path: getImagePath("phone-camera-strip.jpg"),
          aspectRatio: "2400/1382",
        },
        freeSpaceMiddle: "80px",
        textsBottom: [
          {
            align: "center",
            text: "#### Camera is ready to take beautiful images out of the box",
          },
        ],
      },
      ...(makeMediaBarImages(cameraImagesFirstBatch) as RichChunkModel[]),
      {
        freeSpaceTop: "32px",
        backgroundColor: "#8a062c",
        mediaBar: {
          leftVideo: {
            path: getVideoPath("video-sample-1.mp4"),
            controls: false,
            autoPlay: true,
            loop: true,
          },
        },
      },
      {
        freeSpaceTop: "32px",
        backgroundColor: "#8a062c",
        textsTop: [
          {
            align: "center",
            text: "#### Night mode imagery looks absolutely crisp and free of noise",
          },
        ],
      },
      ...(makeMediaBarImages(cameraImagesNightMode) as RichChunkModel[]),
      //////////
      // Gaming

      {
        backgroundColor: "#553473",
        gradient: ["#00714d", "#00ea58", "#90ec5a", "#00fc70", "#7efdfe"],
        minHeight: "80vh",
        textColor: "black",
        freeSpaceTop: "20vh",
        freeSpaceMiddle: "60px",
        freeSpaceBottom: "30vh",
        textsTop: [
          {
            align: "center",
            text: `
## NONE LIKE IT IN <span style="color: #5b0624">GAMING</span>
`,
          },
        ],
        bigVideo: {
          path: getVideoPath("game.mp4"),
          controls: false,
          autoPlay: true,
          loop: true,
        },
        textsBottom: [
          {
            animation: {
              animateOnScroll: true,
              animateFrom: "right",
            },
            text: `
## Snapdragon 999 allows you to run <img src="${getImagePath(
              "reddeadredemption.png"
            )}" width="128px"/> on PS34DROID emulator in 120 Frames Per Second
`,
          },
        ],
      },

      //////////
      // Attribution

      {
        minHeight: "100vh",
        freeSpaceTop: "25vh",
        textsTop: [
          {
            animation: {
              animateOnScroll: true,
              animateFrom: "top",
              translateDistance: 10,
            },
            text: `
## Attribution
#### <a href="https://unsplash.com/@onurbinay"><span style="color: #ff9465;">Onur Binay</span></a>
#### <a href="https://www.vecteezy.com/members/yganko"><span style="color: #ff9465;">Юлия Гапеенко</span></a>
#### <a href="https://unsplash.com/@efekurnaz"><span style="color: #ff9465;">Efe kurnaz</span></a>
#### <a href="https://freepik.com/author/rawpixel-com"><span style="color: #ff9465;">rawpixel.com</span></a>
#### <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><span style="color: #ff9465;">Rick Astley</span></a>
#### <a href="https://www.pexels.com/@ambient_nature_-atmosphere-1682386/"><span style="color: #ff9465;">Ambient_Nature_Atmosphere</span></a>
#### <a href="https://www.vecteezy.com/members/icon0"><span style="color: #ff9465;">icon0.com</span></a>
#### <a href="https://unsplash.com/@steve_j"><span style="color: #ff9465;">Steve Johnson</span></a>
#### <a href="https://unsplash.com/@abillion"><span style="color: #ff9465;">abillion</span></a>
#### <a href="https://unsplash.com/@litvinov"><span style="color: #ff9465;">Egor Litvinov</span></a>
#### <a href="https://unsplash.com/@screenpost"><span style="color: #ff9465;">SCREEN POST</span></a>
#### <a href="https://unsplash.com/@bmx22c"><span style="color: #ff9465;">bmx22c</span></a>
#### <a href="https://unsplash.com/@maxsaeling"><span style="color: #ff9465;">Max Saeling</span></a>
#### <a href="https://unsplash.com/@joshuanewton"><span style="color: #ff9465;">Joshua Newton</span></a>
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
