'use client'
import React from 'react'

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
    <div className="px-[123px] py-[24px] flex justify-between items-center border-b-[1px] border-[#7B7768]">
        <div className="left md:flex gap-[32px] text-[16px] hidden">
        {navLinks.map((link) => (
          link.position === "left" ? <p key={link.name} className="cursor-pointer hover:underline hover:text-[#2A4E3A] ">{link.name}</p> : null
        ))}
          </div>
          <div className="flex items-center w-full">
              <p className="logo text-[22px]">DRADIANTBAGS</p>
          </div>
          <div className="right md:flex gap-[32px] hidden">
        {navLinks.map((link) => (
          link.position === "right" ? <p key={link.name} className="cursor-pointer hover:underline hover:text-[#2A4E3A]">{link.name}</p> : null
        ))}
          </div>
    </div>
  )
}
export default Layout;
