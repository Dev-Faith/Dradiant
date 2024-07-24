'use client'

import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import image1 from "../../DradiantImages/unsplash_tcVH_BwHtrc.png";
import image2 from "../../DradiantImages/unsplash_W0AEh7sp-3E.png";


const Hero = ({setCursorVariant}) => {
    const textEnter = ()=>{setCursorVariant("text")};
    const textLeave = ()=>{setCursorVariant("default")};

  return (
    <div className=" noCursor flex flex-col items-center justify-center relative mt-[60px] overflow w-[100%]">
      <div className="relative w-[100%] h-[100%] flex flex-col items-center">
        <p className="text-[16px] absolute md:w-[162px] w-[188px] md:top-[5.5rem] md:left-[123px] top-[13rem] right-[-.2rem] text-center">from everyday essentials to travel companions</p>
        <p className="md:text-[132px] text-[32px] md:absolute md:right-[18rem] " onMouseEnter={textEnter} onMouseLeave={textLeave}>HEAL THE WORLD</p>
        <p className="md:text-[132px] text-[32px] md:absolute md:top-[8rem] md:left-[123px]" onMouseEnter={textEnter} onMouseLeave={textLeave}>WITH QUALITY</p>
        <p className="md:text-[132px] text-[32px] md:absolute md:top-[16rem] md:left-[123px]" onMouseEnter={textEnter} onMouseLeave={textLeave}>STYLES</p>
        <p className="text-[16px] top-[16rem] right-[8.5rem] absolute md:w-[164px] w-[169px] md:right-[26rem] md:top-[11rem]">Confidence is the belief in yourself to achieve your goals</p>
        <Image src={image1} alt="bag"  className="absolute right-[11rem] top-[-.1rem] rotate-[-320deg] md:right-[8rem] md:top-[-3rem] md:w-[328.94px] md:h-[412.07px] w-[148.5px] h-[186.02px] object-cover"/>
        <Image src={image2} alt="bag" className="absolute md:right-[32.5rem] right-[4px] top-[-1rem] md:top-[4rem] md:w-[266px] md:h-[472px] w-[134px] h-[237.77px] object-cover" />
        <button className="absolute top-[22rem] text-[32px] px-[12px]  py-[24px] rounded-[4px] bg-[#6A5F11] md:text-[32px]/[0px] text-[#fff] md:right-[123px] md:top-[23rem] flex items-center gap-[10px] hover:text-[#6A5F11] hover:bg-[#FFF9EB] hover:border-2 border-[#6A5F11] md:w-[261px] justify-center transition ease-in">2024 Collection<FaArrowRightLong/></button>
      </div>
      <div className="separator absolute top-[32rem] md:top-[35rem] text-[#7B7768] flex items-center justify-between w-[100%] md:px-[123px] p">
        <div className="md:w-[373px] w-[60px] h-[1px] bg-[#7B7768]"></div>
        <p className="text-[10px] md:text-[24px]">TRENDS</p>
        <div className="w-[8px] h-[8px] bg-[#7B7768] rounded"></div>
        <p className="text-[10px] md:text-[24px]">FUNCTIONAL</p>
        <div className="w-[8px] h-[8px] bg-[#7B7768] rounded"></div>
        <p className="text-[10px] md:text-[24px]">VERSATILE</p>
        <div className="md:w-[373px] w-[60px] h-[1px] bg-[#7B7768]"></div>
      </div>
    </div>
  )
}

export default Hero;
