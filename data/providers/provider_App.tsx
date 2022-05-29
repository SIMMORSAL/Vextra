import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const LSK_App = "_App";

interface _AppInterface {
  moveToMain: boolean;
  setMoveToMain: Dispatch<SetStateAction<boolean>>;
}

export const _AppContext = createContext({
  moveToMain: false,
  setMoveToMain: () => {},
} as _AppInterface);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function _AppProvider(props: Props) {
  const [moveToMain, setMoveToMain] = useState(false);
  useEffect(() => {}, []);
  return (
    <_AppContext.Provider value={{ moveToMain, setMoveToMain }}>
      {props.children}
    </_AppContext.Provider>
  );
}
