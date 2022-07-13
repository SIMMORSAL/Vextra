import { RichChunkModel } from "../../models/RichChunkModel";

export function getDataProject1(): RichChunkModel[] {
  return [
    {
      nameId: "asdf",
      longTextsTop: [
        {
          textAlign: "center",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
      ],
      bigImage: {
        path: "https://th.bing.com/th/id/OIP.XInPSfSw_KKOcuwTSDbW1AHaF7?pid=ImgDet&rs=1",
        subText:
          "asdlkfjlasdk jflaskd lsakd fflksdj lskdj fsdf df fds s f fsds  sdd   dss fd sf ",
        aspectRatio: "474/379",
      },
    },
    {
      nameId: "sdfasdfasd",
      longTextsTop: [
        {
          textAlign: "center",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
        {
          text: `
This is a full blown test on the text functionality of Rich Chunk. Lorem ipsum dolar sit amet sad fasd fasd fasdf 
asdf asd fasd ffasd fsad fasd ffsad fasd fsd fsd sad f

[example.com](https://example.com)
`,
        },
      ],
      bigImage: {
        path: "https://th.bing.com/th/id/OIP.FH39JpbgRZ3pozFqcE3A5AHaEo?pid=ImgDet&rs=1",
        subText:
          "asdlkfjlasdk jflaskd lsakd fflksdj lskdj fsdf df fds s f fsds  sdd   dss fd sf ",
        aspectRatio: "900/562",
        animation: {
          animateOnScroll: true,
          animateFrom: "bottomRight",
        },
      },
    },
    {
      nameId: "Third",
      longTextsTop: [
        {
          textAlign: "center",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
        {
          textAlign: "start",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
        {
          textAlign: "end",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
        {
          text: `
This is a full blown test on the text functionality of Rich Chunk. Lorem ipsum dolar sit amet sad fasd fasd fasdf 
asdf asd fasd ffasd fsad fasd ffsad fasd fsd fsd sad f
`,
        },
        {
          textAlign: "center",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
        {
          textAlign: "center",
          text: "# This is a full blown test on the text functionality of Rich Chunk. Lorem ipsum dolar sit amet sad fasd fasd fasdf \nasdf asd fasd ffasd fsad fasd ffsad fasd fsd fsd sad f",
        },
        {
          textAlign: "center",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
        {
          textAlign: "center",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
      ],
      bigImage: {
        path: "https://th.bing.com/th/id/R.58cc46069f9c1bfec000c83e79721d31?rik=V6%2bwTqIO36Y40g&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f05%2f24%2f374644-path-landscape-trees.jpg&ehk=4r8HqHCVUOTPA4f19szEL4vOhfNMFE4FPAQUSSsOg%2bA%3d&risl=&pid=ImgRaw&r=0",
        subText:
          "asdlkfjlasdk jflaskd lsakd fflksdj lskdj fsdf df fds s f fsds  sdd   dss fd sf ",
        aspectRatio: "4500/2700",
      },
    },
  ];
}
