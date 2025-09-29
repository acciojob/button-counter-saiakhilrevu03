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
      <p>Button clicked {count} times</p>
      <button onClick={countUpdate}>Click me</button>
    </div>
  );
};

export default App;
