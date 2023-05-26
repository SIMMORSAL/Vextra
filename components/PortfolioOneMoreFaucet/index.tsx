import { css } from "@emotion/react";
import Faucet from "./Faucet";
import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import { ContextFaucet } from "./Context";
import OnScreenController from "./OnScreenController";
import FaucetPositionMarker from "./FaucetPositionMarker";
import { getFaucetKeyframes } from "./DataFaucetKeyframes";
import { headerHeight } from "../Header";

const PortfolioOneMoreFaucet = () => {
  const { setFaucetKeyFrames, setFaucetPosition } = useContext(ContextFaucet);

  const contentRoot = useRef(null);

  const markerRefs = useRef<MutableRefObject<any>[]>([]);
  const keyframes = getFaucetKeyframes();

  const [initialAnimationStep, setInitialAnimationStep] = useState(0); // 99 means done

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

    setInitialAnimationStep(1);
    // setFaucetPosition({
    //   zoom: 1.3,
    //   translateX: 0,
    //   translateY: 0,
    // });

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

    return () => {
      t.map((v) => clearTimeout(v));
    };
  }, []);

  // useEffect(() => {
  //   initialAnimationStep === 1
  // }, [initialAnimationStep]);

  return (
    <div
      css={css`
        width: 100%;
        min-height: 100%;
        display: grid;
        overflow: ${initialAnimationStep === 99 ? "auto" : "hidden"};
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
        <Faucet
          initialAnimationDone={initialAnimationStep === 99}
          // contentSize={contentRoot.current?.offsetHeight}
        />
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
        <div
          css={css`
            height: 200vh;
          `}
        />
        <FaucetPositionMarker
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
      </div>
    </div>
  );
};

export default PortfolioOneMoreFaucet;
