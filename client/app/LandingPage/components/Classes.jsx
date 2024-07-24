import React from 'react';
import Image from "next/image";
import {classImg, cuttingGirl} from "../../DradiantImages/index";

const Classes = () => {
  return (
    <div className="md:pt-[164px] pt-[68px] md:px-[124px] px-[11px] flex flex-col md:gap-[98px] gap-[21px] ">
       <div className=" top flex md:flex-row flex-col  md:items-center items-start justify-between">
              <p className="text-[#514700] md:text-[89px]/[64px] text-[41px]/[64px]">CLASSES</p>
              <p className="md:w-[844px] w-[300px] text-[#7B7768] md:text-[28px]/[36px] text-[16px]/[24px]">le's a creative canvas for self-expression. It allows you to tell a story through your style that reflecting your personality, interest even mood.</p>
        </div>
        <div className="relative">
              <Image src={classImg} alt="image of a lady writing"  className="w-[1266px] h-[801px] md:flex hidden" />
              <Image src={cuttingGirl} alt="image of a lady writing"  className="w-[408px] h-[501px] md:hidden object-cover rounded-[10px] " />
              <button className="border-[1px] border-[#FFF9EB] text-[#FFF9EB] md:text-[89px] text-[29px]/[64px] px-[24px] md:py-[32px] py-[8px] absolute md:top-[60%] top-[60%] md:right-[30%] right-[20%] hover:bg-[#FFF9EB] hover:text-[#201C00] transition ease-in">LEARN NOW</button>
        </div>
    </div>
  )
}

export default Classes;
