import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import { getActiveTab } from "../tools/tools";

const LSK_App = "_App";

interface _AppInterface {
  newTabSelected: string;
  setNewTabSelected: Dispatch<SetStateAction<string>>;
  shouldMoveToMain: boolean;
  setMoveToMain: Dispatch<SetStateAction<boolean>>;
  fadeOutContent: boolean;
  setFadeOutContent: Dispatch<SetStateAction<boolean>>;
  flashContent: boolean;
  setFlashContent: Dispatch<SetStateAction<boolean>>;
  pageChangeRequested: number;
  setPageChangeRequested: Dispatch<SetStateAction<number>>;
}

export const _AppContext = createContext({
  newTabSelected: "/inContext",
  setNewTabSelected: () => {},
  shouldMoveToMain: false,
  setMoveToMain: () => {},
  fadeOutContent: false,
  setFadeOutContent: () => {},
  flashContent: false,
  setFlashContent: () => {},
  pageChangeRequested: 0,
  setPageChangeRequested: () => {},
} as _AppInterface);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function _AppProvider(props: Props) {
  const router = useRouter();
  const [newTabSelected, setNewTabSelected] = useState(getActiveTab(router));
  const [moveToMain, setMoveToMain] = useState(false);
  const [fadeOutContent, setFadeOutContent] = useState(false);
  const [flashContent, setFlashContent] = useState(false);
  const [pageChangeRequested, setPageChangeRequested] = useState(0);
  useEffect(() => {}, []);
  return (
    <_AppContext.Provider
      value={{
        newTabSelected,
        setNewTabSelected,
        shouldMoveToMain: moveToMain,
        setMoveToMain,
        fadeOutContent,
        setFadeOutContent,
        flashContent,
        setFlashContent,
        pageChangeRequested,
        setPageChangeRequested,
      }}
    >
      {props.children}
    </_AppContext.Provider>
  );
}
