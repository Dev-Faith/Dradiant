'use client'
import {React, useState} from 'react';
import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import Link from 'next/link';
import MenuSheet from './Sidemenu';
import { RiMenu3Line } from "react-icons/ri";
import { motion as m, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";


const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const currentPath = router.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      url: "https://bit.ly/ShopfromDradiant",
      position: "right"
    },
    {
      name: "Wishlist",
      url: "https://bit.ly/ShopfromDradiant",
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

  return (
    <div className="xl:px-[123px] px-[11px] lg:px-[50px] md:px-[50px] py-[24px] flex justify-between items-center border-b-[1px] w-[100%] border-[#7B7768]">
      <div className="text-[24px] xl:hidden items-start">
        <IoSearch />
      </div>
      <div className="left xl:flex gap-[32px] text-[16px] hidden">
        {navLinks.map((link) =>
          link.position === "left" ? (
            <Link href={link.url}>
              <m.p
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1 }}
                key={link.name}
                className="cursor-pointer hover:underline hover:text-[#2A4E3A] "
              >
                {link.name}
              </m.p>
            </Link>
          ) : null
        )}
      </div>
      <div className="flex items-center justify-center w-full">
        <Link href="/" ><p className="logo text-[22px] text-center cursor-pointer w-full">DRADIANTBAGS</p></Link>
      </div>
      <div className="text-[24px] flex items-center w-[86px] justify-between xl:hidden">
        <Link href="https://bit.ly/ShopfromDradiant">
          <TiShoppingCart />
        </Link>
        <RiMenu3Line className="size-[24px]" onClick={toggleMenu} />
        <AnimatePresence>{isMenuOpen && <MenuSheet closeMenu={toggleMenu} isOpen={isMenuOpen} />}</AnimatePresence>
      </div>
      <div className="right xl:flex gap-[32px] hidden">
        {navLinks.map((link) =>
          link.position === "right" ? (
            <Link href={link.url}>
              <m.p
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1 }}
                key={link.name}
                className="cursor-pointer hover:underline hover:text-[#2A4E3A]"
              >
                {link.name}
              </m.p>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
}
export default Layout;
