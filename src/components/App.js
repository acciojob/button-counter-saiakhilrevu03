import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const countUpdate = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Button clicked {count} times</h1>
      <button onClick={countUpdate}>Click me</button>
    </div>
  );
};

export default App;
