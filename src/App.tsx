import { useState } from "react";
import { add } from "./utils/calculator";
import MainView from "./components/MainView";
import Button from "./components/Button";
import Label from "./components/Label";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | number>("");

  const calculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error: any) {
      setResult(error.message);
    }
  };

  return (
    <MainView>
      <h1 style={{ textAlign: "center", color: "#007BFF" }}>{`<String> Calculator`}</h1>
      <input
        type="text"
        placeholder="Enter numbers"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "10px",
          fontSize: "16px",
          border: "1px solid #ced4da",
          borderRadius: "4px",
          boxSizing: "border-box",
        }}
      />
      <Button onClick={calculate} label="Calculate" />
      <Label text={result.toString()} />
    </MainView>
  );
}

export default App;
