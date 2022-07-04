import { css } from "@emotion/react";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { backgroundBlack, backgroundWhite } from "../../res/colors";
import CenterStuff from "./CenterStuff";
import BottomContacts from "./BottomContacts";
import LandingHeader from "./LandingHeader";
import LandingLogo from "./LandingLogo";
import { useRouter } from "next/router";
import { _AppContext } from "../../helpers/providers/provider_App";

interface Props {}

export default function LandingPage({}: Props) {
  const router = useRouter();

  const { setMoveToMain, setNewTabSelected } = useContext(_AppContext);
  const [loading, setLoading] = useState(true);
  const [isXs, setIsXs] = useState(false);
  const [beginAnimationPhase2, setBeginAnimationPhase2] = useState(false);
  const [beginAnimationPhase3, setBeginAnimationPhase3] = useState(false);
  const [selectedPage, setSelectedPage] = useState(undefined);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setIsXs(window.innerWidth < 600);
    window.addEventListener("resize", () => setIsXs(window.innerWidth < 600));
    setMoveToMain(false);

    // const animated = document.getElementById("icon");
    // console.log("11111  animated:  ", animated);
    // animated.addEventListener("animationend", () => {
    //   console.log("11111  onanimationend:  ");
    //   setBeginAnimationPhase2(true);
    // });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedPage !== undefined) {
      setNewTabSelected(selectedPage);
      setTimeout(() => {
        if (selectedPage !== undefined) router.push(`/${selectedPage}/`);
      }, 200);
    }
  }, [router, selectedPage, setNewTabSelected]);

  useEffect(() => {
    setLoading(true);
    setBeginAnimationPhase2(false);
    setTimeout(() => {
      setLoading(false);
      setTimeout((args) => {
        setBeginAnimationPhase2(true);
      }, 1000);
    }, 700);
  }, [count]);

  return (
    <div
      // onClick={() => setCount(count + 1)}
      css={css`
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        /* background-color: red; */
        background-color: ${loading ? backgroundBlack : backgroundWhite};

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
