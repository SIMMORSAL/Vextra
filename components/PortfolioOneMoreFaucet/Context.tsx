import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import {
  FaucetKeyframes,
  FaucetPosition,
  getFaucetKeyframes,
} from "./DataFaucetKeyframes";
// import { PositionMarker } from "./FaucetPositionMarker";

interface FaucetContextProps {
  faucetPosition: FaucetPosition;
  setFaucetPosition: Dispatch<SetStateAction<FaucetPosition>>;
  faucetKeyFrames: FaucetKeyframes[];
  setFaucetKeyFrames: Dispatch<SetStateAction<FaucetKeyframes[]>>;
}

export const ContextFaucet = createContext({} as FaucetContextProps);

interface Props {
  children: ReactNode;
}

const FaucetProvider = (p: Props) => {
  const [faucetPosition, setFaucetPosition] = useState<FaucetPosition>(
    getFaucetKeyframes().length !== 0
      ? getFaucetKeyframes()[0].faucetPosition
      : {
          zoom: 0.7,
          translateX: 0,
          translateY: 0,
        }
  );

  const [faucetKeyFrames, setFaucetKeyFrames] = useState<FaucetKeyframes[]>([]);

  return (
    <ContextFaucet.Provider
      value={{
        faucetPosition,
        setFaucetPosition,
        faucetKeyFrames,
        setFaucetKeyFrames,
      }}
    >
      {p.children}
    </ContextFaucet.Provider>
  );
};

export default FaucetProvider;
