import React from 'react';
import Image from "next/image";
import {classImg, cuttingGirl} from "../../DradiantImages/index";

const Classes = () => {
  return (
    <div className="xl:pt-[164px]  pt-[68px] md:pt-[64px] xl:px-[124px] md:px-[50px] px-[11px] flex flex-col xl:gap-[98px] gap-[21px]">
       <div className=" top flex xl:flex-row flex-col md:flex-row  xl:items-center items-start justify-between md:items-end">
              <p className="text-[#514700] lg:text-[89px]/[64px] text-[41px]/[64px]">CLASSES</p>
              <p className="text-[#7B7768] lg:text-[28px]/[36px] text-[16px]/[24px] w-[300px] xl:w-[844px] md:w-[500px] lg:w-[610px] lg:text-[24px] md:text-[24px] ">le's a creative canvas for self-expression. It allows you to tell a story through your style that reflecting your personality, interest even mood.</p>
        </div>
        <div className="relative md:my-[64px]">
              <Image src={classImg} alt="image of a lady writing"  className="w-[1266px] h-[801px] xl:flex hidden md:flex object-cover rounded-[8px]" />
              <Image src={cuttingGirl} alt="image of a lady writing"  className="w-[408px] h-[501px] xl:hidden object-cover rounded-[10px] md:hidden " />
              <button className="border-[1px] border-[#FFF9EB] text-[#FFF9EB] xl:text-[89px] text-[29px]/[64px] px-[24px] xl:py-[32px] py-[8px] absolute xl:top-[60%] top-[60%] xl:right-[30%] lg:right-[40%] md:right-[15rem] right-[20%] hover:bg-[#FFF9EB] hover:text-[#201C00] transition ease-in">LEARN NOW</button>
        </div>
    </div>
  )
}

export default Classes;
