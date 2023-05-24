import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { FaucetPosition } from "./Faucet";

interface FaucetContextProps {
  faucetPosition: FaucetPosition;
  setFaucetPosition: Dispatch<SetStateAction<FaucetPosition>>;
}

export const ContextFaucet = createContext({} as FaucetContextProps);

interface Props {
  children: ReactNode;
}

const FaucetProvider = (p: Props) => {
  const [faucetPosition, setFaucetPosition] = useState<FaucetPosition>({
    zoom: 1,
    translateX: 1,
    translateY: 1,
  });

  return (
    <ContextFaucet.Provider value={{ faucetPosition, setFaucetPosition }}>
      {p.children}
    </ContextFaucet.Provider>
  );
};

export default FaucetProvider;
