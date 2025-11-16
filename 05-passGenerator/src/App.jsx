import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");


  let passGenerator = useCallback( () => {
    let password = ""
    let str = "ABCDEFGHIPJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*(){}[]"

    for(let i=1; i<=length; i++){
      const ch = Math.floor(Math.random()*str.length)
      password += str.charAt(ch)
    }

    setPass(password)

  }, [length, numAllowed, charAllowed, setPass])

  useEffect(() => { passGenerator(); }, [length, numAllowed, charAllowed, passGenerator])

  const copyText = useRef(null);

  const copyy = () => {
    copyText.current?.select()
    window.navigator.clipboard.writeText(pass).then(alert("password copied to clipboard!"));
  }

  return (
    <div className='min-h-screen bg-blue-200 flex item-start p-8'>
      <div >
          <h1>Password Generator</h1>
          <div>
            <input 
              value={pass}
              ref={copyText}
              // placeholder='{pass}'
              readOnly
              className='bg-white outline-none text-black'
            />
            <button className='bg-blue-500 rounded-md px-1 py-1'
              
              onClick={copyy}
            >COPY</button>
          </div>

          <div>
            <input type="range" 
              min={6}
              max={50}
              value={length}
              onChange={(e) => {setLength(e.target.value); }}
            />
            <label >Length : {length}</label>

            <input type="checkbox"
              onChange={() => {setNumAllowed((prev) => !prev);}}
            />
            <label >Number Allowed</label>
           
            <input type="checkbox"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label >Character Allowed</label>
          </div>
      </div>
    </div>
  )
}

export default App
