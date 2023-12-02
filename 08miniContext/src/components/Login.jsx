import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const {setUser} = useContext(UserContext);

    const submitHandler = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
      <h2>Login</h2>
      <input 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        type="text" 
        placeholder='username' 
      />
      <input 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        type="password" 
        placeholder='password' 
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Login
