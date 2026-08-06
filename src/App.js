import { useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(0);

  function handleInput(e) {
    const value = e.target.value.replace(/\D/g, "");
    setNumber(value);
  }

  function handleSubmit() {
    if (number === "") {
      setResult(0);
      return;
    }

    const ogNumber = Number(number);
    const revNumber = Number(number.split("").reverse().join(""));
    const diff = Math.abs(ogNumber - revNumber);

    setResult(diff);
  }

  return (
    <div className="App">
      <div>
        Number: <input value={number} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
