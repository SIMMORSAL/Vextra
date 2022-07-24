import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import { getActiveTab } from "../tools/tools";
import { _GeneralDataModel, getGeneralData } from "../../data/local/_dataGeneral";

const LSK_App = "_App";

interface _AppInterface {
  generalData: _GeneralDataModel;
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
  //
  portfolioBgColor: string;
  setPortfolioBgColor: Dispatch<SetStateAction<string>>;
  portfolioHeaderItemColor: string;
  setPortfolioHeaderItemColor: Dispatch<SetStateAction<string>>;
}

export const _AppContext = createContext({
  generalData: {} as _GeneralDataModel,
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
  portfolioBgColor: "",
  setPortfolioBgColor: () => {},
  portfolioHeaderItemColor: "",
  setPortfolioHeaderItemColor: () => {},
} as _AppInterface);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function _AppProvider(props: Props) {
  const router = useRouter();
  const generalData = getGeneralData();

  const [newTabSelected, setNewTabSelected] = useState(getActiveTab(router));
  const [moveToMain, setMoveToMain] = useState(false);
  const [fadeOutContent, setFadeOutContent] = useState(false);
  const [flashContent, setFlashContent] = useState(false);
  const [pageChangeRequested, setPageChangeRequested] = useState(0);
  const [portfolioBgColor, setPortfolioBgColor] = useState("");
  const [portfolioHeaderItemColor, setPortfolioHeaderItemColor] = useState("");
  useEffect(() => {}, []);
  return (
    <_AppContext.Provider
      value={{
        generalData,
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
        portfolioBgColor,
        setPortfolioBgColor,
        portfolioHeaderItemColor,
        setPortfolioHeaderItemColor,
      }}
    >
      {props.children}
    </_AppContext.Provider>
  );
}
