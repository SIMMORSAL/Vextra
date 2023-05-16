import { History } from "../models/local-data/history";
import { AboutMeData } from "../models/local-data/aboutMeData";

export function getAboutMeData(): AboutMeData {
  return {
    image: "/images/my_image.png",
    name: "Mitra Sisakht",
    textTop: `
I am an industrial Designer. I was born in Sisakht(Kohgiluye &
Boyerahmad province), Grew up in Isfahan. I have always been
interested in creating objects by hand when I was a child, but since I
got familiar with different design fields, I knew industrial design and
whatever related to it are in my interest zone. So overtime, this
interest was transfered from creating things by hand in childhood to
creating useful objects for life. As a result I took up Industrial Design
as my major in the university.
Atier graduation from BCs program, I decided to work despite my
desire to continue my studies in MCs peogram. Atier gaining valuable
experiences during the years of working in multiple companies, now I
intend to get to well established Politecnico di Milano University, to
expand my knowledge in Design program.
`,
    textBottom: ``,
  };
}

export function getHistory(): History[] {
  return [
    {
      groupTitle: "Work history",
      icon: "fa-solid fa-briefcase",
      items: [
        {
          title: "Mirnegaar",
          afterTitle: "Packaging Structure Designer",
          date: "April 2022 – Present",
          description: `
- Some explainations here
- Some more here
`,
        },
        {
          title: "Teram",
          afterTitle: "Packaging Structure Designer",
          date: "December 2020 – September 2021",
          description: `
`,
        },
        {
          title: "Anil Pack",
          afterTitle: "Graphic Designer",
          date: "January 2019 – November 2020",
          description: `
`,
        },
        {
          title: "Color Season",
          afterTitle: "Photographer",
          date: "December 2018 – December 2018",
          description: `
_THIS DOESN'T BELONG HERE!_
`,
        },
        {
          title: "Goharbafan",
          afterTitle: "YOUR JOB TITLE HERE",
          date: "July 2015 – September 2015",
          description: `
`,
        },
        {
          title: "Isfahan Fashion Group",
          afterTitle: "Fashion Designer",
          date: "July 2015 – ???",
          description: `
_THIS MIGHT NOT BELONG HERE EITHER!_
`,
        },
      ],
    },
    {
      groupTitle: "Education",
      icon: "fa-solid fa-graduation-cap",
      items: [
        {
          title: "Tabriz Art University, Tariz, Iran",
          date: "2013 - 2018",
          description: `
Bachelor of Industrial Design \ 
GPA : 15.31 (Out of 20)
`,
        },
        {
          title: "Banifateme High School, Isfahan, Iran",
          date: "?MONTH? 2012",
          description: `
Mathematcs & Physics Diploma \ 
GPA : 13.36 (Out of 20)
`,
        },
      ],
    },
    {
      groupTitle: "Achievements",
      icon: "fa-solid fa-trophy",
      items: [
        {
          title: "A Design Award Competition",
          date: "2022",
          description: "Winner of Iron A Design Award & Competition for One More",
        },
        {
          title: "Gensai Design & Planning Competition",
          date: "2020",
          description: "GENSAI Design Award, with Life Saving Umbrela",
        },
        {
          title: "National Award of Packaging Design in Cultural Industries",
          date: "2020",
          description: " Silver Award, with Jelveh ",
        },
      ],
    },
    {
      groupTitle: "Operating Activities",
      icon: "fa-solid fa-person-digging",
      items: [
        {
          title: "Number 3",
          afterTitle: "Magazine Layout Designer",
          date: "2018",
          description: `
Tarahi-Novin Student Quarterly Magazine Layout Design ti Number 3 ti Islamic Azad University,
Science and Research Branch ti Tehran - Iran -- THIS NEED EDIT!  
`,
        },
        {
          title: "Dr. Mahmoud Golabchi International Architecture Festival",
          afterTitle: "3D Modeler",
          date: "2018",
          description: `

Statue 3D Modeling for Dr. Mahmoud Golabchi International Architecture Festival ti Pars
University ti Tehran - Iran -- THIS NEED EDIT!  
`,
        },
      ],
    },
    {
      groupTitle: "Licenses",
      icon: "fa-solid fa-file",
      items: [
        {
          title: "Design: Creation of Artifacts in Society",
          date: "2020",
          afterTitle: "Coursera",
        },
        {
          title: "Prototyping for Digital Products and Websites",
          date: "2020",
          afterTitle: "Gymnasium",
        },
        {
          title: "UX Fundeamental Course",
          date: "2020",
          afterTitle: "Gymnasium",
        },
        {
          title: "Fashion as Design Course",
          date: "2020",
          afterTitle: "Coursera",
        },
        {
          title: "Fashion Design Course",
          date: "July 2013 - January 2014 --- or 2019?!",
          afterTitle: "Danesh Ara Academy of Arts, Isfahan",
        },
        {
          title: "Product Design and Smart Home Workshop",
          date: "2018 --- or 2019?!",
          afterTitle: "Isfahan University of Art, Isfahan",
        },
        {
          title: "From Idea to Italy Workshop",
          date: "2018 --- or 2019?!",
          afterTitle: "Pin Design Studio, Tehran",
        },
        {
          title: "The Introduction of Technology in Fashion, Design And Garment",
          date: "2017 --- or 2018?!",
          afterTitle: "East Azarbaijan Industrial Management Organazation, Tabriz",
        },
        {
          title:
            "Entrepreneurship workshop titled “Entrepreneurship in Art” and “Trade and Sales Skills of Artistic Products”",
          date: "2018",
          afterTitle: "East Azarbaijan Industrial Management Organazation, Tabriz",
        },
        {
          title: "Gensai Design Workshop",
          date: "2018",
          afterTitle: "Embassy of Japan in Tehran",
        },
        {
          title: "Car Modeling with Clay Workshop",
          date: "2016",
          afterTitle: "Tabriz Islamic Art University",
        },
      ],
    },
  ];
}
