import React from 'react';
import Image from "next/image";
import {classImg} from "../../DradiantImages/index";

const Classes = () => {
  return (
    <div className="pt-[164px] px-[124px] flex flex-col gap-[98px] ">
       <div className=" top flex  items-center justify-between">
              <p className="text-[#514700] text-[89px]/[64px]">CLASSES</p>
              <p className="w-[844px] text-[#7B7768] text-[28px]">le's a creative canvas for self-expression. It allows you to tell a story through your style that reflecting your personality, interest even mood.</p>
        </div>
        <div className="relative">
              <Image src={classImg} alt="image of a lady writing" width={1266} height={801} />
              <button className="border-[1px] border-[#FFF9EB] text-[#FFF9EB] text-[89px] px-[24px] py-[32px] absolute top-[60%] right-[30%] hover:bg-[#FFF9EB] hover:text-[#201C00] transition ease-in">LEARN NOW</button>
        </div>
    </div>
  )
}

export default Classes;
