import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    console.log(data)
    // const [data, setData] = useState('')
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/VICTOR69')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
  return (
    <>
    <div className='bg-blue-400 p-4 m-4 text-3xl'>Username: {data.login} </div>
    <div className='bg-blue-400 p-4 m-4 text-3xl'>Github Followers: {data.followers}</div>
    <img src={data.avatar_url} alt="Github Picture" width={200} />

    </>
  )
}

export default Github

export const githubInfo = async () => {
  const response = await fetch('https://api.github.com/users/victor69')
  return response.json()
}