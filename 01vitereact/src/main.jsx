import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>this is MyApp</div>
  )
}

// This is our custom code but react has its own predefined code
// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Visit to google'
// }

const anotherUsername = "John"
// here we use react's method for creating a element which takes 3 parameters 1)Tagname 2)Attributes 3)Children or Text 4)Variables 
const reactElement = React.createElement(
  'a',
  {href: 'https://youtube.com', target: '_blank'},
  'Click to visit youtube',
  anotherUsername
)

const anotherElement = (
  <a href='https://google.com' target='_blank'>Click here</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement

)
