import { Portfolio } from "../models/local-data/portfolio";
import { getDataProject1 } from "./portfolio/getDataProject1";
import { getDataProject2Scootify } from "./portfolio/getDataProject2Scootify";
import { getDataProject3Gallery } from "./portfolio/getDataProject3Gallery";
import { getDataRichContentHandbook } from "./portfolio/getDataRichContentHandbook";
import { getDataScootifyObject } from "./portfolio/getDataScootifyObject";
import { getDataUmbrella } from "./portfolio/getDataUmbrella";

export function getPortfolio(linkId: string): Portfolio {
  return getAllPortfolios().filter((value) => value.linkId === linkId)[0];
}

export function getAllPortfolios(): Portfolio[] {
  return [
    // {
    //   linkId: "Umbrella",
    //    name: "Umbrella",
    // backgroundColor: "#90d3d3",
    //headerItemsColor:""
    // isBig: true,
    //   image: "/images/portfolio/umbrella/6.24.png",
    //  awardImage: "/images/portfolio/umbrella/GDPJ_logo.png",
    //   pageRichContent: getDataUmbrella(),
    // },
    {
      linkId: "X-bike",
      name: "X|Bike",
      isBig: true,
      backgroundColor: "#0066ff",
      headerItemsColor: "#011736",
      isBackgroundDark: true,
      image: "/images/portfolio/PortfolioItemTemplate1.jpg",
      // image:
      //   "https://th.bing.com/th/id/R.58cc46069f9c1bfec000c83e79721d31?rik=V6%2bwTqIO36Y40g&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f05%2f24%2f374644-path-landscape-trees.jpg&ehk=4r8HqHCVUOTPA4f19szEL4vOhfNMFE4FPAQUSSsOg%2bA%3d&risl=&pid=ImgRaw&r=0",
      awardImage: "/images/portfolio/a_design_award.gif",
      pageRichContent: getDataProject3Gallery(),
    },
    {
      linkId: "scootify",
      name: "Scootify",
      backgroundColor: "#b63f31",
      headerItemsColor: "#d2d2d2",
      isBackgroundDark: false,
      image: "/images/portfolio/scootify/PortfolioItemTemplate2.jpg",
      pageRichContent: getDataProject2Scootify(),
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
    // {
    //   linkId: "one-more",
    //   name: "One More Faucet",
    //   color: "#0066ff",
    //   backgroundColor: "#011736",
    //   isBackgroundDark: false,
    //   image: "/images/portfolio/ab.png",
    //   // image:
    //   //   "https://th.bing.com/th/id/R.58cc46069f9c1bfec000c83e79721d31?rik=V6%2bwTqIO36Y40g&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f05%2f24%2f374644-path-landscape-trees.jpg&ehk=4r8HqHCVUOTPA4f19szEL4vOhfNMFE4FPAQUSSsOg%2bA%3d&risl=&pid=ImgRaw&r=0",
    //   award: "/images/portfolio/a_design_award.gif",
    //   pageContent: getDataProject1(),
    // },
    // {
    //   linkId: "umbrella-ca",
    //   name: "ab",
    //   color: "#ff00ff",
    //   backgroundColor: "#3a053a",
    //   isBackgroundDark: false,
    //   image: "/images/portfolio/umbrella_2.png",
    //   pageContent: getDataProject2Scootify(),
    // },
    // {
    //   linkId: "umbrella",
    //   name: "umbrella",
    //   color: "#ff0000",
    //   backgroundColor: "#3f0101",
    //   isBackgroundDark: true,
    //   image: "/images/portfolio/umbrella.png",
    //   award: "/images/portfolio/GDPJ_logo.png",
    //   pageContent: getDataProject3(),
    // },
    // {
    //   name: "Desk Light",
    //   color: "#00ff7c",
    //   backgroundColor: "#00381c",
    //   image: "desk_light.png",
    // },
  ];
}
