export interface RichChunkModel {
  nameId: string;
  textColor?: string;
  backgroundColor?: string;
  gradient?: string[];
  gradientDegree?: number;
  backgroundImage?: string;
  freeSpaceTop?: string; // e.g: "200px", or "20vh"
  minHeight?: string; // e.g: "500px", or "80vh"
  textsTop?: RichTextModel[];
  bigImage?: RichImageModel;
  smallImage?: RichImageModel;
  bigVideo?: RichVideoModel;
  smallVideo?: RichVideoModel;
  freeSpaceMiddle?: string;
  mediaBar?: MediaBarModel;
  textsBottom?: RichTextModel[];
  freeSpaceBottom?: string;
}

export interface RichTextModel {
  text: string;
  align?: "start" | "center" | "end";
  userSelect?: string; // eg: "none" or "texts" - def: "none"
  color?: string;
  size?: string; // eg: "2.1em" or "25px"
  fontFamily?: string;
  shadow?: string;
  animation?: RichAnimation;
}

export interface RichImageModel {
  path: string;
  subText?: string;
  align?: "start" | "center" | "end"; // works only in smallImage
  aspectRatio?: string; // eg: 800/600 you can write your image's width and height
  animation?: RichAnimation;
}

export interface RichVideoModel {
  path: string;
  align?: "start" | "center" | "end"; // works only in smallVideo
  aspectRatio?: string; // you can write your video's width and height
  autoPlay?: boolean; // will mute the sound if true
  loop?: boolean;
  controls?: boolean;
  animation?: RichAnimation;
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

export interface MediaBarModel {
  leftImage?: RichImageModel;
  leftVideo?: RichVideoModel;
  texts?: RichTextModel[];
  rightImage?: RichImageModel;
  rightVideo?: RichVideoModel;
}
