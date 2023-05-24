import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { FaucetPosition } from "./Faucet";
import { PositionMarker } from "./FaucetPositionMarker";

interface FaucetContextProps {
  faucetPosition: FaucetPosition;
  setFaucetPosition: Dispatch<SetStateAction<FaucetPosition>>;
  positionMarkerList: PositionMarker[];
  setPositionMarkerList: Dispatch<SetStateAction<PositionMarker[]>>;
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

  const [positionMarkerList, setPositionMarkerList] = useState<PositionMarker[]>([]);

  return (
    <ContextFaucet.Provider
      value={{
        faucetPosition,
        setFaucetPosition,
        positionMarkerList,
        setPositionMarkerList,
      }}
    >
      {p.children}
    </ContextFaucet.Provider>
  );
};

export default FaucetProvider;
