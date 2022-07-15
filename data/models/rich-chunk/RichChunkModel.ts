export interface RichChunkModel {
  nameId: string;
  backgroundColor?: string;
  textColor?: string;
  longTextsTop?: RichTextModel[];
  bigImage?: RichImageModel;
  smallImage?: RichImageModel;
  bigVideo?: RichVideoModel;
  smallVideo?: RichVideoModel;
  mediaBar?: MediaBarModel;
  longTextsBottom?: RichTextModel[];
  freeSpace?: string; // e.g: "200px", or "20vh"
}

export interface MediaBarModel {
  leftImage?: RichImageModel;
  leftVideo?: string;
  text?: RichTextModel[];
  rightImage?: RichImageModel;
  rightVideo?: string;
}

export interface RichTextModel {
  text: string;
  align?: "start" | "center" | "end";
  userSelect?: string;
  animation?: RichAnimation;
}

export interface RichImageModel {
  path: string;
  subText?: string;
  align?: "start" | "center" | "end"; // works only if small
  aspectRatio?: string; // you can write your image's width and height. e.g: "800/600". if you provide this, content won't jump when image starts loading
  animation?: RichAnimation;
}

export interface RichVideoModel {
  path: string;
  align?: "start" | "center" | "end"; // works only if small
  aspectRatio?: string;
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
