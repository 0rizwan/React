import React from 'react'
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = (e) => {

    authService.logout()
      .then(() => {
        dispatch(logout())
      })
      .catch((err) => console.log(err, "Error while logout"))
  }
  return (
    <button onClick={logoutHandler} 
    className='inline-block px-6 duration-200 hover:bg-blue-100 rounded-full '
    >Logout</button>
  )
}

export default LogoutBtn
