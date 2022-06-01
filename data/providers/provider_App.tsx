import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const LSK_App = "_App";

interface _AppInterface {
  shouldMoveToMain: boolean;
  setMoveToMain: Dispatch<SetStateAction<boolean>>;
  fadeOutContent: boolean;
  setFadeOutContent: Dispatch<SetStateAction<boolean>>;
  flashContent: boolean;
  setFlashContent: Dispatch<SetStateAction<boolean>>;
}

export const _AppContext = createContext({
  shouldMoveToMain: false,
  setMoveToMain: () => {},
  fadeOutContent: false,
  setFadeOutContent: () => {},
  flashContent: false,
  setFlashContent: () => {},
} as _AppInterface);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function _AppProvider(props: Props) {
  const [moveToMain, setMoveToMain] = useState(false);
  const [fadeOutContent, setFadeOutContent] = useState(false);
  const [flashContent, setFlashContent] = useState(false);
  useEffect(() => {}, []);
  return (
    <_AppContext.Provider
      value={{
        shouldMoveToMain: moveToMain,
        setMoveToMain,
        fadeOutContent,
        setFadeOutContent,
        flashContent,
        setFlashContent,
      }}
    >
      {props.children}
    </_AppContext.Provider>
  );
}
