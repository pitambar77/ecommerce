import React from 'react'
import menShop from '../assests/catagoriesImage/ShopM.png'
import WomenShop from '../assests/catagoriesImage/ShopW.png'
import Bags from '../assests/catagoriesImage/Bangs.png'
import Vintages from '../assests/catagoriesImage/Vintages.png'
import shose from '../assests/catagoriesImage/shose.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CatagoriesData = [
    {
        id:1,
        img:menShop,
        title:"Men",
        count:2,
    },
    {
        id:2,
        img:WomenShop,
        title:"Women",
        count:84,
    },
    {
        id:3,
        img:Vintages,
        title:"Vintage",
        count:24,
    },
    {
        id:4,
        img:Bags,
        title:"Bags",
        count:10,
    },
    {
        id:5,
        img:shose,
        title:"shoes",
        count:9,
    },
    {
        id:6,
        img:WomenShop,
        title:"Women",
        count:84,
    },
    {
        id:7,
        img:Vintages,
        title:"Vintage",
        count:24,
    },
    {
        id:8,
        img:Bags,
        title:"Bags",
        count:10,
    },
    {
        id:9,
        img:shose,
        title:"shoes",
        count:9,
    },
]

const Catagories = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
        <div className=' container'>
            <div className=''>
                <h1 className=' text-xl font-semibold text-gray-700 mt-5 px-2'> Shop By Catagories </h1>
            </div>
             {/* <div className=' grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 md:gap-5 mt-5 place-items-center'> */}

             <div className=' grid gap-4 md:gap-5 mt-5 place-items-center'>
                <div className=' w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide ' 
                >
                     <Slider {...settings}>

                    

                {CatagoriesData.map((data) =>(
                    //  <div className=' rounded-xl bg-white overflow-hidden inline-block m-2 relative shadow-xl duration-300 group  max-w-[300px]'>
                    <div className=' rounded-xl bg-white  inline-block relative shadow-md border m-2 duration-300 group max-w-[180px]'>

                     <div className=''>
                         <img src={data.img} alt="shirt" className='  h-[200px] p-4 transform transition duration-300 hover:scale-125 '/>
                     </div>

                     <div className=' p-4  '>
                         <h1 className=' text-center text-md text-gray-800  font-semibold'>{data.title}</h1>
                         <p className='text-center text-sm text-gray-500'>({data.count} items)</p>
                         
                     </div>
                 </div>
                ))}
                </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Catagories