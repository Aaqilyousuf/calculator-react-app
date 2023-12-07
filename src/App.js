import "./App.css";
import { useState, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const add = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };
  const sub = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
  const mul = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };
  const div = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };
  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevRes) => prevRes * 0);
  };
  return (
    <div className="App">
      <div>
        <h1>Simple calculator app</h1>
      </div>
      <div>
        <form>
          <p id="p" ref={resultRef}>
            {result}
          </p>
          <input
            type="number"
            pattern="[0-9]"
            placeholder="Type any number"
            ref={inputRef}
          />
          <button onClick={add}>Addition</button>
          <button onClick={sub}>Subtraction</button>
          <button onClick={mul}>Multiplication</button>
          <button onClick={div}>Division</button>
          <button onClick={resetInput}>Reset input</button>
          <button onClick={resetResult}>Reset result</button>
        </form>
      </div>
    </div>
  );
}

export default App;
