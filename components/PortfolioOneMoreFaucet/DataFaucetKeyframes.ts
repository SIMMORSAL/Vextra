import { MutableRefObject } from "react";
import { FaucetPosition } from "./Faucet";

export interface FaucetKeyframes {
  refMarker?: MutableRefObject<any>;
  faucetPosition: FaucetPosition;
}

export const getFaucetKeyframes = (): FaucetKeyframes[] => {
  return [
    {
      faucetPosition: {
        zoom: 0.9,
        translateX: -0.5,
        translateY: 0,
      },
    },
    {
      faucetPosition: {
        zoom: 1.8,
        translateX: 0,
        translateY: -1,
      },
    },
    {
      faucetPosition: {
        zoom: 1.2,
        translateX: 0,
        translateY: -1,
      },
    },
  ];
};
