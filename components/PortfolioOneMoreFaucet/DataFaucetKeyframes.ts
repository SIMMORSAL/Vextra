import { MutableRefObject } from "react";

export interface FaucetKeyframes {
  refMarker?: MutableRefObject<any>;
  refPosition?: number;
  faucetPosition: FaucetPosition;
}

export interface FaucetPosition {
  zoom: number;
  translateX: number;
  translateY: number;
}

export const getFaucetKeyframes = (): FaucetKeyframes[] => {
  return [
    {
      // initial hidden state
      faucetPosition: {
        zoom: 0.9,
        translateX: 0,
        translateY: 0.1,
      },
    },
    {
      faucetPosition: {
        zoom: 0.7,
        translateX: -0.2,
        translateY: 0.1,
      },
    },
    {
      faucetPosition: {
        zoom: 1.7,
        translateX: 0,
        translateY: 0.2,
      },
    },
    {
      faucetPosition: {
        zoom: 2.3,
        translateX: 0,
        translateY: -0.8,
      },
    },
    {
      faucetPosition: {
        zoom: 0.2,
        translateX: 0.5,
        translateY: 0.1,
      },
    },
  ];
};

export const getFaucetKeyframesPortrait = (): FaucetKeyframes[] => {
  return [
    {
      faucetPosition: {
        zoom: 0.7,
        translateX: 0,
        translateY: 0,
      },
    },
    {
      faucetPosition: {
        zoom: 1.7,
        translateX: 0,
        translateY: 0.2,
      },
    },
    {
      faucetPosition: {
        zoom: 2.3,
        translateX: 0,
        translateY: -0.8,
      },
    },
    {
      faucetPosition: {
        zoom: 0.2,
        translateX: 0.5,
        translateY: 0.1,
      },
    },
  ];
};
