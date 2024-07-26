'use client'
import React from 'react'
import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { RiMenu3Line } from "react-icons/ri";


const Layout = () => {

  const navLinks = [
    {
      name: "Shop",
      url: "/shop",
      position: "left"
    },
    {
      name: "Classes",
      url: "/classes",
      position: "left"
    },
    {
      name: "About",
      url: "/about",
      position: "left"
    },
    {
      name: "Search",
      url: "/contact",
      position: "right"
    },
    {
      name: "Cart",
      url: "/cart",
      position: "right"
    },
    {
      name: "Wishlist",
      url: "/wishlist",
      position: "right"
    }
  ]

  return (
    <div className="xl:px-[123px] px-[11px] lg:px-[50px] md:px-[50px] py-[24px] flex justify-between items-center border-b-[1px] w-[100%] border-[#7B7768]">
        <div className='text-[24px] xl:hidden items-start'><IoSearch/></div>
        <div className="left xl:flex gap-[32px] text-[16px] hidden">
        {navLinks.map((link) => (
          link.position === "left" ? <p key={link.name} className="cursor-pointer hover:underline hover:text-[#2A4E3A] ">{link.name}</p> : null
        ))}
          </div>
          <div className="flex items-center w-full">
              <p className="logo text-[22px] text-center w-full">DRADIANTBAGS</p>
          </div>
          <div className="text-[24px] flex items-center w-[86px] justify-between xl:hidden">
            <TiShoppingCart/>
            <RiMenu3Line/>
          </div>
          <div className="right xl:flex gap-[32px] hidden">
        {navLinks.map((link) => (
          link.position === "right" ? <p key={link.name} className="cursor-pointer hover:underline hover:text-[#2A4E3A]">{link.name}</p> : null
        ))}
          </div>
    </div>
  )
}
export default Layout;
