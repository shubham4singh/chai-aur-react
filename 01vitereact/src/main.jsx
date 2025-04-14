import { React } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// as "App" is a function, we can also create a custom function of our own.
function MyApp() {
  return (
    <div>
      <h1>Custom App!!</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit google</a>
)

// this has a special syntax
/*
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google'
);
*/


createRoot(document.getElementById('root')).render(
  //<StrictMode> // will read later.....

  // <MyApp /> // my custom function...
  <App />

  // react is javascript and MyApp is a function
  // so it can also be executed like this
  // MyApp()

  // yeh library kuch input leti hai jo fixed hai..
  // anotherElement

  // we create a react element
  // reactElement  // yeh chalna chaiye but chal ni rha....baad mai dekhna isko aab

  //</StrictMode>,
);
