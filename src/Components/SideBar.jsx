import React, { useState } from 'react'
import logo from '../assests/logo.png'
import { ImHome3 } from "react-icons/im";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSolidCart } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { BiSolidUser } from "react-icons/bi";
import { SiSalesforce } from "react-icons/si";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { FaAt } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";

import Dash from '../assests/Dash-Need.png'


const SideBar = () => {

    const Menus = [
        {
            title:'Home',
            icon:<ImHome3 />
        },
        {
            title:'Shop',
            icon:<BsShop />,
            submenu:true,
            subMenuItems:[{
                title:'Cart',
                icon:<BiSolidCart />,
            },
            {
                title:'Saved',
                icon:<FcLike />,
            },]
        },
        {
            title:'Profile',
            icon:<BiSolidUser />
        },
        {
            title:'On Sale',
            icon:<SiSalesforce />
        },
        {
            title:'Customize',
            icon:<HiOutlineBars3CenterLeft />
        },
        {
            title:'Contact Us',
            icon:<FaAt />
        },
        {
            title:'New Arrival',
            icon:<SiSalesforce />
        },
        {
            title:'Most Popular',
            icon:<FaHandHoldingHeart />
        }

    ]

    
    const [submenuOpen, setSubmenuOpen] = useState(false);

  return (

        <div className={` sticky top-0 h-screen sm:p-2 p-1 sm:pt-4 duration-300 text-blue-950 bg-slate-100  rounded sm:w-60 w-28 `}>
            {/* <IoIosArrowRoundBack className={`text-xl rounded-full absolute -right-3 top-9 border cursor-pointer text-gray-600 ${!open && "rotate-180"}`}
            onClick={()=>setOpen(!open)} /> */}
            <div>
                <img src={logo} alt='logo' className=' text-4xl w-32 h-full px-2 cursor-pointer'/>
            </div>
            <ul className=' sm:pt-1 pt-0'>
                {Menus.map((menu,index) =>(
                    <>
                    <li key={index} className=' text-sm flex items-center sm:gap-x-4 gap-2 cursor-pointer sm:p-1 p-0 rounded-md sm:mt-2 mt-1 hover:bg-slate-200'>
                            <span className=' sm:text-sm text-xs block float-left px-4'>
                                {menu.icon ? menu.icon:""}
                            </span>
                        <span className={` sm:text-sm text-xs  font-medium flex-1  `}>{menu.title}</span>

                        {menu.submenu  && (
                        <MdKeyboardArrowDown className={`${submenuOpen && "rotate-180"} sm:text-lg text-xs`} onClick={()=>setSubmenuOpen(!submenuOpen)} />
                        )}
                    </li>
                    {menu.submenu && submenuOpen &&  (
                        <ul> 
                            {menu.subMenuItems.map((subMenuItem, index) =>(
                                <li key={index} className=' sm:text-sm text-xs font-medium flex items-center sm:gap-x-3 gap-x-1 cursor-pointer sm:p-1 p-0 rounded-md mt-2 hover:bg-slate-200' >
                                     <span className=' sm:text-xl text-xs block float-left text-blue-950 px-4'>
                                        {subMenuItem.icon ? subMenuItem.icon :""}
                                    </span>
                                    {subMenuItem.title}
                                </li>
                            ))}
                        </ul>
                    )}
                    </>
                ))}
            </ul>


            <div className= {` relative sm:mt-8  `}>
                <div>
                    <img className=' sm:w-full sm:h-full  object-cover rounded-lg ' src={Dash} alt='dash'/>

                </div>

                <div className=' absolute flex flex-col justify-between items-center max-w-[220px] top-[50%] -translate-y-[40%] space-y-3'>
                    <h1 className=' sm:text-lg text-sm font-bold text-gray-800 '>Need Help!</h1>
                    <p className=' ml-8 text-xs'>About account mangment ordering, payment & refund</p>
                    <button className=' bg-blue-700 text-sm p-1 ml-4 text-white rounded-md'> Customer service </button>
                </div>
          
        </div>
        </div>
        
  
  )
}

export default SideBar