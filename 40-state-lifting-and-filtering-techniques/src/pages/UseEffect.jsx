/* eslint-disable no-undef */

import { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    $("#btn").on("click", function () {
      alert("hello, i'm jquery still alive");
    });
  });

  return (
    <div>
      <h1 id="test">Hello World</h1>
      <button id="btn">Click Me</button>
      <div id="container"></div>
    </div>
  );
};

export default UseEffect;
