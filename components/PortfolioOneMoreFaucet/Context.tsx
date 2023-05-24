import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { FaucetPosition } from "./Faucet";
import { FaucetKeyframes } from "./DataFaucetKeyframes";
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
  const [faucetPosition, setFaucetPosition] = useState<FaucetPosition>({
    zoom: 1,
    translateX: 0,
    translateY: 0,
  });

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
