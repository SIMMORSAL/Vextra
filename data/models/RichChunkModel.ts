export interface RichChunkModel {
  nameId: string;
  backgroundColor?: string;
  textColor?: string;
  longTexts?: RichTextModel[];
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

/**
 * Rich Animation object
 *
 * ${animateOnScroll}
 * For RichText: animateFrom won't work without animateOnScroll
 *
 * For
 *
 *
 *sadfsdf
 *
 * @param
 *
 * @param {string} animateFrom The power, must be a natural number.
 */
export interface RichAnimation {
  animateOnScroll?: boolean;
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
