import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface FaucetContextProps {
  zoom: number;
  setZoom: Dispatch<SetStateAction<number>>;
}

export const ContextFaucet = createContext({} as FaucetContextProps);

interface Props {
  children: ReactNode;
}

const FaucetProvider = (p: Props) => {
  const [zoom, setZoom] = useState(1);

  return (
    <ContextFaucet.Provider value={{ zoom, setZoom }}>
      {p.children}
    </ContextFaucet.Provider>
  );
};

export default FaucetProvider;
