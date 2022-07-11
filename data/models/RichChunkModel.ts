export interface RichChunkModel {
  nameId: string;
  backgroundColor?: string;
  textColor?: string;
  longText?: RichTextModel[];
  bigImage?: RichImageModel;
  smallImage?: RichImageModel;
  videoClip?: string;
  imageBarLeft?: RichImageModel;
  imageBarLeftVideo?: string;
  imageBarText?: RichTextModel[];
  imageBarRight?: RichImageModel;
  imageBarRightVideo?: string;
  button1?: RichButton;
  button2?: RichButton;
  freeSpace?: string; // e.g: "200px", or "20vh"
}

export interface RichTextModel {
  text: string;
  textAlign?: string;
}

export interface RichImageModel {
  path: string;
  subText?: string;
  aspectRatio?: string; // you can write your image's width and height
  animateOnScroll?: boolean;
}

export interface RichButton {
  title: string;
  href: string;
}
