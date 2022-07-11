import { RichChunkModel } from "../../models/RichChunkModel";

export function getDataProject2(): RichChunkModel[] {
  return [
    {
      nameId: "sdfasdfasd",
      longText: [
        {
          textAlign: "center",
          text: "# aslkdfjl skdjflksdj flksdf",
        },
      ],
      bigImage: {
        path: "https://th.bing.com/th/id/OIP.FH39JpbgRZ3pozFqcE3A5AHaEo?pid=ImgDet&rs=1",
        subText:
          "asdlkfjlasdk jflaskd lsakd fflksdj lskdj fsdf df fds s f fsds  sdd   dss fd sf ",
        aspectRatio: "900/562",
        animateOnScroll: true,
      },
    },
    {
      nameId: "bigImageTest",
      smallImage: {
        path: "https://th.bing.com/th/id/R.2e73d56c8d9e8ffa3fc6e5041bc0a5e5?rik=Aacc%2f6WK3DGu9A&pid=ImgRaw&r=0",
      },
    },
    {
      nameId: "Third",
      longText: [
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
        animateOnScroll: false,
      },
    },
  ];
}
