import { History } from "../models/local-data/history";
import { AboutMeData } from "../models/local-data/aboutMeData";

export function getAboutMeData(): AboutMeData {
  return {
    image:
      // "https://avatarairlines.com/wp-content/uploads/2020/05/Female-Placeholder.png",
      "/images/my_image.jpg",
    // "https://j.plenio.de/images/igallery/resized/701-800/jplenio_IMG_6405_3-748-4000-4000-100.jpg",
    name: "Jane Smith",
    textTop: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
convallis velit. Nunc bibendum nibh in lectus convallis aliquam vitae id
diam. Ut ut ante eu dui placerat sodales. Suspendisse vulputate maximus
nisl, sed suscipit ante lacinia ac. Vestibulum suscipit, sapien vitae
convallis porttitor, mauris ligula placerat nibh, a ornare mauris diam at
erat. Ut nec magna mauris. Integer accumsan tempus quam, elementum pharetra
elit suscipit id.
`,
    textBottom: `
Etiam at nisl tempor nibh iaculis mattis. Aliquam quam leo, efficitur
fringilla commodo eu, vehicula ut velit. Nam eu ante vulputate libero
convallis gravida et at dolor. In est justo, viverra pretium ullamcorper
pellentesque pellentesque. Fusce turpis erat, congue in lobortis ut,
viverra et nibh. Suspendisse vel tortor aliquam, rhoncus dui et, sagittis
arcu. Cras dictum sapien purus, justo, viverra pretium ullamcorper
pellentesque pellentesque. Fusce turpis erat, congue in lobortis ut,
viverra et nibh. Suspendisse vel tortor aliquam, rhoncus dui et, sagittis
arcu. Cras dictum sapien purus, sed vulputate augue convallis consectetur.
Orci varius natoque penatibus et magnis dis parturient montes, nascetur
ridiculus mus.
`,
  };
}

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
          title: "awwwards. design winner ",
          date: "2021",
          description: "for the website [example.com](https://example.com)",
        },
        {
          title: "React Open Source Awards",
          date: "2020",
        },
      ],
    },
  ];
}
