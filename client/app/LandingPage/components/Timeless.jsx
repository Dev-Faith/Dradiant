import Image from 'next/image';
import {
    croche,
    hand,
    sling,
    tote,
} from "../../DradiantImages/index.jsx";
import React from 'react'

const Timeless = () => {
    const bags = [
        {
            name: "HANDBAG",
            image: hand,
            height: 341,
        },
        {
            name: "SLINGBAG",
            image: sling,
            height: 456.65,
        },
        {
            name:  "TOTEBAG",
            image: tote,
            height: 341,
        },
        {
            name:  "CROCHETBAG",
            image: croche,
            height: 456.65,
        },
    ]

  return (
    <div className="2xl:px-[123px] lg:px-[50px] md:px-[50px] px-[11px] flex flex-col gap-[61px] items-end xl:items-center mt-[42px] lg:mt-[10rem]">
        <div className="top flex flex-col gap-[11px] xl:flex-row lg:flex-row md:flex-row xl:items-baseline md:items-end lg:items-baseline w-[100%] lg:justify-between">
              <p className="xl:w-[540px] text-[38px]/[37px] w-[224px]  xl:text-[89px]/[84px] lg:text-[69px]/[75px] text-[#514700]">TIMELESS STYLE</p>
              <p className="text-[#7B7768] w-[300px] text-[16px] xl:text-[28px] lg:text-[24px] md:text-[24px] xl:w-[710px] md:w-[500px] lg:w-[610px]">Owning a bag from us isn't just about acquiring a functional item; it's about carrying a piece of artistry and the love that went into its creation.</p>
        </div>
        <div className="xl:flex items-top justify-between w-full grid grid-cols-2 gap-y-[20px]">
              {
                  bags.map(bag => <div className=" flex flex-col items-center gap-[14px] xl:gap-[20px] xl:text-[32px] text-[24px]"><Image src={bag.image} alt={`${bag.name} image`} className={`xl:w-[294px] lg:w-[400px] md:w-[294px] w-[120px] h-${bag.height}px`} /><p>{bag.name}</p></div>)
             }
        </div>  
          
    </div>
  )
}

export default Timeless;
