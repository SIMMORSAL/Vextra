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
      linkId: "x-phone",
      name: "X|Phone",
      isBig: true,
      backgroundColor: "#282649",
      headerItemsColor: "#8a85ff",
      textColor: "#fff",
      isBackgroundDark: false,
      image: "/images/portfolio/xphone/PortfolioItemTemplate1.jpg",
      pageRichContent: getDataProject1XPhone(),
      awardImage: "/images/portfolio/xphone/xphone-award.png",
      awardIsTransparent: true,
      // awardAspectRatio: "244/376",
    },
    {
      linkId: "scootify",
      name: "Scootify",
      backgroundColor: "#b63f31",
      headerItemsColor: "#d2d2d2",
      isBackgroundDark: true,
      image: "/images/portfolio/scootify/PortfolioItemTemplate2.jpg",
      pageRichContent: getDataProject2Scootify(),
      awardImage: "/images/portfolio/scootify/scootify-award.png",
      // awardAspectRatio: "520/300",
    },
    {
      linkId: "gallery",
      name: "Gallery",
      // backgroundColor: "#bfd2cb",
      headerItemsColor: "#500650",
      isBackgroundDark: false,
      image: "/images/portfolio/gallery/PortfolioItemTemplate3.jpg",
      pageRichContent: getDataProject3Gallery(),
    },
    {
      linkId: "rich-content-handbook",
      name: "Rich Content Handbook",
      isBig: true,
      backgroundColor: "#a86048",
      headerItemsColor: "#fff3ee",
      isBackgroundDark: false,
      image: "/images/portfolio/handbook/PortfolioItemRichContentHandbook.jpg",
      pageRichContent: getDataRichContentHandbook(),
    },
    {
      linkId: "scootify-object",
      name: "Scootify Object",
      backgroundColor: "#f5d7af",
      headerItemsColor: "#313141",
      isBackgroundDark: false,
      image: "/images/portfolio/PortfolioItemScootifyObject.jpg",
      pageRichContent: getDataScootifyObject(),
    },
  ];
}
