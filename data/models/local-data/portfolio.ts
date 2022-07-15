import { RichChunkModel } from "../rich-chunk/RichChunkModel";

export interface Portfolio {
  linkId: string;
  name: string;
  image: string;
  color: string;
  isBackgroundDark: boolean;
  award?: string;
  pageRichContent: RichChunkModel[];
  headerColor: string;
  headerItemsColor: string;
}
