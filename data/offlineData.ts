import { Portfolio } from "./models/portfolio";
import { Achievement } from "./models/achievement";

export function getPortfolios(): Portfolio[] {
  return [
    {
      name: "One More",
      color: "#0066ff",
      backgroundColor: "#011736",
      isBackgroundDark: false,
      image: "ab.png",
      award: "a_design_award.gif",
    },
    {
      name: "ab",
      color: "#ff00ff",
      backgroundColor: "#3a053a",
      isBackgroundDark: false,
      image: "umbrella_2.png",
      // award: "a_design_award.gif",
    },
    {
      name: "ab",
      color: "#ff0000",
      backgroundColor: "#3f0101",
      isBackgroundDark: true,
      image: "umbrella.png",
      award: "GDPJ_logo.png",
    },
    // {
    //   name: "Desk Light",
    //   color: "#00ff7c",
    //   backgroundColor: "#00381c",
    //   image: "desk_light.png",
    // },
  ];
}

export function getAchievements(): Achievement[] {
  return [
    {
      groupName: "Work history",
      icon: "fa-solid fa-briefcase",
      items: [
        {
          title: "Teram printing",
          data: "2021",
        },
      ],
    },
    {
      groupName: "Licenses",
      icon: "fa-solid fa-file-certificate",
      items: [
        {
          title: "Teram printing",
          data: "2021",
        },
      ],
    },
    {
      groupName: "Achievements",
      icon: "fa-solid fa-trophy-star",
      items: [
        {
          title: "Teram printing",
          data: "2021",
        },
      ],
    },
    {
      groupName: "Executive tasks",
      icon: "fa-solid fa-file-certificate",
      items: [
        {
          title: "Teram printing",
          data: "2021",
        },
      ],
    },
  ];
}
