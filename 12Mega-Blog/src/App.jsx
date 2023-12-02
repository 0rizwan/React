import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=> {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .catch((err)=> console.log(err, " error while taking userData from authService"))
    .finally(()=> setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen text-3xl flex flex-wrap bg-gray-700 content-between text-white p-4 mx-auto text-center'>
      <div className='w-full block '>
        <Header />
        <main>
          ToDo: <Outlet />
        </main>
        <Footer />  
      </div>
    </div>
  ) : (
    <h1 className='text-3xl text-center s'>Wait, Its Loading...</h1>
  )
}

export default App
