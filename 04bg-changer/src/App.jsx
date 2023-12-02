import { useState } from 'react'

function App() {
  const [color, setColor] = useState('aqua')

  return (

    <div className='w-full h-screen flex justify-center' style={{backgroundColor: color}}>
      <div className='bg-white px-3 py-2 fixed bottom-0 rounded-xl flex flex-wrap gap-3 justify-center mb-6 shadow-xl'>
        <button onClick={()=> setColor("black")} className='flex rounded-xl bg-black text-white px-3 py-2'>Black</button>
        <button onClick={()=> setColor("blue")} className='flex rounded-xl bg-blue-600 text-white px-3 py-2'>Blue</button>
        <button onClick={()=> setColor("green")} className='flex rounded-xl bg-green-600 text-white px-3 py-2'>Green</button>
        <button onClick={()=> setColor("gray")} className='flex rounded-xl bg-gray-600 text-white px-3 py-2'>Gray</button>
      </div>
    </div>
  )
}

export default App
