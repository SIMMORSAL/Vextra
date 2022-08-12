import { RichChunkModel } from "../rich-chunk/RichChunkModel";

export interface Portfolio {
  linkId: string;
  name: string;
  isBig?: boolean;
  image: string;
  awardImage?: string;
  awardAspectRatio?: string;
  isBackgroundDark?: boolean;
  pageRichContent: RichChunkModel[];
  headerItemsColor?: string;
  backgroundColor?: string;
  textColor?: string;
}
