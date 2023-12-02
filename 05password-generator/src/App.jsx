import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdrfghijklmnopqrstuvwxyz"

    if (numberAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str += "<!>,(^)'{*}.@$%"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
      
    }
    setPassword(pass)
    
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPass = ()=>{
    passwordRef.current?.select(); //it shows what we have copied
    passwordRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password); //it also copies but we dont get to know what we copied
  }

  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllowed, charAllowed])

  return (
    <div className='w-full h-screen flex justify-center bg-gray-400'>
      <div  className='bg-slate-700 px-4 my-8 rounded-lg mx-auto'>
        <h1 className='text-xl text-white px-4 py-3 text-center'>Password Generator</h1>
        <div className='flex overflow-hidden mb-4 '>
          <input 
          type="text"
          className='w-full px-3 py-2 outline-none cursor-pointer text-xl' 
          placeholder='Password'
          value={password}
          ref={passwordRef}
          readOnly
          />
          <button 
          className='bg-blue-600 text-white p-2 font-semibold'
          onClick={copyPass}
          >Copy</button>
        </div>
        <div className='flex gap-x-3 items-center px-3 py-4 justify-center'>
          <div className='flex gap-x-2 w-30'>
            <input 
            type="range"
            className=''
            min={6}
            max={16}
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex gap-x-1'>
            <input 
            type="checkbox"
            
            defaultChecked={numberAllowed}
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
