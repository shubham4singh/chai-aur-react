import { useState } from 'react'
import './App.css'

function App() {

  // let counter=15;  // yeh variable toh hai but UI mai reflect nhi hoga

  // this is working like variable counter but will also reflect in UI
  let [counter, setCounter] = useState(15);


  const addValue = () => {
    // 
    // counter=counter+1;
    if (counter < 5) {
      setCounter(counter = counter + 1); // isko batayo ki aab new value kya krni hai
      console.log("clicked", counter);
    }
  }

  const remValue = () => {
    if (counter > 0) {
      setCounter(counter = counter - 1);
      console.log("clicked", counter);
    }
  }

  return (
    <>

      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={remValue}>Remove value {counter}</button>

      <p>footer: {counter}</p>

    </>
  )
}

export default App
