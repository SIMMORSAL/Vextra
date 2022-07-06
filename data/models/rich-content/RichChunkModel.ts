export interface RichChunkModel {
  name: string; //
  backgroundColor?: string;
  textColor?: string;
  longTextTop?: RichTextModel[];
  bigImage?: string;
  videoClip?: string;
  imageBarLeft?: string;
  textImageBar?: RichTextModel[];
  imageBarRight?: string;
  longTextMiddle?: RichTextModel[];
  longTextEnd?: RichTextModel[];
  button1Title?: string;
  button1Href?: string;
  button2Title?: string;
  button2Href?: string;
}

export interface RichTextModel {
  text: string;
  textAlign: string;
}
