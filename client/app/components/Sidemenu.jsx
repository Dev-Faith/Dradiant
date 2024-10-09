import { FaArrowTurnDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import {motion as m } from "framer-motion";

const MenuSheet = ({ closeMenu, isOpen}) => {
  const navLinks = [
    {
      title: "Shop",
      url: "https://bit.ly/ShopfromDradiant"
    },
    {
      title: "Cart",
      url: "https://bit.ly/ShopfromDradiant"
    },
    {
      title: "Wishlist",
      url: "https://bit.ly/ShopfromDradiant"
    },
    {
      title: "Classes",
      url: "https://bit.ly/ShopfromDradiant"
    },
    {
      title: "About us",
      url: "https://bit.ly/ShopfromDradiant"
    },
  ]

  const navBarVariant = {
    animate: {
      x: 0,
      transition: {
        stiffness: 5,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
    },
    initial: {
      x: "100vw",
      transition:{
        stiffness: 5
      }
    },
    
  }
  const navItemVariant = {
    animate: {
      x: 0,
    },
    initial: {
      x: "100vw"
    }
  }

  

  return (
    <m.div className={`px-[11px] md:px-[50px] py-[64px] text-[24px] size-[24px] fixed  flex-col w-[100vw] h-[100vh] bg-[#FFF9EB] m-auto inset-0 z-10`}
    variants = {navBarVariant}
    animate = "animate"
    initial = "initial"
    exit = "initial"
    >
      <div className= "top flex justify-between items-center">
        <div className="top-left flex items-center md:gap-[2rem] gap-[1rem]">
          <p className="md:text-[45px]/[52px] text-[32px]">Go to</p>
          <div><FaArrowTurnDown/></div>
        </div>
        <button className=" md:text-[32px] text-[24px] rounded-[8px] top-right md:size-[51px] size-[35px] border-[1px] flex items-center justify-center border-black">
          <RxCross2 onClick={closeMenu}/>
        </button>
      </div>
      <ul className="navlinks w-full h-full flex flex-col items-center justify-center md:text-[45px] text-[32px] underline ">
        {navLinks.map((link)=><Link href={link.url} key={link.title} className=''><m.li  variants={navItemVariant}  whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1 }}>{link.title}</m.li></Link>)}
      </ul>
    </m.div>
  );
};

export default MenuSheet;