
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import './index.css'
import { ThemeProvider } from './context/theme'
import { useEffect, useState } from 'react'

function App() {

  const [themeMode , setthemeMode] = useState('light')

   const darkTheme = () => {
    setthemeMode('dark')
   }

   const lightTheme = () => {
    setthemeMode('light')
   }

   useEffect(() => {
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode)
   }, [themeMode])
  
  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
     <div className='flex flex-wrap items-center min-h-screen'> 
           <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
            <ThemeBtn />
           </div>
           
           <div className='w-full mx-auto max-w-s'>
             <Card />
           </div>
           
     </div>
    </ThemeProvider>
  )
}

export default App
