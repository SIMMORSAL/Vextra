export interface RichChunkModel {
  nameId: string;
  backgroundColor?: string;
  textColor?: string;
  longTextsTop?: RichTextModel[];
  bigImage?: RichImageModel;
  smallImage?: RichImageModel;
  videoClip?: string;
  mediaBarLeftImage?: RichImageModel;
  mediaBarLeftVideo?: string;
  mediaBarText?: RichTextModel[];
  mediaBarRightImage?: RichImageModel;
  mediaBarRightVideo?: string;
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
