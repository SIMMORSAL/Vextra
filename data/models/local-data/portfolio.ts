import { RichChunkModel } from "../RichChunkModel";

export interface Portfolio {
  linkId: string;
  name: string;
  image: string;
  color: string;
  backgroundColor: string;
  isBackgroundDark: boolean;
  award?: string;
  pageContent: RichChunkModel[];
}
