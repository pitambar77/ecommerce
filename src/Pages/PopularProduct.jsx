import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import shirt3 from '../assests/shirt3.png'
import shirt4 from '../assests/shirt4.png'
import shirt6 from '../assests/shirt6.png'
import Star from '../assests/Star.png'

const ProductsData = [
    {
        id:1,
        img:shirt4,
        title:"Oversize men's t-shirt",
        price:899,
        star:Star,
        rating: '4.0'

    },
    {
        id:2,
        img:shirt6,
        title:"Oversize men's t-shirt",
        price:899,
        star:Star,
        rating:'3.8'

    },
    {
        id:3,
        img:shirt3,
        title:"Oversize men's t-shirt",
        price:899,
        star:Star,
        rating:4.3

    },
    {
        id:4,
        img:shirt4,
        title:"Oversize men's t-shirt",
        price:899,
        star:Star,
        rating:'4.0'

    },
    {
        id:5,
        img:shirt6,
        title:"Oversize men's t-shirt",
        price:899,
        star:Star,
        rating:3.8

    },
    // {
    //     id:6,
    //     img:shirt3,
    //     title:"Oversize men's t-shirt",
    //     star:Star,
    //     rating:3.8

    // },
    // {
    //     id:7,
    //     img:shirt4,
    //     title:"Oversize men's t-shirt",
    //     star:Star,
    //     rating:3.8

    // },
    // {
    //     id:8,
    //     img:shirt4,
    //     title:"Oversize men's t-shirt",
    //     star:Star,
    //     rating:3.8

    // },
]

const PopularProduct = () => {

  return (
    <div>
        <div className=' container'>
            <div className=''>
                <h1 className=' text-2xl font-semibold text-gray-800 mt-5'> Most Popular Products </h1>
            </div>
            
             <div className=' grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 md:gap-5 mt-5 place-items-center'>
                {ProductsData.map((data) =>(
                    
                    <div className=' rounded-xl bg-white overflow-hidden relative shadow-xl duration-300 group max-w-[300px]'>
                       
                        <div className=''>
                            <img src={data.img} alt="shirt" className=' p-8 transform transition duration-300 hover:scale-125 '/>
                        </div>

                        <div className=' p-6 '>
                            <h1 className=' sm:text-md text-sm font-semibold'>{data.title}</h1>
                            <div className=' flex text-sm font-semibold text-blue-950 '>
                                <h1 className=' '>Price:</h1>
                                <h1 className=' mt-1'><MdCurrencyRupee  /></h1>
                                <h1>{data.price}</h1>
                            </div>
                            <div className=' flex justify-between items-center text-md'>
                                <div className=' flex'>
                                    {/* <h1 className=' mt-1'>{data.star}</h1> */}
                                    <img src={data.star} alt="" className=' h-full w-4 mt-1' />
                                    <h1 className=' px-1 '>{data.rating}</h1>
                                </div>
                                <div className=''>
                                    <button className=' border-2 rounded-lg font-semibold border-blue-950 hover:bg-cyan-500 text-sm px-1'>Cart</button>
                                </div>    
                            </div>

                        </div>
                        
                    </div>
                   
                ))}
            </div>
            
            
        </div>
    </div>
  )
}

// className=' h-[200px] max-w-[200px] p-10 block group-hover:scale-105 duration-300 drop-shadow-md'
export default PopularProduct