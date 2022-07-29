import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import { getActiveTab } from "../tools";
import { getGeneralData } from "../../data/local/_dataGeneral";
import { colorBackground } from "../../data/colors";
import { GeneralDataModel } from "../../data/models/_GeneralData";

const LSK_App = "_App";

interface _AppInterface {
  generalData: GeneralDataModel;
  newTabSelected: string;
  setNewTabSelected: Dispatch<SetStateAction<string>>;
  shouldMoveToMain: boolean;
  setMoveToMain: Dispatch<SetStateAction<boolean>>;
  fadeOutContent: boolean;
  setFadeOutContent: Dispatch<SetStateAction<boolean>>;
  flashContent: boolean;
  setFlashContent: Dispatch<SetStateAction<boolean>>;
  tabChangeRequested: number;
  setTabChangeRequested: Dispatch<SetStateAction<number>>;
  //
  portfolioBgColor: string;
  setPortfolioBgColor: Dispatch<SetStateAction<string>>;
  portfolioHeaderItemColor: string;
  setPortfolioHeaderItemColor: Dispatch<SetStateAction<string>>;
}

export const _AppContext = createContext({
  generalData: {} as GeneralDataModel,
  newTabSelected: "/inContext",
  setNewTabSelected: () => {},
  shouldMoveToMain: false,
  setMoveToMain: () => {},
  fadeOutContent: false,
  setFadeOutContent: () => {},
  flashContent: false,
  setFlashContent: () => {},
  tabChangeRequested: 0,
  setTabChangeRequested: () => {},
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
  const [tabChangeRequested, setTabChangeRequested] = useState(0);
  const [portfolioBgColor, setPortfolioBgColor] = useState("");
  const [portfolioHeaderItemColor, setPortfolioHeaderItemColor] = useState("");

  useEffect(() => {
    if (getActiveTab(router) !== "portfolio" && portfolioBgColor != "") {
      setPortfolioBgColor("");
      setPortfolioHeaderItemColor("");
    }
  }, [router.route]);

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
        tabChangeRequested,
        setTabChangeRequested,
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
