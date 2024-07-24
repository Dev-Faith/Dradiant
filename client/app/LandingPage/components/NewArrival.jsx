import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { pose,back,
    handbag } from "../../DradiantImages/index";
import Image from 'next/image';


const NewArrival = () => {
    const bags = [
        { name: 'BACKBAG', image:back, price:"NGN 10,000"},
        {name: 'HANDBAG', image:handbag, price:"NGN 8,000"},
    ]
  return (
    <div className="bg-[#201C00] md:h-[1089px]  text-[#FFF9EB] md:px-[130px] px-[11px] md:py-[92px] py-[74px] mt-[164px]"> 
          <div className="top flex items-center w-[100%] justify-between ">
             <p className="md:text-[89px] text-[41px] text-center md:text-start md:w-auto w-full">New Arrival</p>
              <div className="w-[513.5px] h-[1px] bg-[#FFF9EB] hidden md:flex"></div>
              <div className="arrows md:flex gap-[28px] hidden ">
                  <button className="w-[65px] h-[65px] text-[#FFFCF5] border-[#FFFCF5] border-[2px] flex items-center justify-center hover:bg-[#FFF9EB] hover:text-[#201C00] transition ease-in"><FaArrowLeftLong className="w-[37px] h-[37px]"/></button>
                  <button className="w-[65px] h-[65px] text-[#FFF9EB] border-[2px] border-[##FFF9EB] flex items-center justify-center hover:bg-[#FFF9EB] hover:text-[#201C00] transition ease-in"><FaArrowRightLong className="w-[37px] h-[37px]"/></button>
              </div>
          </div>
          <div className="body mt-[61px] flex md:flex-row flex-col justify-between items-center w-[100%] gap-[60px]">
              <Image src={pose} alt="woman pose" width={493} height={697} className="md:flex hidden" />
              {
                  bags.map(bag => <div key={bags.name} className="flex flex-col gap-[32px] w-[300px]">
                      <Image src={bag.image}  className="md:h-[507px] h-[507px] md:w-[320px] w-[347px]" />
                      <div className="itemDesc flex flex-col gap-[60px]">
                          <div className="title flex justify-between items-baseline">
                              <p className="text-[36px]/[44px]">{bag.name}</p>
                              <p className="text-[24px]/[32px]">{bag.price}</p>
                          </div>
                          <button className="text-[36px] w-[100%] border-[1px] hover:bg-[#FFF9EB] hover:text-[#201C00] transition ease-in">Add to Cart</button>
                      </div>
                  </div>)
              }
          </div>
    </div>
  )
}

export default NewArrival;
