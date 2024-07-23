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
        <div className="left flex gap-[32px] text-[16px]">
        {navLinks.map((link) => (
          link.position === "left" ? <p key={link.name} className="cursor-pointer">{link.name}</p> : null
        ))}
          </div>
          <div>
              <p className="logo text-[40px]">DRADIANTBAGS</p>
          </div>
          <div className="right flex gap-[32px]">
        {navLinks.map((link) => (
          link.position === "right" ? <p key={link.name} className="cursor-pointer">{link.name}</p> : null
        ))}
          </div>
    </div>
  )
}

export default Layout;
