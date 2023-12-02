import { useState } from "react"
import AddTodo from "./components/AddTodo.jsx"
import Todos from "./components/Todos.jsx"

import './App.css'

function App() {

  return (
    <>
      <h1>Hey this is redux tutorial</h1>
      <AddTodo/>
      <Todos />
    </>
  )
}

export default App
