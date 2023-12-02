
import './App.css'
import Cards from './components/Cards'

function App() {


  return (
    <>
      <h2 className='bg-gray-800 text-xl text-white p-5 rounded-xl'>Tailwind CSS</h2>
      <div className='flex'>
        <Cards name="John Brady" designation="Developer" />
        <Cards />
        <Cards />
      </div>
    </> 
  )
}

export default App
