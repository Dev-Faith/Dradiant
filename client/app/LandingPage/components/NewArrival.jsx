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
    <div className="bg-[#201C00] h-[1089px] text-[#FFF9EB] px-[130px] pt-[92px] mt-[164px]"> 
          <div className="top flex items-center w-[100%] justify-between ">
             <p className="text-[89px]">New Arrival</p>
              <div className="w-[513.5px] h-[1px] bg-[#FFF9EB]"></div>
              <div className="arrows flex gap-[28px]">
                  <button className="w-[65px] h-[65px] text-[#FFFCF5] border-[#FFFCF5] border-[2px] flex items-center justify-center hover:bg-[#FFF9EB] hover:text-[#201C00] transition ease-in"><FaArrowLeftLong className="w-[37px] h-[37px]"/></button>
                  <button className="w-[65px] h-[65px] text-[#FFF9EB] border-[2px] border-[##FFF9EB] flex items-center justify-center hover:bg-[#FFF9EB] hover:text-[#201C00] transition ease-in"><FaArrowRightLong className="w-[37px] h-[37px]"/></button>
              </div>
          </div>
          <div className="body mt-[61px] flex justify-between w-[100%]">
              <Image src={pose} alt="woman pose" width={493} height={697} />
              {
                  bags.map(bag => <div key={bags.name} className="flex flex-col gap-[32px]">
                      <Image src={bag.image} height={507} width={320} className="h-[507px]" />
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
