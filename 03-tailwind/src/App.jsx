import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  const courseData = [
    {name: "mern stack", views: "200"},
    {name: "mean stack", views: "400"},
    {name: "Java full stack", views: "1000"}
]

  return (
    <>
      <h1 className='bg-blue-400 text-white rounded-xl p-4'>Hello</h1>
      
      {
        courseData.map((course) => (
          <Card name={course.name} views={course.views} />
        ))
      }
    </>
  )
}

export default App
