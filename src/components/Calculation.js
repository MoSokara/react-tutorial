import { useRef, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  addition,
  subtraction,
  multiplication,
  division,
} from "../features/calc/calcSlice";

function Calculation() {
  const firstNumberRef = useRef(null);
  const secondNumberRef = useRef(null);

  // Redux state and dispatch
  const result = useSelector((state) => state.calc.value);
  const dispatch = useDispatch();

  // Local state for result (not used since we are using Redux)
  // const [result, setResult] = useState(null);

  // Handlers
  const handleAddition = () => {
    const sum = dispatch(
      addition({
        firstNumber: parseFloat(firstNumberRef.current.value),
        secondNumber: parseFloat(secondNumberRef.current.value),
      })
    );
  };
  const handleSubtraction = () => {
    const difference = dispatch(
      subtraction({
        firstNumber: parseFloat(firstNumberRef.current.value),
        secondNumber: parseFloat(secondNumberRef.current.value),
      })
    );
  };
  const handleMultiplication = () => {
    const product = dispatch(
      multiplication({
        firstNumber: parseFloat(firstNumberRef.current.value),
        secondNumber: parseFloat(secondNumberRef.current.value),
      })
    );
  };
  const handleDivision = () => {
    const quotient = dispatch(
      division({
        firstNumber: parseFloat(firstNumberRef.current.value),
        secondNumber: parseFloat(secondNumberRef.current.value),
      })
    );
  };

  return (
    <div className="calculation-component">
      <h1>Calculation Component</h1>
      <div className="input-container">
        <input
          ref={firstNumberRef}
          type="number"
          placeholder="Enter a first number"
        />
        <input
          ref={secondNumberRef}
          type="number"
          placeholder="Enter a second number"
        />
      </div>
      <div className="actions-container">
        <button onClick={handleAddition}> (+) Addition</button>
        <button onClick={handleSubtraction}> (-) Subtraction</button>
        <button onClick={handleMultiplication}> (*) Multiplication</button>
        <button onClick={handleDivision}> (/) Division</button>
      </div>
      <div className="result-container">
        <p>
          Result: <span id="result">{result}</span>
        </p>
      </div>
    </div>
  );
}

export default Calculation;