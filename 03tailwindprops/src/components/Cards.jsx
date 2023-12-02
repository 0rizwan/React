import React from 'react'

const Cards = ({name="default", designation="Unemployed" }) => {
  return (
    <>
      <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-2">
                <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photo"/>
            </div>
            <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">{name}</p>
                <p className="text-base text-gray-400 font-normal">{designation}</p>
            </div>
        </div>
    </>
  )
}

export default Cards
