import React from 'react'
import menShop from '../assests/catagoriesImage/ShopM.png'
import WomenShop from '../assests/catagoriesImage/ShopW.png'
import Bags from '../assests/catagoriesImage/Bangs.png'
import Vintages from '../assests/catagoriesImage/Vintages.png'
import shose from '../assests/catagoriesImage/shose.png'
import Dress from '../assests/dress.jpg'

const CatagoriesData = [
    {
        id:1,
        img:menShop,
        title:"Men",
        price:559
    },
    {
        id:2,
        img:WomenShop,
        title:"Women",
        price:1099,
    },
    {
        id:3,
        img:Vintages,
        title:"Vintage",
        price:699,
    },
    {
        id:4,
        img:Dress,
        title:"Bags",
        price:4999,
    },
    {
        id:5,
        img:shose,
        title:"shoes",
        price:5001,
    },
    {
        id:6,
        img:menShop,
        title:"Men",
        price:199,
    },
    {
        id:7,
        img:WomenShop,
        title:"Women",
        price:799,
    },
    {
        id:8,
        img:Vintages,
        title:"Vintage",
        price:899,
    },
    {
        id:9,
        img:Bags,
        title:"Bags",
        price:2049,
    },
    {
        id:10,
        img:shose,
        title:"shoes",
        price:2589,
    }
]

const NewArrival = () => {
  return (
    <div>
        <div className=' container '>
            <div className=''>
                <h1 className=' text-2xl font-semibold text-gray-700 mt-8'> New Arrival </h1>
            </div>
             <div className=' grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-2 mt-8 place-items-center'>
                {CatagoriesData.map((data) =>(
                <>
                <div className=''>
                 <div className=' rounded-xl bg-slate-400 overflow-hidden relative transform transition hover:scale-95 shadow-xl duration-300 group object-cover sm:w-52 '>
                     <div className=''>
                         <img src={data.img} alt="shirt" className=' p-2 sm:h-72 h-40'/>
                         <div className=' absolute sm:top-4 top-2 sm:px-4 px-2'>
                            <button className=' bg-blue-900 rounded-md text-white sm:px-4 px-2'>New</button>
                         </div>
                     </div>
                 </div>
                 <div className=' sm:p-4 p-2  '>
                 <h1 className='text-md text-gray-800  font-semibold'>{data.title}</h1>
                 <div className=' flex justify-between mt-2'>
                    <span>${data.price}</span>
                    <span><button className=' border border-blue-300 sm:px-2 px-1 sm:text-base text-sm rounded-md hover:border-blue-950'>Add To Cart</button></span>                    </div>                 
             </div>
             </div>
             </>
                ))}
            </div>
        </div>
    </div>
  )
}

export default NewArrival