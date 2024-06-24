import React, { useState } from 'react'
import logo from '../assests/logo.png'
import { IoIosArrowRoundBack } from "react-icons/io";
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

    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(false);

  return (

        <div className={`  h-screen p-5 pt-8 duration-300 text-blue-950 bg-slate-100 relative  ${open ? " w-72":"w-20"}`}>
            <IoIosArrowRoundBack className={`text-xl rounded-full absolute -right-3 top-9 border cursor-pointer text-gray-600 ${!open && "rotate-180"}`}
            onClick={()=>setOpen(!open)} />
            <div>
                <img src={logo} alt='logo'/>
            </div>
            <ul className=' pt-2'>
                {Menus.map((menu,index) =>(
                    <>
                    <li key={index} className=' text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 hover:bg-slate-200'>
                            <span className=' text-2xl block float-left'>
                                {menu.icon ? menu.icon:""}
                            </span>
                        <span className={` text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>

                        {menu.submenu && open && (
                        <MdKeyboardArrowDown className={`${submenuOpen && "rotate-180"} text-lg`} onClick={()=>setSubmenuOpen(!submenuOpen)} />
                        )}
                    </li>
                    {menu.submenu && submenuOpen && open && (
                        <ul>
                            {menu.subMenuItems.map((subMenuItem, index) =>(
                                <li key={index} className=' text-base font-medium flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 hover:bg-slate-200' >
                                     <span className=' text-2xl block float-left text-blue-950'>
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


            <div className= {` ${!open && "hidden"} relative mt-8 `}>
                <div>
                    <img className=' w-full h-full object-cover rounded-lg ' src={Dash} alt='dash'/>

                </div>

                <div className=' absolute flex flex-col justify-between items-center max-w-[220px] top-[50%] -translate-y-[40%] space-y-3'>
                    <h1 className=' text-lg font-bold text-gray-800 '>Need Help!</h1>
                    <p className=' ml-8 text-sm'>About account mangment ordering, payment & refund</p>
                    <button className=' bg-blue-700 p-2 ml-4 text-white rounded-xl'> Customer service </button>
                </div>
          
        </div>
        </div>
        
  
  )
}

export default SideBar