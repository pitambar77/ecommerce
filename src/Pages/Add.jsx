import React from 'react'
import Shipping from '../assests/Shipping Van.png'
import Return from '../assests/return.png'
import secure from '../assests/secure.png'
import offer from '../assests/offer.png'

const Add = () => {
  return (
    <div className=' container  pt-2 '>
        <div className='grid sm:grid-cols-4 grid-cols-2 gap-2 justify-between items-center text-blue-950 font-semibold'>
            <div className=' flex items-center'>
                <div>
                    <img src={Shipping} alt="" className=' sm:w-24 w-20 sm:h-full' />
                </div>
                <div>
                    <h1 className=' sm:text-lg text-sm'>Free Shipping</h1>
                    <p className=' sm:text-base text-sm'>For all order over $ 599</p>
                </div>
            </div>
            <div className='flex items-center'>
                <div>
                    <img src={Return} alt="" className=' sm:w-24 w-20 sm:h-full' />
                </div>
                <div>
                    <h1 className='sm:text-lg text-sm'>1 & 1 Returns</h1>
                    <p className='sm:text-base text-sm'>Cancellation after 1 day</p>
                </div>
            </div>
            <div className=' flex items-center'>
                <div>
                    <img src={secure} alt="" className=' sm:w-14 w-7  sm:h-12' />
                </div>
                <div>
                    <h1 className=' sm:text-lg text-sm'>100% Secure Payment</h1>
                    <p className=' sm:text-base text-sm'>Guarantee secure payments</p>
                </div>
            </div>
            <div className=' flex items-center'>
                <div>
                    <img src={offer} alt="" className=' sm:w-24 w-20 sm:h-18' />
                </div>
                <div>
                    <h1 className=' sm:text-lg text-sm'>Daily Offers</h1>
                    <p className=' sm:text-base text-sm'>Discount up to 50% OFF</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add