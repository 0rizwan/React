import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const noButton = document.getElementById("noButton");

  // Function to display a message when "Yes" is clicked
  function sayYes() {
    document.getElementById("response").innerText = "Yay! Can't wait to go on a date with you! ❤️";
  }

  // Function to move the "No" button to a random position
  function moveButton() {
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
  }

  return (
    <div class="container">
      <h1>Hey how are you?</h1>
      <div class="buttons">
        <button id="yesButton" onclick="sayYes()">Yes</button>
        <button id="noButton" onmouseover="moveButton()">No</button>
      </div>
      <p id="response"></p>
    </div>
  )
}

export default App
