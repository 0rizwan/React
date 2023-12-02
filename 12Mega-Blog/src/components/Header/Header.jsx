import React from 'react'
import {useSelector} from 'react-redux'
import {useNavigate, Link} from 'react-router-dom';
import {Container, Logo, LogoutBtn} from '../index'

const Header = () => {
  const isAuth = useSelector((state)=> state)
  // console.log(isAuth)
  const navigate = useNavigate()

  const navItems = [
    {
      name: "Home",
      path: "/",
      active: true
    },
    {
      name: "Login",
      path: "/login",
      active: !isAuth
    },
    {
      name: "SignUp",
      path: "/signup",
      active: !isAuth
    },
    {
      name: "All posts",
      path: "/all-posts",
      active: isAuth
    },
    {
      name: "Add posts",
      path: "/add-posts",
      active: isAuth
    }
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={()=> navigate(item.path)}
                className='inline-block duration-200 hover:bg-blue-100 rounded-full py-2 px-6' 
                >{item.name}</button>
              </li>
            ) : null
            )}
            {isAuth && (
              <li><LogoutBtn/></li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
