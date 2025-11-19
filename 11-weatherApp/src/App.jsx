import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [state, setState] = useState("New Delhi");
  const [temp, setTemp] = useState(null);
  

  const showWeather = () => {
    fetch(`https://api.weatherstack.com/current?access_key=de53f9215091d2df5fbebb2b5956384f&query=${state}`)
      .then(res => res.json())
      .then(res => {
        console.log(res.current.temperature); 
        setTemp(res.current.temperature);
        return res;
      })
      // setState('')
  }

 


  return (
    <>
      <div>
        <h1>Weather App</h1>
        <input type="text" value={state} placeholder='Enter State' onChange={(e) => { setState(e.target.value); setTemp(null) }} />
        <button onClick={showWeather}>Check Temperature</button>
        
        {temp && (
          <h3>{state} Temperature : {temp}</h3>
        )}
      </div>
    </>
  )
}

export default App
