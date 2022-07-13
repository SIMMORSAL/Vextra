export interface RichChunkModel {
  nameId: string;
  backgroundColor?: string;
  textColor?: string;
  longTextsTop?: RichTextModel[];
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
  longTextsBottom?: RichTextModel[];
  freeSpace?: string; // e.g: "200px", or "20vh"
}

export interface RichTextModel {
  text: string;
  textAlign?: "start" | "center" | "end";
  userSelect?: string;
  animation?: RichAnimation;
}

export interface RichImageModel {
  path: string;
  subText?: string;
  aspectRatio?: string; // you can write your image's width and height. e.g: "800/600". if you provide this, content won't jump when image starts loading
  animation?: RichAnimation;
}

export interface RichButton {
  title: string;
  href: string;
}

export interface RichAnimation {
  animateOnScroll?: boolean;
  translateDistance?: number; // e.g: 25vh and 25vw
  animateFrom?:
    | "none"
    | "top"
    | "topRight"
    | "right"
    | "bottomRight"
    | "bottom"
    | "bottomLeft"
    | "left"
    | "topLeft";
}
