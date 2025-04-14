import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false); // to display to user

  // user ko acha effect dene ke liye use kr rhe
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {  // length is a state.
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }

    setPassword(pass);
    setIsCopied(false); // Reset copy status when password changes

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    // The ?. ensures that it only runs if passwordRef.current is not null // This selects the text inside the input field
    passwordRef.current?.select(); // user ko acha effect dega
    // passwordRef.current?.setSelectionRange(0, 3); // copy toh sab ho rha but user ko show 3 ho rha.
    window.navigator.clipboard.writeText(password);

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);

  }, [password]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>

        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password' // short hint displayed in input field before user enters a value.
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>

        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input
              type="range"  // range slider
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />

            <label>Length: {length}</label>

          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev); // true or false flip hota rahega
              }}
            />

            <label htmlFor="numberInput">Numbers</label>

          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed} // initial checked state of checkbox based on the value of {charAllowed}.
              id="characterInput"
              onChange={() => {
                // setCharAllowed(true) // this is wrong isse hamesha ke liye true ho jayega
                setCharAllowed((prev) => !prev);
              }}
            />

            <label htmlFor="characterInput">Characters</label>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
