export interface _GeneralDataModel {
  logo: string;
  applyColorOnLogo: boolean;
}

export const getGeneralData = (): _GeneralDataModel => {
  return {
    logo: "/images/logo_big.png",
    // logo: "https://th.bing.com/th/id/R.2e73d56c8d9e8ffa3fc6e5041bc0a5e5?rik=Aacc%2f6WK3DGu9A&pid=ImgRaw&r=0",
    // logo: "https://th.bing.com/th/id/OIP.EPB7KqcRZCsskl020CcppwHaLL?pid=ImgDet&rs=1",
    applyColorOnLogo: true,
  };
};
