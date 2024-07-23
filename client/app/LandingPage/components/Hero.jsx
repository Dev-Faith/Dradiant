'use client'

import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import image1 from "../../DradiantImages/unsplash_tcVH_BwHtrc.png";
import image2 from "../../DradiantImages/unsplash_W0AEh7sp-3E.png";


const Hero = ({setCursorVariant}) => {
    const textEnter = ()=>{setCursorVariant('text')};
    const textLeave = ()=>{setCursorVariant("default")};
  return (
    <div className="flex flex-col items-center justify-center relative mt-[60px] noCursor overflow">
      <div className="relative w-[100%] h-[100%]">
        <p className="text-[16px] absolute w-[162px] top-[5.5rem] left-[123px]">from everyday essentials to travel companions</p>
        <p className="text-[132px] absolute right-[18rem]" onMouseEnter={textEnter} onMouseLeave={textLeave}>HEAL THE WORLD</p>
        <p className="text-[132px] absolute top-[8rem] left-[123px]" onMouseEnter={textEnter} onMouseLeave={textLeave}>WITH QUALITY</p>
        <p className="text-[132px] absolute top-[16rem] left-[123px]" onMouseEnter={textEnter} onMouseLeave={textLeave}>STYLES</p>
        <p className="text-[16px] absolute w-[164px] right-[24rem] top-[12rem]">Confidence is the belief in yourself to achieve your goals</p>
        <Image src={image1} alt="bag" width={328.94} height={412.07} className="absolute right-[8rem] top-[-3.5rem]"/>
        <Image src={image2} alt="bag" width={266} height={472} className="absolute right-[32.5rem] top-[6.5rem]" />
        <button className="absolute px-[12px] py-[24px] bg-[#6A5F11] text-[32px]/[0px] text-[#fff] right-[123px] top-[23rem] flex items-center gap-[10px] hover:text-[#6A5F11] hover:bg-[#FFF9EB] hover:border-2 border-[#6A5F11] w-[261px] justify-center transition ease-in">2024 Collection<FaArrowRightLong/></button>
      </div>
      <div className="separator absolute top-[35rem] text-[#7B7768] flex items-center justify-between w-[100%] px-[123px]">
        <div className="w-[373px] h-[1px] bg-[#7B7768]"></div>
        <p>TRENDS</p>
        <div className="w-[8px] h-[8px] bg-[#7B7768] rounded"></div>
        <p>FUNCTIONAL</p>
        <div className="w-[8px] h-[8px] bg-[#7B7768] rounded"></div>
        <p>VERSATILE</p>
        <div className="w-[373px] h-[1px] bg-[#7B7768]"></div>
      </div>
    </div>
  )
}

export default Hero;
