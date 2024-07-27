import React from 'react'
import Image from "next/image";
import { red, brown } from "../../DradiantImages/index";
import { MdOutlineArrowOutward } from "react-icons/md";

const Style = () => {
    const bags = [
        {
            image: red,
            text: "MODERN QUALITY AND MIND REFRESHING COLOR BAGS",
        },
        {
            image: brown,
            text: "LATTEST FASHION AND BEAUTY LEADER BAG FOR YOU!"
        },
    ]

  return (
    <div className="xl:pt-[164px] md:mt-[64px] px-[11px] lg:px-[50px] md:px-[50px] pt-[68px] w-full">
        <div className=" top flex lg:flex-row md:flex-row md:items-end flex-col lg:items-end justify-between items-start  w-[100%] ">
              <p className="text-[#514700] lg:text-[89px]/[64px] text-[41px]/[64px] ">STYLE</p>
              <p className="text-[#7B7768] lg:text-[28px]/[36px] text-[16px]/[24px] w-[300px] xl:w-[844px] md:w-[500px] lg:w-[610px] lg:text-[24px] md:text-[24px] ">le's a creative canvas for self-expression. It allows you to tell a story through your style that reflecting your personality, interest even mood.</p>
        </div>
        <div className="body flex flex-col lg:flex-row md:flex-row items-center  gap-[23px] lg:gap-[22px] lg:mt-[139px] mt-[68px]">
              {
                  bags.map(bag =>
                      <div className="relative lg:h-[826px] lg:w-[622px] md:h-[500px] md:w-[622px] w-[300px]">
                          <Image src={bag.image} alt={`${bag.image} bag`} className='rounded-[8px] lg:h-[826px] lg:w-[622px]  object-cover '/>
                          <div className="ImageDesc flex justify-between px-[16px] text-[14px]/[17px] absolute lg:top-[2rem] top-[34px]  w-full lg:justify-between items-start ">
                              <p className="lg:w-[200px] text-[#F3EDE0] w-[145px] xl:w-[400px] lg:text-[16px]/[20px] xl:text-[32px]/[40px]">{bag.text}</p>
                              <button className="lg:size-[32px] size-[31px] bg-[#F3EDE0] flex items-center justify-center rounded-full hover:bg-[#201C00] hover:text-[#F3EDE0] transition ease-in">
                                  <MdOutlineArrowOutward className="lg:size-[24px] size-[24]"/>
                              </button>
                          </div>
                      </div>
                  )
              }
        </div>
    </div>
  )
}

export default Style;
