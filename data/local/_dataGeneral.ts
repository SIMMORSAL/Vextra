import { GeneralDataModel } from "../models/_GeneralData";

export const getGeneralData = (): GeneralDataModel => {
  return {
    logoBig: "/images/logo_big.png",
    logoSmall: "/images/logo_small.png",
    applyColorToLogo: true,
    fontAwesomeKitAddress: "", // TODO Fill this
    fonts: [
      "family=Source+Code+Pro",
      "Dosis",
      "Raleway:ital,wght@0,300;0,400;0,700;1,400",
      "Righteous",
      "Rubik+Moonrocks",
      "Pacifico",
    ].reduce((p, c) => `${p}&family=${c}`),
    defaultFont: "Raleway, sans-serif",
    startupImageCacheQueue: [
      "/images/my_image.jpg",
      "/images/portfolio/xphone/leading-background.jpg",
      "/images/portfolio/xphone/xphone.png",
      "/images/portfolio/scootify/scootify_red.jpg",
      "/images/portfolio/gallery/g0.jpg",
    ],
    // TODO (Optional) Paste your config here
    // firebaseConfig: {
    //   apiKey: "AIzaSyD7TE8...",
    //   authDomain: "vextra-app...",
    //   projectId: "vextra-app",
    //   storageBucket: "vextra-app...",
    //   messagingSenderId: "94380...",
    //   appId: "1:94380...",
    //   measurementId: "G-BXY...",
    // },
  };
};
