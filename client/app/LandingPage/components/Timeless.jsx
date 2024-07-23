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
    <div className="mt-[90vh] px-[123px] flex flex-col gap-[61px]">
        <div className="top flex items-baseline">
              <p className="w-[540px] text-[89px]/[84px] text-[#514700]">TIMELESS STYLE</p>
              <p className="text-[#7B7768] text-[28px] w-[710px]">Owning a bag from us isn't just about acquiring a functional item; it's about carrying a piece of artistry and the love that went into its creation.</p>
        </div>
        <div className="flex items-top justify-between">
              {
                  bags.map(bag => <div className=" flex flex-col items-center gap-[20px] text-[32px]"><Image src={bag.image} alt={`${bag.name} image`} height={bag.height} width={280} /><p>{bag.name}</p></div>)
             }
        </div>  
          
    </div>
  )
}

export default Timeless;
