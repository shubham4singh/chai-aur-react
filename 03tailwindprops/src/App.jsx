import Card from './components/Card'

function App() {
  let myObj={
    username:"hitesh",
    age:21
  }

  let newArr=[1,2,3];

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>

      <Card channel="chaiaurcode" someObje={myObj} />
      <Card someObj={newArr} />
      <Card username="sachinphartiyal" />
        
    </>
  )
}

export default App
