import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import hi from './assets/hi.gif'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-[#2e2e2e] w-full h-screen flex'>
      <div className='flex flex-col w-[22%] h-full bg-[#2e2e2e] justify-center p-6 gap-6'>
        <div className='h-[8%] bg-black rounded-[15rem] w-[90%]'></div>
        <div className='h-[88%] bg-black rounded-[2rem] w-[90%] flex justify-center p-2'>
          <div className='h-[8%] bg-white rounded-[2rem] w-[96%]'></div>
        </div>
      </div>
      <div  className='h-full bg-[#2e2e2e] w-[88%] p-14 '><div className='h-full bg-white rounded-3xl w-[88%] '>

      </div></div>
      
      

    </div>
      
    </>
  )
}

export default App
