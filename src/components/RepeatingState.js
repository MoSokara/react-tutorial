import { useState } from "react";

export default function RepeatingState() {
  const [panding, setPanding] = useState(0);
  const [completed, setCompleted] = useState(0);

  function handleBuyButton() {
    setPanding(panding + 1);
    console.log("Waiting...");
    setTimeout(() => {
      setCompleted((c) => c + 1);
      setPanding((p) => p - 1);
      console.log("Completed!");
    }, 3000);
  }

  return (
    <div className="container">
      <h3>Pending: {panding}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleBuyButton}>Buy</button>
    </div>
  );
}
