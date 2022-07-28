import { getAllPortfolios } from "../data/local/dataPortfoliosPage";
import { cacheImage } from "./tools";

export const runStartupTasks = () => {
  // * caching images
  getAllPortfolios().map((v) => {
    v.image &&
      cacheImage(v.image)
        .then((value) => {
          // console.log(`Image Caching Succeeded:  ${value}`);
        })
        .catch((reason) =>
          console.log(`Image Caching Failed:  ${v.image}\n${reason}`)
        );
    v.awardImage &&
      cacheImage(v.awardImage).catch((reason) =>
        console.log(`Image Caching Failed:  ${v.awardImage}\n${reason}`)
      );
  });
  cacheImage(
    "https://avatarairlines.com/wp-content/uploads/2020/05/Female-Placeholder.png"
  ).catch((reason) =>
    console.log(
      `Image Caching Failed:  "https://avatarairlines.com/wp-content/uploads/2020/05/Female-Placeholder.png"\n${reason}`
    )
  );
};
