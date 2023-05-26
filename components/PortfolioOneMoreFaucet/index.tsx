import { css } from "@emotion/react";
import Faucet from "./Faucet";
import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import { ContextFaucet } from "./Context";
import OnScreenController from "./OnScreenController";
import FaucetPositionMarker from "./FaucetPositionMarker";
import { getFaucetKeyframes } from "./DataFaucetKeyframes";
import { headerHeight } from "../Header";
import FaucetLogo from "./FaucetLogo";

const PortfolioOneMoreFaucet = () => {
  const { setFaucetKeyFrames, setFaucetPosition } = useContext(ContextFaucet);

  const contentRoot = useRef(null);

  const markerRefs = useRef<MutableRefObject<any>[]>([]);
  const keyframes = getFaucetKeyframes();

  const [initialAnimationStep, setInitialAnimationStep] = useState(99); // 99 means done

  useEffect(() => {
    if (markerRefs.current.length !== keyframes.length)
      throw "Keyframe and Marker counts don't match";

    setFaucetKeyFrames(
      markerRefs.current.map((v, i) => {
        return {
          faucetPosition: keyframes[i].faucetPosition,
          refMarker: v,
          refPosition: v.current.offsetTop,
        };
      })
    );

    // * Starting initial animation
    const t: NodeJS.Timeout[] = [];

    if (initialAnimationStep !== 99) {
      setInitialAnimationStep(1);

      t.push(
        setTimeout(() => {
          setInitialAnimationStep(2);
          setFaucetPosition({
            zoom: 0.7,
            translateX: 0,
            translateY: 0.1,
          });
        }, 300)
      );

      t.push(
        setTimeout(() => {
          setInitialAnimationStep(3);
          setFaucetPosition(getFaucetKeyframes()[1].faucetPosition);
        }, 2500)
      );

      t.push(
        setTimeout(() => {
          setInitialAnimationStep(99);
        }, 4500)
      );
    }

    return () => {
      t.map((v) => clearTimeout(v));
    };
  }, []);

  return (
    <div
      css={css`
        width: 100%;
        min-height: 100%;
        display: grid;
        overflow: ${initialAnimationStep === 99 ? "visible" : "hidden"};
        /* overflow: vi; */
      `}
    >
      <div
        css={css`
          grid-row: 1;
          grid-column: 1;
          width: 100%;
          height: 100%;
          display: flex;
          opacity: ${initialAnimationStep < 2 ? 0 : 1};

          transition: opacity ease 1500ms;
        `}
      >
        <Faucet initialAnimationDone={initialAnimationStep === 99} />
        {/* <OnScreenController /> */}
      </div>
      <div
        ref={contentRoot}
        css={css`
          grid-row: 1;
          grid-column: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          max-width: 1000px;
          margin: 0 auto;
        `}
      >
        <FaucetPositionMarker
          // showOnUi
          onRefReady={(ref) => {
            markerRefs.current[0] = ref;
          }}
        />
        <div
          css={css`
            height: calc(50vh - ${headerHeight}px);
          `}
        />
        <FaucetPositionMarker
          // showOnUi
          onRefReady={(ref) => {
            markerRefs.current[1] = ref;
          }}
        />
        <FaucetLogo animateIn={initialAnimationStep >= 3} />
        <div
          css={css`
            height: 100vh;
          `}
        />
        <FaucetPositionMarker
          showOnUi
          onRefReady={(ref) => {
            markerRefs.current[2] = ref;
          }}
        />
        <div
          css={css`
            height: 300vh;
          `}
        />
        <FaucetPositionMarker
          showOnUi
          onRefReady={(ref) => {
            markerRefs.current[3] = ref;
          }}
        />
        <div
          css={css`
            height: 200vh;
          `}
        />
        <FaucetPositionMarker
          onRefReady={(ref) => {
            markerRefs.current[4] = ref;
          }}
        />
        <div
          css={css`
            height: 200vh;
          `}
        />
        <FaucetPositionMarker
          onRefReady={(ref) => {
            markerRefs.current[5] = ref;
          }}
        />
      </div>
    </div>
  );
};

export default PortfolioOneMoreFaucet;
