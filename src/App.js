import React from "react";
import "./App.css";
import dict from "./dict";

import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const URL = process.env.REACT_APP_API_URL;

/** {word: score} */
const wordsAtom = atomWithStorage();

function App() {
  const [word, setWord] = React.useState("");
  const [scores, setScores] = useAtom(wordsAtom);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ word }),
    });

    const currentScore = await response.json();
    setScores((prevScores) =>
      prevScores ? [...prevScores, currentScore] : [currentScore],
    );
  };

  const handleReset = () => {
    setScores([]);
  };

  console.log(scores);

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

      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores &&
            scores.map((score, index) => (
              <tr key={index}>
                <td>{score.word}</td>
                <td>{score.score}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <button className="btn-danger" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
