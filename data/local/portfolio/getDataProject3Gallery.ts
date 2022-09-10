import { RichChunkModel } from "../../models/rich-chunk/RichChunkModel";

export function getDataProject3Gallery(): RichChunkModel[] {
  const refs = [
    "Katerina Kerdi",
    "Giuseppe Mondi",
    "Artiom Vallat",
    "Allyson Beaucourt",
    "Roma Ryabchenko",
    "Andre Furtado",
    "Simon Wilkes",
    "Benjamin Davies",
    "Paul Summers",
    "Hojjat Aghaei",
    "Andre Furtado",
    "Ales Krivec",
    "Qingbao Meng",
    "Thomas Morse",
    "Adam Kool",
    "Asal Lotfi",
    "Johannes Plenio",
    "Andre Furtado",
  ];

  const refLinks = [
    "https://unsplash.com/@katekerdi",
    "https://unsplash.com/@masinutoscana",
    "https://unsplash.com/@virussinside",
    "https://unsplash.com/@daymnous",
    "https://unsplash.com/@n3moy",
    "https://unsplash.com/@andre_furtado",
    "https://unsplash.com/@simonfromengland",
    "https://unsplash.com/@bendavisual",
    "https://unsplash.com/@paul_s",
    "https://unsplash.com/@hojjat1995",
    "https://unsplash.com/@andre_furtado",
    "https://unsplash.com/@aleskrivec",
    "https://unsplash.com/@ideasboom",
    "https://unsplash.com/@timorse",
    "https://unsplash.com/@adamkool",
    "https://unsplash.com/@asal_lotfi",
    "https://unsplash.com/@jplenio",
    "https://unsplash.com/@andre_furtado",
  ];

  const images = Array(18)
    .fill(0)
    .map((_, i) => {
      return {
        freeSpaceTop: "24px",
        bigImage: {
          path: `/images/portfolio/gallery/g${i}.jpg`,
          aspectRatio: i === 0 ? "2400/1600" : i === 1 ? "2400/3600" : undefined,
          animation: {
            animateOnScroll: i !== 0,
            animateFrom: "bottom",
          },
        },
        textsBottom: [
          {
            align: "center",
            animation: {
              animateOnScroll: true,
              animateFrom: "top",
              translateDistance: 5,
              duration: 400,
            },
            text: `
##### [${refs[i]}](${refLinks[i]})
`,
          },
        ],
      } as RichChunkModel;
    });

  return (
    [
      {
        minHeight: "20vh",
        textsTop: [
          {
            align: "center",
            size: "4.3em",
            text: "Gallery",
            fontFamily: "'Pacifico', cursive",
          },
        ],
      },
      {
        backgroundColor: "#eee",
        textsTop: [
          {
            align: "center",
            text: `
One of my hobbies is climbing mountains and taking pictures. Please enjoy some of them
`,
          },
        ],
      },
      ...images,
      {
        minHeight: "30vh",
      },
    ] as RichChunkModel[]
  ).map((v: RichChunkModel, i) => {
    if (v.nameId === undefined) v.nameId = i.toString();
    return v;
  });
}
