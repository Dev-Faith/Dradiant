import Image from "next/image";
import { IoIosHeartEmpty,IoHeartSharp } from "react-icons/io";
import {motion as m } from "framer-motion";


export default function Itemscard({name, price, image, desc, liked}){
    return (
        <m.div className="border-[1px] border-[#7B7768] rounded-[20px] min-w-[472px] max-w-[472px] h-[566px] flex flex-col items-center px-[17px] py-[24px] gap-[51px]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
        >
           <div className="image&Liked flex w-full justify-between">
             <Image src = {image} width="267" height="250" className="relative left-[76px] "/>
             <div className="like relative  bg-[#fff] rounded-full size-[55px] border-[1px] border-[#7B7768] flex items-center justify-center"><IoIosHeartEmpty className="size-[39px] text-[#7B7768]"/></div>
           </div>
           <div className="flex flex-col gap-[25px]">
             <div className="desc&name flex flex-col gap-[13px]">
                 <p className="text-[32px] text-[#6A5F11]">{name.toUpperCase()}</p>
                 <p className="text-[28px]/[36px] text-[#1D1C13]">{desc}</p>
             </div>
             <div className="details&Price flex justify-between items-baseline">
                 <p className="underline text-[#426651] text-[32px]">Details</p>
                 <p className="text-[48px] text-[#6A5F11]">₦{price}</p>
             </div>
           </div>
        </m.div>
    )
};