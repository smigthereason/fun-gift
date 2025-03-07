// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

// eslint-disable-next-line react/prop-types
const TypedJS = ({ strings, typeSpeed = 100, loop = false }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: typeSpeed,
      loop: loop,
      showCursor: false,
    });

    return () => typed.destroy();
  }, [strings, typeSpeed, loop]);

  return <span ref={el} />;
};

export default TypedJS;