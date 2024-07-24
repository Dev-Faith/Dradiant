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
    <div className="md:px-[123px] px-[11px] flex flex-col gap-[61px] items-end md:items-center">
        <div className="top flex flex-col gap-[11px] md:flex-row md:items-baseline  w-[100%]">
              <p className="md:w-[540px] text-[38px]/[37px] w-[224px]  md:text-[89px]/[84px] text-[#514700]">TIMELESS STYLE</p>
              <p className="text-[#7B7768] w-[300px] text-[16px] md:text-[28px] md:w-[710px]">Owning a bag from us isn't just about acquiring a functional item; it's about carrying a piece of artistry and the love that went into its creation.</p>
        </div>
        <div className="md:flex items-top justify-between w-full grid grid-cols-2 gap-y-[20px]">
              {
                  bags.map(bag => <div className=" flex flex-col items-center gap-[14px] md:gap-[20px] md:text-[32px] text-[24px]"><Image src={bag.image} alt={`${bag.name} image`} className={`md:w-[294px] w-[120px] h-${bag.height}px`} /><p>{bag.name}</p></div>)
             }
        </div>  
          
    </div>
  )
}

export default Timeless;
