import { RichChunkModel } from "../rich-chunk/RichChunkModel";

export interface Portfolio {
  linkId: string;
  name: string;
  image: string;
  awardImage?: string;
  backgroundColor?: string;
  isBackgroundDark?: boolean;
  pageRichContent: RichChunkModel[];
  headerColor?: string;
  headerItemsColor?: string;
}
