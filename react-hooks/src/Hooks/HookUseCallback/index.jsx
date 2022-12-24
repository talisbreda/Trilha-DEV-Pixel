// import { Component } from "react";
import P from "prop-types";
import React, { useCallback, useMemo, useState } from "react";
import "./App.css";

const Button = ({ incrementCounter }) => {
  return <button onClick={() => incrementCounter(10)}>+</button>;
};

Button.propTypes = {
  incrementCounter: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  const button = useMemo(() => {
    return <Button incrementCounter={incrementCounter} />;
  }, [incrementCounter]);

  return (
    <div className='App'>
      <h1>Contador: {counter}</h1>
      {button}
    </div>
  );
}

export default App;
