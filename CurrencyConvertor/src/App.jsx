import { useState } from 'react'
import './App.css'

function App() {
  
  const [amount , setamount] = useState(0)
  const [from , setfrom] = useState('usd')
  const []


  
  return (
    
    
    <div className='flex flex-wrap items-center justify-center w-full h-screen bg-no-repeat bg-cover '
    style={ {backgroundImage: 'url(https://images.pexels.com/photos/164636/pexels-photo-164636.jpeg)'}}
    >
         <h1 className='bg-red-500'>THIS IS AN CURRENCY CONVERTOR </h1>
    </div>
    
   
  
  )
}

export default App
