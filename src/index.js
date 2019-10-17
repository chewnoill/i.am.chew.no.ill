import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, useAnimation } from "framer-motion";

import "./styles.css";
const [primaryDuration, secondaryDuration] = [0.2, 0.7];

const Move = ({ y, x, ...props }) => {
  return (
    <div className="letter">
      <motion.div
        className="abs"
        {...props}
        variants={{
          up: { y, transition: { delay: 2, duration: primaryDuration } },
          over: { x, transition: { duration: secondaryDuration } },
          down: { y: 0, transition: { duration: primaryDuration } },
          bup: { y: -y, transition: { delay: 2, duration: primaryDuration } },
          bover: { x: 0, transition: { duration: secondaryDuration } },
          bdown: { y: 0, transition: { duration: primaryDuration } }
        }}
      />
    </div>
  );
};

function App() {
  const [state, setState] = React.useState(true);
  const animation = useAnimation();

  useEffect(() => {
    const run = async () => {
      await animation.start("up");
      await animation.start("over");
      await animation.start("down");

      await animation.start("bup");
      await animation.start("bover");
      await animation.start("bdown");
      setState(!state);
    };
    run();
  }, [state]);

  return (
    <motion.div animate={animation} duration={0.01}>
      <div className="grid">
        <Move x={40} y={15}>
          i
        </Move>
        <div />
        <Move x={30} y={-15}>
          a
        </Move>
        <Move x={30} y={-15}>
          m
        </Move>
        <div />
        <Move x={30} y={-15}>
          c
        </Move>
        <Move x={40} y={15}>
          h
        </Move>
        <Move x={40} y={15}>
          e
        </Move>
        <Move x={-80} y={0}>
          w
        </Move>
        <div />
        <Move x={20} y={15}>
          n
        </Move>
        <Move x={-20} y={-15}>
          o
        </Move>
        <div />
        <Move x={-120} y={0}>
          i
        </Move>
        <Move x={-120} y={0}>
          l
        </Move>
        <Move x={-120} y={0}>
          l
        </Move>
      </div>
    </motion.div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
