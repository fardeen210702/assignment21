import React from 'react'

const Part = () => {
  return (
    <div className=' h-fit  md:h-[300px] w-full  px-[95px] flex flex-col md:flex-row  items-center'>
        <div className='w-[300px]  md:w-[60%]  h-full '>
              <h1 className=' w-full lg:w-[713px] h-[103px] font-inter text-[20px] md:text-[50px] font-bold md:leading-[60.5px] text-[#210379]'>Who Can Be Part of It?</h1>

              <ul className=' flex  flex-wrap gap-9 w-[640px]  items-center'>
                {
                      ['Tech consultants', 'Influenccers', 'Business coaches', 'Content creaters', 'E-commerce web developers', 'Digital marketing agencies'].map((el,id)=>{
                          return <li key={id} className='w-[290px] h-[30px] text-[#210379] font-[400] font-inter flex items-center gap-5'>
                              <p className='w-[21px] border-2 border-[#FC5701] relative flex justify-end'>
                                <span className='box w-[10px] h-[10px] bg-orange-600 absolute right-[-10px]  -bottom-1'></span>

                              </p>

                             {el}</li>
                      })
                }
              </ul>

        </div>
          <div className='w-[477px] h-[258px] bg-[#D9D9D9]'></div>


      
    </div>
  )
}

export default Part
