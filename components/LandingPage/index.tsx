import { css } from "@emotion/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { colorBackground, colorSplash } from "../../data/colors";
import CenterStuff from "./CenterStuff";
import BottomContacts from "./BottomContacts";
import LandingHeader from "./LandingHeader";
import LandingLogo from "./LandingLogo";
import { useRouter } from "next/router";
import { _AppContext } from "../../helpers/providers/provider_App";
import { cacheImage } from "../../helpers/tools";

interface Props {}

export default function LandingPage({}: Props) {
  const router = useRouter();

  const { generalData, setMoveToMain, setNewTabSelected } = useContext(_AppContext);
  const [loading, setLoading] = useState(true);
  const [isXs, setIsXs] = useState(false);
  const [beginAnimationPhase2, setBeginAnimationPhase2] = useState(false);
  const [beginAnimationPhase3, setBeginAnimationPhase3] = useState(false);
  const [selectedPage, setSelectedPage] = useState(undefined);

  const [count, setCount] = useState(0);

  const timeouts = useRef([]);

  useEffect(() => {
    setMoveToMain(false);

    setIsXs(window.innerWidth < 600);
    window.addEventListener("resize", () => setIsXs(window.innerWidth < 600));

    // Animations
    setLoading(true);
    setBeginAnimationPhase2(false);

    cacheImage(generalData.logoBig).then((value) => {
      timeouts.current.push(
        setTimeout(() => {
          setLoading(false);
          timeouts.current.push(
            setTimeout((args) => {
              setBeginAnimationPhase2(true);
            }, 1000)
          );
        }, 700)
      );
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeouts.current.forEach((value) => clearTimeout(value));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedPage !== undefined) {
      setNewTabSelected(selectedPage);
      timeouts.current.push(
        setTimeout(() => {
          if (selectedPage !== undefined) {
            // noinspection JSIgnoredPromiseFromCall
            router.push(`/${selectedPage}/`);
          }
        }, 200)
      );
    }
  }, [router, selectedPage, setNewTabSelected]);

  useEffect(() => {}, [count]);

  return (
    <div
      // onClick={() => setCount(count + 1)}
      css={css`
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        /* background-color: red; */
        background-color: ${loading ? colorSplash : colorBackground};

        transition: background-color 500ms ease;
      `}
    >
      <LandingHeader selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <CenterStuff
        begin={beginAnimationPhase2}
        beginNextPhase={setBeginAnimationPhase3}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <LandingLogo
        path={generalData.logoBig}
        loading={loading}
        onClick={() => setSelectedPage(undefined)}
        selectedPage={selectedPage}
      />
      <div
        css={css`
          grid-row: 1;
          grid-column: 1;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: end;
          justify-content: center;
          opacity: ${selectedPage === undefined ? 1 : 0};
          // transform: ${selectedPage === undefined ? "none" : "translateY(10vh)"};

          transition: opacity 200ms ease, transform 200ms ease;
        `}
      >
        <BottomContacts begin={beginAnimationPhase3} />
      </div>
    </div>
  );
}
