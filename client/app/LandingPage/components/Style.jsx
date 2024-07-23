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
    <div className="pt-[164px] px-[124px]">
        <div className=" top flex  items-center justify-between">
              <p className="text-[#514700] text-[89px]/[64px]">STYLE</p>
              <p className="w-[844px] text-[#7B7768] text-[28px]">le's a creative canvas for self-expression. It allows you to tell a story through your style that reflecting your personality, interest even mood.</p>
        </div>
        <div className="body flex gap-[22px] mt-[139px]">
              {
                  bags.map(bag =>
                      <div className="relative">
                          <Image src={bag.image} alt={`${bag.image} bag`} height={826} width={622} />
                          <div className="ImageDesc flex justify-between px-[16px] text-[32px] absolute top-[2rem] w-[562px] items-baseline">
                              <p className="w-[337px] text-[#F3EDE0]">{bag.text}</p>
                              <button className="h-[53px] w-[53px] bg-[#F3EDE0] flex items-center justify-center rounded-full hover:bg-[#201C00] hover:text-[#F3EDE0] transition ease-in">
                                  <MdOutlineArrowOutward className="w-[33px] h-[33px]"/>
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
