import { GeneralDataModel } from "../models/_GeneralData";

export const getGeneralData = (): GeneralDataModel => {
  return {
    logoBig: "/images/logo_big.png",
    logoSmall: "/images/logo_small.png",
    applyColorToLogo: true,
  };
};
