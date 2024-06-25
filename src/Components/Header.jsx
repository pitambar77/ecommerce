import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { BiSolidCart } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
import { ImUser } from "react-icons/im";



const Header = () => {

  return (
   
    <div className=' sticky top-0 bg-white z-10'>
        <div className='container  '>
            
            <div className=' flex justify-between  items-center '>
                <div className=' sm:font-medium font-semibold ' > 
                    <h1 className=' sm:text-2xl text-sm'>Top Fashion Brands</h1>
                    <h1 className=' sm:text-base text-sm   '>Family wear collection</h1>
                </div>
                <div className=' relative sm:w-full sm:max-w-[400px] '>
                    <input className=' bg-[#f2f3f5] border-none outline-none px-12
                     py-2 rounded-xl w-full'
                     type="text" placeholder='Search product' />
                     <IoSearchOutline className=' absolute top-0 left-0 mt-3 ml-5 text-gray-600' size={20} />
                     <IoIosMenu  className=' absolute top-0 right-0 mt-3 mr-5 text-gray-600' size={20} />

                </div>

                <div className=' flex sm:gap-4 gap-2 '>
                    <div className='icon_wrapper'>
                    <BiSolidCart  className={` sm:size-8 size-4`}/>
                    </div>
                    <div className='icon_wrapper'>
                    <MdNotificationsActive  className={` sm:size-8 size-4`}/>
                    </div>
                    <div className='icon_wrapper bg-cyan-300'>
                    <ImUser  className={` sm:size-8 size-4`}/>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
   
  )
}

export default Header