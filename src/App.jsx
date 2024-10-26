import { useState } from 'react'
import Landingpage from './pages/Landingpage'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <div className='w-full max-w-[1600px]'>
      <Navbar/>
    <Landingpage/>

      </div>

    </div>
  )
}

export default App
