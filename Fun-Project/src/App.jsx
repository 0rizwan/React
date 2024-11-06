import { useState } from 'react'
import './App.css'

function App() {
  const [showResponse, setShowResponse] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [randomX, setRandomX] = useState(0);
  const [randomY, setRandomY] = useState(0);

  // Function to display a message when "Yes" is clicked
  const sayYes = () => {
    setShowResponse(true);
    // setResponseText("I knew you'd say Yes! 💖");
    setResponseText("I knew it nigga! 😧");
  }

  // Function to move the "No" button to a random position
  const moveButton = () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 100));
    setRandomX(x);
    setRandomY(y);
  }

  // Function to reset the state for a new try
  const resetGame = () => {
    setShowResponse(false);
    setResponseText("");
    setRandomX(0);
    setRandomY(0);
  }

  return (
    <div className="container">
      {showResponse ? (
        <>
          <p>{responseText}</p>
          <button onClick={resetGame} id='resetBtn'>Try Again</button>
        </>
      ) : (
        <>
          <h1>Are you gay?</h1>
          <div className="buttons">
            <button onClick={sayYes} id="yesBtn">Yes</button>
            <button
              onMouseEnter={moveButton}
              id="noBtn"
              style={{
                position: randomX === 0 ? "initial" : "absolute",
                left: randomX,
                top: randomY,
              }}
            >
              No
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
