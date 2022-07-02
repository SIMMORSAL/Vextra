import { History } from "../models/history";

export function getHistory(): History[] {
  return [
    {
      groupName: "Work history",
      icon: "fa-solid fa-briefcase",
      items: [
        {
          title: "COOLSOFT Ltd",
          date: "September 2020 – Present",
          description: `
- Develop and maintain 12+ customized data-centric web applications and services using
ASP.NET, C#.NET, LINQ, MS SQL, and Agile/SCRUM methodologies
- Create and apply UI requirements utilizing ASP.NET, JS/jQuery, HTML, and CSS
- Collaborate with business analysts, users, and federal agencies to collect requirements and provide implementation
`,
        },
        {
          title: "Minisoft",
          date: "June 2017 – August 2020",
          description: `
- Enhance process accuracy from 89% to 99%, saving 1000+ hours yearly
- Implement Business Intelligence/ETL solutions to integrate disparate data sources
towards a centralized datastore
`,
        },
        {
          title: "SARLEN & BOUTRO INFOTECH LLC",
          date: "June 2013 – August 2016",
          description: `
- Improve the performance of all ETL/SQL and online components to ensure strict service
level agreements, timely response and data reliability
- Programmed customized software solutions that helped customers to use their capital
and manage risk more effectively
`,
        },
      ],
    },
    {
      groupName: "Licenses",
      icon: "fa-solid fa-file",
      items: [
        {
          title: "DEVRY UNIVERSITY, Sherman Oaks, CA",
          date: "May 2016",
          description: `
Bachelor of Science in Information Technology \ 
Honors: cum laude (GPA: 3.6/4.0)
`,
        },
        {
          title: "Coder smith React Bootcamp, Los Angeles, CA",
          date: "June 2019",
        },
      ],
    },
    {
      groupName: "Achievements",
      icon: "fa-solid fa-trophy",
      items: [
        {
          title: "Teram printing",
          date: "2021",
        },
        {
          title: "Teram printing",
          date: "2021",
        },
        {
          title: "Teram printing",
          date: "2021",
        },
        {
          title: "Teram printing",
          date: "2021",
        },
        {
          title: "Teram printing",
          date: "2021",
        },
      ],
    },
    {
      groupName: "Executive tasks",
      icon: "fa-solid fa-chart-line",
      items: [
        {
          title: "Teram printing",
          date: "2021",
        },
        {
          title: "Teram printing",
          date: "2021",
        },
      ],
    },
  ];
}
