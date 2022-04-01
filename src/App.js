import React, { useState } from "react";
import { flushSync } from "react-dom";
import styled from "styled-components";

const App = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const change = (value) => {
    flushSync(() => {
      setCount(c => c + 1);
    });
    // React has updated the DOM by now
    flushSync(() => {
      setFlag(f => !f);
    });
    // React has updated the 
  };

  console.log('render');
  return (
    <Component>
      {count}
      {flag ? "참" : "거짓"}
      <button onClick={change}>클릭</button>
    </Component>
  );
};

const Component = styled.div``;

export default App;
