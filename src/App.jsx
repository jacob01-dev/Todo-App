import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoContainer from './components/TodoContainer'

function App() {
  
  return (
    <div className='bg-gray-950 h-screen min-w-max p-4 flex items-center justify-center'>
        <TodoContainer/>
    </div>
  )
}

export default App
