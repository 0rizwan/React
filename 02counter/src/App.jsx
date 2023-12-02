import { useState } from 'react'
import './App.css'

function App() {
  // WITHOUT USING HOOKS
  // let counter = 0
  // const AddVal = () =>{
  //   const header = document.querySelector('h3')
  //   console.log("clicked", counter)
  //   counter += 1;
  //   header.innerHTML = "Counter: " + counter
  // }
  // const remVal = () =>{
  //   const header = document.querySelector('h3')
  //   console.log("clicked", counter)
  //   counter -= 1;
  //   header.innerHTML = "Counter: " + counter
  // }
  // const reset = () =>{
  //   const header = document.querySelector('h3')
  //   console.log("clicked", counter)
  //   counter = 0;
  //   header.innerHTML = "Counter: " + counter
  // }
  // return (
  //   <>
  //     <h1>Counter Project</h1>
  //     <h3>Counter: 0</h3>
  //     <button onClick={AddVal}>Increase value {counter} </button>
  //     <br />
  //     <button onClick={remVal}>Decrease value {counter} </button> 
  //     <br />
  //     <button onClick={reset}>Reset Value {counter} </button> 
  //   </>
  // )

  // USING HOOKS
  const [counter, setCounter] = useState(0)
  const addVAl = () =>{
    if (counter < 20){
      setCounter(counter + 1);
    }
  }
  const remVal = () =>{
    if (counter > 0)
    setCounter(counter - 1);
  }
  const reset = () =>{
    setCounter(0)
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h3>Counter: {counter} </h3>
      <button onClick={addVAl}>Increase value {counter} </button>
      <br />
      <button onClick={remVal}>Decrease value {counter} </button>
      <br />
      <button onClick={reset}>Reset Value</button>
    </>
  )
}

export default App
