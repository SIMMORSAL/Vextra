import { GeneralDataModel } from "../models/_GeneralData";

export const getGeneralData = (): GeneralDataModel => {
  return {
    logoBig: "/images/logo_big.png",
    logoSmall: "/images/logo_small.png",
    applyColorToLogo: true,
    fontAwesomeKitAddress: "https://kit.fontawesome.com/195ee4c6bd.js", // TODO ERASE THIS
    fonts: [
      "family=Source+Code+Pro",
      "Dosis",
      "Raleway:ital,wght@0,300;0,400;0,700;1,400",
      "Righteous",
      "Rubik+Moonrocks",
    ].reduce((p, c) => `${p}&family=${c}`),
    defaultFont: "Raleway, sans-serif",
    startupImageCacheQueue: [""],
  };
};
