export interface RichChunkModel {
  nameId: string;
  textColor?: string;
  backgroundColor?: string;
  gradient?: string[];
  gradientDegree?: number;
  backgroundImage?: string;
  freeSpaceTop?: string; // e.g: "200px", or "20vh"
  freeSpaceBottom?: string;
  minHeight?: string; // e.g: "500px", or "80vh"
  longTextsTop?: RichTextModel[];
  bigImage?: RichImageModel;
  smallImage?: RichImageModel;
  bigVideo?: RichVideoModel;
  smallVideo?: RichVideoModel;
  mediaBar?: MediaBarModel;
  longTextsBottom?: RichTextModel[];
}

export interface RichTextModel {
  text: string;
  align?: "start" | "center" | "end";
  userSelect?: string; // eg: "none" or "text"
  color?: string;
  size?: string; // eg: "2em" or "25px"
  fontFamily?: string;
  animation?: RichAnimation;
}

export interface RichImageModel {
  path: string;
  subText?: string;
  align?: "start" | "center" | "end"; // works only in smallImage
  aspectRatio?: string; // eg: 800/600 you can write your image's width and height
  animation?: RichAnimation;
}

// TODO
export interface RichVideoModel {
  path: string;
  align?: "start" | "center" | "end"; // works only in smallVideo
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
  duration?: number; // in milliseconds
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
