import { RichTextModel } from "./RichTextModel";

export interface RichChunkModel {
  name: string;
  backgroundColor: string;
  textColor: string;
  longTextTop: RichTextModel[];
  bigImage: string;
  videoClip: string;
  smallImageLeft: string;
  shortText: RichTextModel[];
  smallImageRight: string;
  longTextMiddle: RichTextModel[];
  longTextEnd: RichTextModel[];
  button1Title: string;
  button1Href: string;
  button2Title: string;
  button2Href: string;
}
