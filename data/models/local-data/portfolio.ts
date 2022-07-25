import { RichChunkModel } from "../rich-chunk/RichChunkModel";

export interface Portfolio {
  linkId: string;
  name: string;
  image: string;
  isBig?: boolean;
  awardImage?: string;
  backgroundColor?: string;
  isBackgroundDark?: boolean;
  pageRichContent: RichChunkModel[];
  headerItemsColor?: string;
}
