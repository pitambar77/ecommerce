import React from 'react'
import shoes from '../assests/banner/shoes.jpg'
import glass from '../assests/banner/glass2.jpg'
import bags from '../assests/banner/bag.jpg'
import banner from '../assests/banner/banner.png'


const Banner = () => {
  return (
    <>
        <div className=' pt-6'>
            <div className=' grid gap-8 sm:grid-cols-12'>
                <div className=' relative sm:col-span-8 '> 
                    <img src={shoes} alt="" className=' w-full  md:h-[620px] h-[300px]  rounded-lg' />
                    <div className=' absolute sm:top-[30%] top-[10%] p-8  space-y-6 sm:max-w-[300px]'>
                        <h1 className=' text-2xl font-semibold text-gray-800'>Shoes Collections</h1>
                        <p className=' sm:text-6xl text-3xl font-semibold text-blue-950  '>Up to 50% <br /> Off</p>
                        <button className=' bg-blue-950 sm:px-8 px-5  sm:py-3 py-2 font-semibold hover:bg-blue-900 text-white rounded-lg'>Shop now</button>
                    </div>
                    
                </div>
                <div className=' relative sm:col-span-4 '>
                    <div className='flex flex-col'>
                        <img src={glass} alt="" className=' h-[300px] w-full rounded-lg ' />
                        <div className=' absolute mt-6 px-10 '>
                            <h1 className=' text-2xl font-semibold text-gray-800'>Designer</h1>
                            <h2 className='text-4xl font-semibold text-blue-950 mb-28 '>Sunglasses</h2>
                            <button className=' bg-blue-950 sm:px-8 px-5  sm:py-3 py-2  font-semibold hover:bg-blue-900 text-white rounded-lg'>Shop now</button>
                        </div>
                    </div>
                    <div className='flex flex-col items-center relative'>
                        <img src={bags} alt=""  className=' h-[300px] w-full mt-4  rounded-lg'/>
                        <div className=' absolute mt-8 '>
                            <h1 className=' text-2xl font-semibold text-gray-800'>Best of Bags</h1>
                            <h2 className='text-4xl font-semibold text-blue-950 mb-28 '>Up to 70% Off</h2>
                            <button className=' bg-blue-950 sm:px-8 px-5  sm:py-3 py-2  font-semibold hover:bg-blue-900 text-white rounded-lg'>Shop now</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className=' mt-6'>
                <img src={banner} alt=""  className=' w-full rounded-lg'/>
        </div>
        </div>
        
    </>
  )
}

export default Banner