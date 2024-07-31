'use client'

import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import image1 from "../../DradiantImages/unsplash_tcVH_BwHtrc.png";
import image2 from "../../DradiantImages/unsplash_W0AEh7sp-3E.png";
import Link from "next/link";


const Hero = ({setCursorVariant}) => {
    const textEnter = ()=>{setCursorVariant("text")};
    const textLeave = ()=>{setCursorVariant("default")};

  return (
    <div className=" noCursor flex flex-col items-center justify-start py-[40px] relative w-[100%] xl:flex xl:h-[100vh] h-[90vh] md:h-[65rem] lg:h-[65rem]">
      <div className=" relative xl:w-[1308px] xl:h-[70vh] flex flex-col w-[90%] h-[70vh] md:h-[100vh] lg:h-[60vh] items-center justify-start">
        <p className="text-[16px] xl:text-[16px] md:text-[24px] absolute xl:w-[162px] w-[188px] md:w-[300px] xl:top-[5.5rem] xl:left-[3.5rem] top-[40%] md:top-[60%] lg:top-[50%] right-[8%] md:right-[5%] text-center">from everyday essentials to travel companions</p>
        <p className="xl:text-[132px] text-[32px] xl:absolute xl:right-[14rem] md:text-[89px] " onMouseEnter={textEnter} onMouseLeave={textLeave}>HEAL THE WORLD</p>
        <p className="xl:text-[132px] text-[32px] xl:absolute xl:top-[8rem] xl:left-[4rem] md:text-[89px]" onMouseEnter={textEnter} onMouseLeave={textLeave}>WITH QUALITY</p>
        <p className="xl:text-[132px] text-[32px] xl:absolute xl:top-[16rem] xl:left-[4rem] md:text-[89px]" onMouseEnter={textEnter} onMouseLeave={textLeave}>STYLES</p>
        <p className="text-[16px] md:text-[24px] xl:text-[16px] top-[60%]  right-[33%] md:right-[50%] absolute xl:w-[164px] w-[169px] md:w-[300px] xl:right-[20rem] xl:top-[11rem] md:top-[70%] lg:top-[65%]">Confidence is the belief in yourself to achieve your goals</p>
        <Image src={image1} alt="bag"  className="relative right-[5rem] lg:right-[15rem] top-[-8.5rem] rotate-[-320deg] xl:rotate-0 xl:right-[-25rem]   xl:top-[-3rem] lg:top-[-20rem] xl:w-[328.94px] xl:h-[412.07px] lg:w-[328.94px] lg:h-[412.07px] w-[148.5px] h-[186.02px] object-cover"/>
        <Image src={image2} alt="bag" className="relative xl:right-[-5rem] right-[-5rem] md:right-[-10rem] lg:right-[-15rem] top-[-18rem] lg:top-[-42rem] md:top-[-30rem] xl:top-[-15.8rem] xl:w-[266px] lg:w-[266px] lg:h-[472px] xl:h-[472px] w-[134px] h-[237.77px] object-cover" />
        <Link href="https://bit.ly/ShopfromDradiant" className="absolute top-[80%] lg:top-[80%] md:top-[88%] text-[32px] px-[12px]  py-[24px] rounded-[4px] bg-[#6A5F11] xl:text-[32px]/[0px] text-[#fff] xl:right-[123px] xl:top-[23rem] flex items-center  hover:text-[#6A5F11] hover:bg-[#FFF9EB] hover:border-2 border-[#6A5F11] xl:w-[261px] justify-center transition ease-in"><button className="flex items-center gap-[10px]">2024 Collection<FaArrowRightLong/></button></Link>
      </div>
      <div className="separator  mt-[50px] md:mt-[80px] top-[32rem] xl:top-[35rem]  text-[#7B7768] flex items-center justify-between w-[100%] xl:px-[123px]">
        <div className="xl:w-[373px] lg:w-[200px] w-[60px] h-[1px] bg-[#7B7768]"></div>
        <p className="text-[10px] xl:text-[24px] md:text-[24px]">TRENDS</p>
        <div className="w-[8px] h-[8px] bg-[#7B7768] rounded"></div>
        <p className="text-[10px] xl:text-[24px] md:text-[24px]">FUNCTIONAL</p>
        <div className="w-[8px] h-[8px] bg-[#7B7768] rounded"></div>
        <p className="text-[10px] xl:text-[24px] md:text-[24px]">VERSATILE</p>
        <div className="xl:w-[373px] lg:w-[200px] w-[60px] h-[1px] bg-[#7B7768]"></div>
      </div>
    </div>
  )
}

export default Hero;
