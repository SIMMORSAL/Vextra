import { Achievement } from "../models/achievement";

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
