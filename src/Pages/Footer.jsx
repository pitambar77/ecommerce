import React from 'react'
import twitter from '../assests/footer/Twitter.png'
import insta from '../assests/footer/insta.png'
import facebok from '../assests/footer/facebok.png'
import telegram from '../assests/footer/telegram.png'
import master from '../assests/footer/master.png'
import paytm from '../assests/footer/paytm.png'
import paypal from '../assests/footer/paypal.png'
import phonepay from '../assests/footer/phonepay.png'


const Footer = () => {
  return (
    <div >
        <div className=' bg-slate-800  w-full sm:p-14 sm:mt-6 mt-2 text-gray-400'>
            <div className=' container'>

            
            <div className=' flex justify-between sm:max-w-5xl sm:px-10 '>
                <div>
                    <h1 className=' text-pink-600 font-semibold'>CUSTOMER SERVICES</h1>
                    <div className=' text-sm mt-6'>
                        <h1>Contact Us</h1>
                        <h1>Track Order</h1>
                        <h1>Cancel Order</h1>
                        <h1>Return Order</h1>
                        <h1 className=' mt-10'>15 Days return policy* </h1>
                        <h1>Cash on delivery*</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-pink-600 font-semibold'>COMPANY</h1>
                    <div className=' text-sm mt-6'>
                        <h1>About Us</h1>
                        <h1>We're Hiring</h1>
                        <h1>Terms & Conditions</h1>
                        <h1>Privacy Policy</h1>
                        <h1>Blog</h1>
                        
                    </div>
                </div>
                <div>
                    <h1 className='text-pink-600 font-semibold'>CONNECT WITH US</h1>
                    <div className=' flex sm:w-10 w-6 mt-4 '>
                        <img src={twitter} alt="" className=' ' />
                        <img src={facebok} alt=""  className=' ' />
                        <img src={insta} alt="" />
                        <img src={telegram} alt="" />
                    </div>
                    <div className=' mt-20'>
                        <h1 className='text-pink-600 font-semibold'>100% SECURE PAYMENT </h1>
                            <div className=' flex sm:w-10 w-6 mt-4 '>
                                <img src={master} alt="" className=' ' />
                                <img src={paytm} alt=""  className=' ' />
                                <img src={paypal} alt="" />
                                <img src={phonepay} alt="" />
                            </div>
                    </div>
                </div>
            </div>
            <div className=' border-b p-4  sm:max-w-5xl'></div>
            
            <div className=' flex justify-between sm:max-w-5xl sm:px-10 mt-6  '>
                <div>
                    <h1 className=' text-white font-semibold'>MEN'S CLOTHING</h1>
                    <div className=' text-sm mt-6'>
                        <h1>Top Wear</h1>
                        <h1>Men's New Arrivals</h1>
                        <h1>Men's T-shirt</h1>
                        <h1>Men's Hoodies & Sweatshirt</h1>
                        <h1 className=' mt-10'>Oversized T-Shirt</h1>
                        <h1>Men's Kurta</h1>
                        <h1>Men's Polo T-shirt</h1>
                    </div>
                </div>
                <div>
                    <h1 className=' text-white font-semibold'>WOMEN'S CLOTHING</h1>
                    <div className=' text-sm mt-6'>
                        <h1>Women's Top Wear</h1>
                        <h1>Women's New Arrivals</h1>
                        <h1>Women's T-shirt</h1>
                        <h1>Women's Hoodies & Sweatshirt</h1>
                        <h1 className=' mt-10'>Oversized T-Shirt</h1>
                        <h1>Women's Kurta</h1>
                        <h1>Women's Polo T-shirt</h1>
                        
                    </div>
                </div>
                <div>
                    <h1 className=' text-white font-semibold'>MOBILE COVER</h1>
                    <div className=' text-sm mt-4 '>
                       <h1>Apple</h1>
                       <h1>Samsung</h1>
                       <h1>Realme</h1>
                       <h1>Oneplus</h1>
                       <h1>Vivo</h1>
                       <h1>Oppo</h1>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer