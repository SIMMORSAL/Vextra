import { _GeneralDataModel } from "../models/_GeneralData";

export const getGeneralData = (): _GeneralDataModel => {
  return {
    logoBig: "/images/logo_big.png",
    logoSmall: "/images/logo_small.png",
    applyColorToLogo: true,
  };
};
