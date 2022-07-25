import { Portfolio } from "../models/local-data/portfolio";
import { getDataProject1 } from "./portfolio/getDataProject1";
import { getDataProject2 } from "./portfolio/getDataProject2";
import { getDataProject3 } from "./portfolio/getDataProject3";
import { getDataRichContentHandbook } from "./portfolio/getDataRichContentHandbook";
import { getDataScootifyObject } from "./portfolio/getDataScootifyObject";

export function getPortfolio(linkId: string): Portfolio {
  return getAllPortfolios().filter((value) => value.linkId === linkId)[0];
}

export function getAllPortfolios(): Portfolio[] {
  return [
    {
      linkId: "X-bike",
      name: "X|Bike",
      backgroundColor: "#0066ff",
      headerItemsColor: "#011736",
      isBackgroundDark: true,
      image: "/images/portfolio/PortfolioItemTemplate1.jpg",
      // image:
      //   "https://th.bing.com/th/id/R.58cc46069f9c1bfec000c83e79721d31?rik=V6%2bwTqIO36Y40g&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f05%2f24%2f374644-path-landscape-trees.jpg&ehk=4r8HqHCVUOTPA4f19szEL4vOhfNMFE4FPAQUSSsOg%2bA%3d&risl=&pid=ImgRaw&r=0",
      awardImage: "/images/portfolio/a_design_award.gif",
      pageRichContent: getDataProject3(),
    },
    {
      linkId: "scootify",
      name: "Scootify",
      backgroundColor: "#b63f31",
      headerItemsColor: "#d2d2d2",
      isBackgroundDark: false,
      image: "/images/portfolio/PortfolioItemTemplate2.jpg",
      pageRichContent: getDataProject2(),
    },
    {
      linkId: "scootify-object",
      name: "Scootify Object",
      // backgroundColor: "#ff0000",
      // headerItemsColor: "#3f0101",
      isBackgroundDark: false,
      image: "/images/portfolio/PortfolioItemScooterObject.jpg",
      pageRichContent: getDataScootifyObject(),
    },
    {
      linkId: "rich-content-handbook",
      name: "Rich Content Handbook",
      isBig: true,
      // backgroundColor: "#ff0000",
      // headerItemsColor: "#3f0101",
      isBackgroundDark: false,
      image: "/images/portfolio/PortfolioItemRichContentHandbook.jpg",
      pageRichContent: getDataRichContentHandbook(),
    },
    {
      linkId: "gallery",
      name: "Photography",
      backgroundColor: "#ff00ff",
      headerItemsColor: "#3a053a",
      isBackgroundDark: false,
      image: "/images/portfolio/PortfolioItemTemplate3.jpg",
      pageRichContent: getDataProject3(),
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
    //   pageContent: getDataProject2(),
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
