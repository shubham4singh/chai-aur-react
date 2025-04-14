import Chai from "./chai"
function App() {
  const username="chai aur code";

  return (
    //<h1>Chai aur React with vite</h1>
    // jsx mai we can return only one element.
    // to return more elements we can use <> fragment
  
    <>
    <Chai/>
    
    // {} is called evaluated expression
    <h1>Chai aur react {username}</h1>
    <p>test para</p>
    </>
    
    
    // <Chai/>
  )
}

export default App
