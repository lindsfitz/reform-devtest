import { React, useRef, useEffect } from "react";
import { gsap } from "gsap";

function App() {
  // store a reference to the box div
  const boxRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });
  
  // DOM to render
  return <div className="box" ref={boxRef}>Hello</div>;
}

export default App;
