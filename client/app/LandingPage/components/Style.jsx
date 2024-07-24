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
    <div className="md:pt-[164px] pt-[68px] md:px-[124px] px-[11px]">
        <div className=" top flex md:flex-row flex-col md:items-center justify-between items-start ">
              <p className="text-[#514700] md:text-[89px]/[64px] text-[41px]/[64px]">STYLE</p>
              <p className="md:w-[844px] text-[#7B7768] md:text-[28px]/[36px] text-[16px]/[24px] w-[300px]">le's a creative canvas for self-expression. It allows you to tell a story through your style that reflecting your personality, interest even mood.</p>
        </div>
        <div className="body flex flex-col md:flex-row  gap-[23px] md:gap-[22px] md:mt-[139px] mt-[68px]">
              {
                  bags.map(bag =>
                      <div className="relative">
                          <Image src={bag.image} alt={`${bag.image} bag`} height={826} width={622} />
                          <div className="ImageDesc flex justify-between px-[16px] md:text-[32px] text-[14px]/[17px] absolute md:top-[2rem] top-[34px] md:w-[562px] w-[300px] md:items-baseline">
                              <p className="md:w-[337px] text-[#F3EDE0]  w-[145px]">{bag.text}</p>
                              <button className="md:h-[53px] md:w-[53px] h-[31px] w-[31px] bg-[#F3EDE0] flex items-center justify-center rounded-full hover:bg-[#201C00] hover:text-[#F3EDE0] transition ease-in">
                                  <MdOutlineArrowOutward className="md:w-[33px] md:h-[33px] w-[24px] h-[24px]"/>
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
