'use client'
import {React, useState} from 'react';
import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosHeartEmpty, IoIosHeart, IoIosCart } from "react-icons/io";
import Link from 'next/link';
import MenuSheet from './Sidemenu';
import { RiMenu3Line } from "react-icons/ri";
import { motion as m, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {useSelector} from "react-redux";
import useAuth from '../UseAuth';
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import {profile} from "../DradiantImages";




export  const Dropdown = ({isDroppeddown})=>{
  return (
    <AnimatePresence>
    <m.div mode="wait"
    initial={{height: 0, opacity: 0}}
    animate={{height: isDroppeddown ? "auto" : 0, opacity: isDroppeddown ? 1 : 0,
    }}
    exit={{height: 0, opacity: 0}}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="dropdown absolute right-[16px] flex flex-col gap-[10px] top-[4rem] bg-[#F9F3E5] rounded-[10px] border-[1px] border-[#CCC6B5] overflow-hidden p-[32px] shadow-md z-40 ">
      <Link href="/pages/profile"> 
        <m.p className="text-[16px] hover:text-[#7B7768] hover:underline hover:text-[#2A4E3A]">Profile</m.p>
      </Link>
      <Link href="/pages/orders">
        <m.p className="text-[16px] hover:text-[#7B7768] hover:underline hover:text-[#2A4E3A]">Orders</m.p>
      </Link>
      <Link href="/pages/logout">
        <m.p className="text-[16px] hover:text-[#7B7768] hover:underline hover:text-[#2A4E3A]">Logout</m.p>
      </Link>
    </m.div>
    </AnimatePresence>
  )
}



const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDroppeddown, setIsDroppeddown] = useState(false);

  const currentPath = usePathname();
  const wishListItems = useSelector(state=>state.wishlist.items);
  const cartItems = useSelector(state=>state.cart.items);
  const {isAuthenticated, user} = useSelector(state=>state?.auth);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path)=>currentPath == path;

  const navLinks = [
    {
      name: "Shop",
      url: "/pages/shop",
      position: "left"
    },
    {
      name: "Classes",
      url: "https://bit.ly/ShopfromDradiant",
      position: "left"
    },
    {
      name: "About",
      url: "https://bit.ly/ShopfromDradiant",
      position: "left"
    },
    {
      name: "Search",
      url: "/pages/search",
      position: "right"
    },
    {
      name: "Cart",
      url: "/pages/cart",
      position: "right"
    },
    {
      name: "Wishlist",
      url: "/pages/wishlist",
      position: "right"
    },
    {
      name: "Sign In",
      url: "/pages/signin",
      position: "right"
    },
    {
      name: "Sign Up",
      url: "/pages/signup",
      position: "right"
    }
  ]

  const navBarVariant = {
    animate: {
      x: 0,
    },
    initial: {
      x: "100vw"
    }
  }

  const isWishList = (url)=>{
    return url == "/pages/wishlist"
  }

  const notificationButton = (url)=>{
      switch (url){
        case "/pages/wishlist" : return <div className={` bg-[#7B7768] rounded-full size-[22px] border-[1px] text-[#fff] items-center justify-center ${wishListItems.length===0 ? "hidden":"flex"} cursor-pointer absolute top-[-15px] right-[-15px] text-[16px]/[0] pt-[4px] align-middle`}>{wishListItems.length}</div>;
        case "/pages/cart": return <div className={` bg-[#7B7768] rounded-full size-[22px] border-[1px] text-[#fff] items-center justify-center ${cartItems.length===0 ? "hidden":"flex"} cursor-pointer absolute top-[-15px] right-[-15px] text-[16px]/[0] pt-[4px] align-middle`}>{cartItems.length}</div>;
        default: return;
      }
  }


  const LoggedInFeatures = ()=>{
    return (
      <div className='flex relative min-w-[240px] justify-end items-center gap-[14px] border-l-[1px] border-dashed border-[#CCC6B5] px-[10px] ml-[25px]'>
        <p className="greetings">Hi, {`${user?.user?.firstName} ${user?.user?.lastName}`}</p>
        <Image src={profile} alt="profile image" width="31" height="31" className="size-[31px] rounded-full object-cover border-[1px] border-[#1D1C13] cursor-pointer"/>
        <m.div animate={{rotate:isDroppeddown ? 180 : 0}} initial={{rotate:0}} exit={{rotate:0}}><FaAngleDown onClick={()=>setIsDroppeddown(!isDroppeddown)} className='cursor-pointer'/></m.div>
        <AnimatePresence>{isDroppeddown && <Dropdown isDroppeddown={isDroppeddown} />}</AnimatePresence>
      </div>
    )
  }
  


  return (
    <>
      {currentPath !== "/pages/signin" &&
        currentPath !== "/pages/signup" &&
        !currentPath.includes("/pages/admin") && (
          <div className="xl:px-[123px] px-[11px] lg:px-[50px] md:px-[50px] py-[24px] flex justify-between items-center border-b-[1px] w-[100%] border-[#7B7768]">
            <Link
              href="/pages/wishlist"
              className=" relative text-[24px] xl:hidden items-start"
            >
              <div
                className={` bg-[#7B7768] rounded-full size-[18px] border-[1px] text-[#fff] items-center justify-center ${
                  wishListItems.length === 0 ? "hidden" : "flex"
                } cursor-pointer absolute top-[-12px] right-[-12px] text-[13px]/[0] pt-[4px] align-middle`}
              >
                {wishListItems.length}
              </div>
              <IoIosHeart />
            </Link>
            <div className="left xl:flex gap-[32px] text-[16px] hidden xl:min-w-[500px]">
              {navLinks.map((link) =>
                link.position === "left" ? (
                  <Link key={link.name} href={link.url}>
                    <m.p
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 1 }}
                      key={link.name}
                      className={`cursor-pointer hover:underline hover:text-[#2A4E3A] ${
                        isActive(link.url) ? " underline text-[#2A4E3A]" : ""
                      }`}
                    >
                      {link.name}
                    </m.p>
                  </Link>
                ) : null
              )}
            </div>
            <div className="flex items-center justify-center w-full">
              <Link href="/">
                <p className="logo text-[22px] text-center cursor-pointer w-full">
                  DRADIANTBAGS
                </p>
              </Link>
            </div>
            <div className="text-[24px] flex items-center w-[86px] justify-between xl:hidden">
              <Link href="/pages/cart" className="relative">
                <div
                  className={` bg-[#7B7768] rounded-full size-[18px] border-[1px] text-[#fff] items-center justify-center ${
                    cartItems.length === 0 ? "hidden" : "flex"
                  } cursor-pointer absolute top-[-12px] right-[-12px] text-[13px]/[0] pt-[4px] align-middle`}
                >
                  {cartItems.length}
                </div>
                {<TiShoppingCart />}
              </Link>
              <RiMenu3Line className="size-[24px]" onClick={toggleMenu} />
              <AnimatePresence>
                {isMenuOpen && (
                  <MenuSheet closeMenu={toggleMenu} isOpen={isMenuOpen} />
                )}
              </AnimatePresence>
            </div>
            <div className="right xl:flex gap-[32px] xl:gap-[0px] xl:w-full xl:justify-end p-0 xl:items-center hidden">
              {navLinks.map((link) =>
                link.position === "right" ? (
                  <Link key={link.name} href={link.url} className="relative">
                    {notificationButton(link.url)}
                    <m.p
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 1 }}
                      key={link.name}
                      className={`cursor-pointer text-center w-full ${ link.url !== "/pages/signup" ?  "hover:underline hover:text-[#2A4E3A]" : null} ${
                        isActive(link.url) ? " underline text-[#2A4E3A]" : ""
                      } xl:mx-[16px] ${link.url == "/pages/signup" ? "bg-[#6A5F11] text-[#fff] rounded-[10px] p-[8px]" : ""} ${(isAuthenticated && link.url == "/pages/signin") | (isAuthenticated && link.url == "/pages/signup") && "hidden"}`}
                    >
                      {link.name}
                    </m.p>
                  </Link>
                ) : null
              )}
              {
                isAuthenticated && <LoggedInFeatures/>
              }
            </div>
          </div>
        )}
    </>
  );
}
export default Layout;
