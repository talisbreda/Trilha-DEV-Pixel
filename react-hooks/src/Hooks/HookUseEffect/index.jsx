// import { Component } from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const eventFn = () => {
    console.log("h1 clicado");
  };

  // component did update - executa sempre que atualiza
  // useEffect(() => {
  //   console.log("component did update");
  // });

  // component did mount - executa uma vez
  // array passado como parametro
  // sem dependencia
  useEffect(() => {
    document.querySelector("h1")?.addEventListener("click", eventFn);

    // component will unmount
    return () => {
      document.querySelector("h1")?.removeEventListener("click", eventFn);
    };
  }, []);

  // com dependencia
  // se a dependencia muda, a funcao é chamada
  useEffect(() => {
    console.log("increase counter: ", counter1);
  }, [counter1]);

  return (
    <div className='App'>
      <h1>Contador 1: {counter1}</h1>
      <h1>Contador 2: {counter2}</h1>
      <button onClick={() => setCounter1(counter1 + 1)}>+(1)</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+(2)</button>
    </div>
  );
}

export default App;
