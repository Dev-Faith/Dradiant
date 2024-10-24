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


const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPath = usePathname();
  const wishListItems = useSelector(state=>state.wishlist.items);
  const cartItems = useSelector(state=>state.cart.items);

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
            <div className="left xl:flex gap-[32px] text-[16px] hidden">
              {navLinks.map((link) =>
                link.position === "left" ? (
                  <Link href={link.url}>
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
            <div className="right xl:flex gap-[32px] hidden">
              {navLinks.map((link) =>
                link.position === "right" ? (
                  <Link href={link.url} className="relative">
                    {notificationButton(link.url)}
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
          </div>
        )}
    </>
  );
}
export default Layout;
