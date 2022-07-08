import { Portfolio } from "../models/local-data/portfolio";
import { RichChunkModel } from "../models/RichChunkModel";
import { getDataProject1 } from "./portfolio/getDataProject1";
import { getDataProject2 } from "./portfolio/getDataProject2";
import { getDataProject3 } from "./portfolio/getDataProject3";

export function getPortfolio(linkId: string): Portfolio {
  return getAllPortfolios().filter((value) => value.linkId === linkId)[0];
}

export function getAllPortfolios(): Portfolio[] {
  return [
    {
      linkId: "one-more",
      name: "One More Faucet",
      color: "#0066ff",
      backgroundColor: "#011736",
      isBackgroundDark: false,
      image: "/images/portfolio/ab.png",
      // image:
      //   "https://th.bing.com/th/id/R.58cc46069f9c1bfec000c83e79721d31?rik=V6%2bwTqIO36Y40g&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f05%2f24%2f374644-path-landscape-trees.jpg&ehk=4r8HqHCVUOTPA4f19szEL4vOhfNMFE4FPAQUSSsOg%2bA%3d&risl=&pid=ImgRaw&r=0",
      award: "/images/portfolio/a_design_award.gif",
      pageContent: getDataProject1(),
    },
    {
      linkId: "umbrella-ca",
      name: "ab",
      color: "#ff00ff",
      backgroundColor: "#3a053a",
      isBackgroundDark: false,
      image: "/images/portfolio/umbrella_2.png",
      pageContent: getDataProject2(),
    },
    {
      linkId: "umbrella",
      name: "umbrella",
      color: "#ff0000",
      backgroundColor: "#3f0101",
      isBackgroundDark: true,
      image: "/images/portfolio/umbrella.png",
      award: "/images/portfolio/GDPJ_logo.png",
      pageContent: getDataProject3(),
    },
    // {
    //   name: "Desk Light",
    //   color: "#00ff7c",
    //   backgroundColor: "#00381c",
    //   image: "desk_light.png",
    // },
  ];
}
