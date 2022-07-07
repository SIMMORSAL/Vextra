export interface RichChunkModel {
  name: string; //
  backgroundColor?: string;
  textColor?: string;
  longTextTop?: RichTextModel[];
  bigImage?: RichImageModel;
  videoClip?: string;
  imageBarLeft?: RichImageModel;
  textImageBar?: RichTextModel[];
  imageBarRight?: RichImageModel;
  longTextMiddle?: RichTextModel[];
  longTextEnd?: RichTextModel[];
  button1Title?: string;
  button1Href?: string;
  button2Title?: string;
  button2Href?: string;
}

export interface RichTextModel {
  text: string;
  textAlign?: string;
}

export interface RichImageModel {
  path: string;
  subText?: string;
}
