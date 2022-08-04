import { cacheImage } from "./tools";
import { Portfolio } from "../data/models/local-data/portfolio";

interface CacheImagesProps {
  portfolios: Portfolio[];
  startupImageCacheQueue: string[];
}

export const cacheImages = (p: CacheImagesProps) => {
  // * caching images
  ["/images/logo_big.png", "/images/landing_line.png", "/images/logo_small.png"].map(
    (s) => {
      cacheImage(s).catch((reason) => {
        console.log(`\n   Image Caching Failed:\n${reason}`);
      });
    }
  );

  p.portfolios.map((po) => {
    po.image &&
      cacheImage(po.image)
        .then((value) => {
          // console.log(`Image Caching Succeeded:  ${value}`);
        })
        .catch((reason) =>
          console.log(`Image Caching Failed:  ${po.image}\n${reason}`)
        );
    po.awardImage &&
      cacheImage(po.awardImage).catch((reason) =>
        console.log(`Image Caching Failed:  ${po.awardImage}\n${reason}`)
      );
  });

  p.startupImageCacheQueue.map((s) => {
    cacheImage(s).catch((reason) => {
      console.log(`\n   Image Caching Failed:\n${reason}`);
    });
  });
};
