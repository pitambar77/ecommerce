import React from 'react'
import menImg from '../assests/menImg.jpg'
import womenImg from '../assests/img3.jpg'
import kidsImg from '../assests/img2.jpg'
import { BsArrowRight } from "react-icons/bs";
import { MdCurrencyRupee } from "react-icons/md";



const Home = () => {
  return (
    <div className=' container'>
      <div className=' grid sm:grid-cols-3 pt-8 gap-5'>
      <div className='  relative block shadow-lg rounded-md shadow-gray-400'>
          <img className=' w-full h-full object-cover rounded-lg ' src={menImg} alt='men'/>

          <div className=' absolute max-w-[200px] sm:ml-8  ml-4 top-[40%] -translate-y-[40%] space-y-3'>
            <h2 className=' text-xl sm:text-xl font-bold text-gray-800'>Men's Fashions Collection</h2>

              <div className=' flex text-sm font-semibold text-gray-800'>
                <h1 className=''>Starting at</h1>
                  <h1 className=' mt-1'><MdCurrencyRupee  /></h1>
                  <h1>1099</h1>
             </div>

            <p className=' border-b-4 rounded-lg border-gray-800 max-w-[120px] '></p>

            <button className=' flex items-center gap-3 font-semibold text-gray-800 '>Shop it now <BsArrowRight size={20} className=' ' /> </button>
            
          </div>
          
        </div>
        <div className=' relative shadow-lg rounded-md shadow-gray-400'>
          <img className=' w-full h-full object-cover rounded-lg ' src={womenImg} alt='men'/>

          <div className=' absolute max-w-[250px] sm:ml-8  ml-4 top-[40%] -translate-y-[40%] space-y-3'>
            <h2 className=' text-xl sm:text-xl font-bold text-gray-800'>Women's Fashions Collection</h2>
            
            <div className=' flex text-sm font-semibold text-gray-800'>
                <h1 className=''>Starting at</h1>
                  <h1 className=' mt-1'><MdCurrencyRupee  /></h1>
                  <h1>1099</h1>
             </div>

            <p className=' border-b-4 rounded-lg border-gray-800 max-w-[120px] '></p>

            <button className=' flex items-center gap-3 font-semibold text-gray-800 '>Shop it now <BsArrowRight size={20} className=' ' /> </button>
            
          </div>
          
        </div>

        <div className='  relative shadow-lg rounded-md shadow-gray-400'>
          <img className=' w-full h-full object-cover rounded-lg ' src={kidsImg} alt='men'/>

          <div className=' absolute max-w-[250px] sm:ml-8  ml-4 top-[40%] -translate-y-[40%] space-y-3'>
            <h2 className=' text-xl sm:text-xl font-bold text-gray-800'>Kid's wonder Fashions Collection</h2>
            
            <div className=' flex text-sm font-semibold text-gray-800'>
                <h1 className=''>Starting at</h1>
                  <h1 className=' mt-1'><MdCurrencyRupee  /></h1>
                  <h1>1099</h1>
             </div>


            <p className=' border-b-4 rounded-lg border-gray-800 max-w-[120px] '></p>

            <button className=' flex items-center gap-3 font-semibold text-gray-700  '>Shop it now <BsArrowRight size={20} className=' ' /> </button>
            
          </div>
          
        </div>


      </div>
    </div>
  )
}

export default Home