import { Portfolio } from "./models/portfolio";

export function getPortfolios(): Portfolio[] {
  return [
    {
      name: "AB",
      color: "#0066ff",
      backgroundColor: "#011736",
      image: "ab.png",
      award: "a_design_award.gif",
    },
    {
      name: "ab",
      color: "#ff00ff",
      backgroundColor: "#3a053a",
      image: "umbrella_2.png",
      // award: "a_design_award.gif",
    },
    {
      name: "ab",
      color: "#ff0000",
      backgroundColor: "#3f0101",
      image: "umbrella.png",
      award: "a_design_award.gif",
    },
    // {
    //   name: "Desk Light",
    //   color: "#00ff7c",
    //   backgroundColor: "#00381c",
    //   image: "desk_light.png",
    // },
  ];
}
