import React from "react";
import "./App.css";
import dict from "./dict";

function App() {

  const [word, setWord] = React.useState("");
  const handleSubmit = () => {}
  return (
    <div className="App" data-testid={dict.testid.app}>
      <form onSubmit={handleSubmit}>
        <input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter word"
        />
        <button type="submit">Calculate Score</button>
      </form>
    </div>
  );
}

export default App;
