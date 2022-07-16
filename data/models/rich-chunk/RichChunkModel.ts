export interface RichChunkModel {
  nameId: string;
  textColor?: string;
  backgroundColor?: string | string[]; // TODO
  backgroundImage?: string; // TODO
  longTextsTop?: RichTextModel[];
  bigImage?: RichImageModel;
  smallImage?: RichImageModel;
  bigVideo?: RichVideoModel;
  smallVideo?: RichVideoModel;
  mediaBar?: MediaBarModel;
  longTextsBottom?: RichTextModel[];
  freeSpace?: string; // e.g: "200px", or "20vh"
}

export interface RichTextModel {
  text: string;
  align?: "start" | "center" | "end";
  userSelect?: string;
  animation?: RichAnimation;
  fontFamily?: string; // TODO
}

export interface RichImageModel {
  path: string;
  subText?: string;
  align?: "start" | "center" | "end"; // works only if small // TODO
  aspectRatio?: string; // you can write your image's width and height
  animation?: RichAnimation;
}

// TODO
export interface RichVideoModel {
  path: string;
  align?: "start" | "center" | "end"; // works only if small
  aspectRatio?: string;
  animation?: RichAnimation;
}

// TODO
export interface MediaBarModel {
  leftImage?: RichImageModel;
  leftVideo?: RichVideoModel;
  text?: RichTextModel[];
  rightImage?: RichImageModel;
  rightVideo?: RichVideoModel;
}

export interface RichAnimation {
  animateOnScroll?: boolean;
  translateDistance?: number; // e.g: 25vh and 25vw
  duration?: number; // in milliseconds  // TODO
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
