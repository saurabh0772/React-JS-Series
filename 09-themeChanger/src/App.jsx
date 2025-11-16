import { useDebugValue, useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className='w-full h-screen border border-green '>
        <div className='w-10 h-20 border border-yellow-500 dark:bg-red-500'></div>
        <div className='w-80 h-fit mx-auto mt-30'>
          <ThemeBtn />
          <Card/>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
