import React, { useState } from 'react'
import logo from '../../public/logo.png'
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [flag, setFlag] = useState(false)
  function handleToggle() {
    setFlag(!flag)
  }
  return (
    <>
      {/* mobile navbar */}
      <div className='relative lg:hidden w-full  h-[50px] mt-2 flex justify-between items-center'>
        <img src={logo} className='w-[150px] ' alt="" />
        {
          flag ? <RxCross1 className='w-[50px] size-[30px]' onClick={handleToggle} />
        : < IoMenu className='w-[50px] size-[30px]' onClick={handleToggle} />}

        <ul className={flag ? `absolute left-[0%] top-14 h-[100vh] gap-10 bg-white w-full border-green-600 flex flex-col items-center transition-all duration-300  ` : 'absolute -left-[100%] top-14 h-[100vh] gap-10 bg-white w-full border-green-600 flex flex-col items-center transition-all duration-300 '}>
          <li >Home</li>
          <li>Features</li>
          <li>About Us</li>
          <li>Clientele</li>
          <li>Contact Us</li>
        </ul>


      </div>
      {/* mid screen navbar */}
      <div className='hidden lg:flex mt-3 w-full py-2 px-8  items-center justify-between'>

        <img src={logo} className='img ' alt="" />
        <div className='flex items-center gap-5'>
          <ul className='flex  gap-7'>
            <li className=''>Home</li>
            <li>Features</li>
            <li>About Us</li>
            <li>Clientele</li>
            <li>Contact Us</li>
          </ul>
          <button className='btn'>BPMS Demo</button>
        </div>

      </div>


    </>

  )
}

export default Navbar
