import React from 'react'

const Button = ({
    children,
    type = "button",
    className = '',
    ...props
}) => {
  return (
    <button
    className={`py-2 px-4 bg-gray-500 text-white ${className}`}
    {...props}
    >
      {children}
    </button>
  )
}

export default Button
