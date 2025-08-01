import { useState } from 'react'

import './App.css'

function App() {
  const [color,setcolor] = useState('olive') 

 

  return (
    <div className='w-full h-screen duration-200 bg-blue '
    style={{backgroundColor:color}}
    >
          <div className='fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12'>
          </div>
          <div className='flex flex-wrap justify-center gap-3 px-3 py-2 shadow-lg rounded-3xl'>
          <button 
          onClick={() => setcolor('Red')}
          className='px-4 py-1 text-black bg-white rounded shadow-lg outline-none-full'>Red</button>
           <button
            onClick={() => setcolor('Green')}
          className='px-4 py-1 text-black bg-white rounded shadow-lg outline-none-full'>Green</button>
           <button 
          onClick={() => setcolor('Olive')}
          className='px-4 py-1 text-black bg-white rounded shadow-lg outline-none-full'>Default(Olive)</button>
          </div>
          
          
          
    </div>
  )
}

export default App
