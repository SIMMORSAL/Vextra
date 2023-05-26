import { Portfolio } from "../models/local-data/portfolio";
import { getDataProject1XPhone } from "./portfolio/getDataProject1XPhone";
import { getDataProject2Scootify } from "./portfolio/getDataProject2Scootify";
import { getDataProject3Gallery } from "./portfolio/getDataProject3Gallery";
import { getDataRichContentHandbook } from "./portfolio/getDataRichContentHandbook";
import { getDataScootifyObject } from "./portfolio/getDataScootifyObject";

export function getPortfolio(linkId: string): Portfolio {
  return getAllPortfolios().filter((value) => value.linkId === linkId)[0];
}

export function getAllPortfolios(): Portfolio[] {
  return [
    {
      linkId: "one-more-faucet",
      name: "One More Faucet",
      isBig: true,
      backgroundColor: "#ffffff",
      headerItemsColor: "#777",
      textColor: "#fff",
      isBackgroundDark: false,
      image: "/images/portfolio/one-more-faucet/PortfolioItemOneMore.jpg",
      pageRichContent: [],
      // awardImage: "/images/portfolio/xphone/xphone-award.png",
      awardIsTransparent: true,
      // awardAspectRatio: "244/376",
    },
  ];
}
