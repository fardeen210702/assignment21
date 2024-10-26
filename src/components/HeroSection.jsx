import React from 'react'
import Hero from '../../public/Hero.png'

const HeroSection = () => {
  return (
      <div className='w-full  h-[450px] flex flex-col items-center justify-center md:flex-row px-2 mt-10 sm:mt-[150px] md:mt-0 lg:px-[92px]    md:gap-0   '>
        <div className=' w-full md:w-[450px] lg:w-[592px]  flex justify-center items-center md:items-start flex-col md:gap-2  '>
              <h1 className='w-full lg:w-[415px] font-inter text-center md:text-start text-[20px] sm:text-[40px] md:text-[45px]  lg:text-[50px] font-bold leading-[60.5px] text-[#210379]'>Affiliate Program </h1>
        <p className=' pSpace text-center md:text-start w-full sm:w-[350px] xl:w-[500px] text-[#5D5D5D] font-[500] h-[136px] font-inter leading-[25px] md:leading-[33.89px] text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting </p>
        </div>
        <div className=' w-[300px] lg:w-[613px] flex items-center md:h-[406px] '>
            <img src={Hero} className='w-full' alt="" />
        </div>
      
    </div>
  )
}

export default HeroSection
