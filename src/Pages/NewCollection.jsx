import React from 'react'
import mobilebg from '../assests/mobile.jpg'
import camera from '../assests/camera.jpg'
import Star from '../assests/Star.png'

const ProductsData = [
    {
        id:1,
        img:camera,
        title:"NIKON Z30 Mirrorless Camera Z DX 16 - 50 mm f/3.5 - 6.3 VR ....  ",
        price:899,
        star:Star,
        rating:4.0

    },
    {
        id:2,
        img:camera,
        title:"NIKON Z30 Mirrorless Camera Z DX 16 - 50 mm f/3.5 - 6.3 VR ....",
        price:899,
        star:Star,
        rating:3.8

    },
    {
        id:3,
        img:camera,
        title:"NIKON Z30 Mirrorless Camera Z DX 16 - 50 mm f/3.5 - 6.3 VR ....",
        price:899,
        star:Star,
        rating:4.3

    },
    {
        id:4,
        img:camera,
        title:"NIKON Z30 Mirrorless Camera Z DX 16 - 50 mm f/3.5 - 6.3 VR ....",
        price:899,
        star:Star,
        rating:4.0

    }
]

const NewCollection = () => {
  return (
    <div>
        <div className=' grid sm:grid-cols-12 gap-6 bg-zinc-50'>
            <div className=' sm:col-span-4 h-screen '>
                <img src={mobilebg} alt="" className=' h-full rounded-lg object-cover ' />
            </div>
            <div className='sm:col-span-8'>
                <div className=' container text-blue-950'>
             <div className=' grid sm:grid-cols-2 gap-6 place-items-center'>
                {ProductsData.map((data) =>(
                    <div className=' rounded-x overflow-hidden  transform transition-all hover:translate-y-2 duration-300 relative shadow-xl group max-w-[300px]'>
                        <div className=' flex justify-center items-center'>
                            <img src={data.img} alt="shirt" className=' w-48'/>
                        </div>

                        <div className=' p-6'>
                            <h1 className=' text-md  font-semibold'>{data.title}</h1>
                            <div className=' flex items-center gap-2'>
                                <span className=' font-semibold text-sm text-red-500'>$882.00</span>
                                <span className=' text-sm line-through opacity-70'>$980.00</span>
                            </div>
                            <div className=' flex items-center mt-2 gap-1'>
                                <img src={data.star} alt="" className=' w-5' />
                                <img src={data.star} alt="" className=' w-5' />
                                <img src={data.star} alt="" className=' w-5' />
                                <img src={data.star} alt="" className=' w-5' />
                                <img src={data.star} alt="" className=' w-5' />
                                <p className=' text-sm text-gray-600'>(1)</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default NewCollection