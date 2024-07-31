import { FaArrowRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

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
  return (
    <div className={`px-[11px] md:px-[50px] py-[64px] text-[24px] size-[24px] fixed  flex-col w-[100vw] h-[100vh] bg-[#FFF9EB] m-auto inset-0 z-10 ${isOpen ? "flex" : "hidden"}`}>
      <div className= "top flex justify-between items-center">
        <div className="top-left flex items-center md:gap-[2rem] gap-[1rem]  md:text-[45px]/[52px] text-[32px]">
          <p>Go to</p>
          <div><FaArrowRight/></div>
        </div>
        <button className=" md:text-[24px] text-[16px] rounded-[8px] top-right md:size-[51px] size-[32px] border-[1px] flex items-center justify-center border-black">
          <RxCross2 onClick={closeMenu}/>
        </button>
      </div>
      <ul className="navlinks w-full h-full flex flex-col items-center justify-center md:text-[45px] text-[32px] underline ">
        {navLinks.map((link)=><Link href={link.url} key={link.title} className=''><li>{link.title}</li></Link>)}
      </ul>
    </div>
  );
};

export default MenuSheet;