import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandFacebook } from "react-icons/tb";
import {footerBag} from "../DradiantImages/index";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const socials = [
        {
            icon:<AiOutlineYoutube/>,
            url: "./"
        },
        {
            icon:<RiTwitterXLine/>,
            url: "./"
        },
        {
            icon:<FaInstagram/>,
            url: "./"
        },
        {
            icon:<FiLinkedin/>,
            url: "./"
        },
        {
            icon:<TbBrandFacebook/>,
            url: "./"
        },
    ];

    const navLinks = [
        {
            title: "Shop",
            url: ""
        }, 
        {
            title: "New Arrival",
            url: ""
        }, 
        {
            title: "Catalogue",
            url: ""
        }, 
        {
            title: "Wishlist",
            url: ""
        }, 
        {
            title: "Classes",
            url: ""
        }, 
    ]

  return (
    <div className=" pt-[147px] bg-[#201C00] h-[1010px] mt-[203px] text-[#FFF9EB] flex flex-col ">
      <div className="top flex justify-between px-[123px]">
            <div className="left flex flex-col gap-[183px]">
                <div className="top flex flex-col gap-[26px]">
                    <div className="connected flex items-center">
                        <p className="text-[32px]/[40px]">STAY CONNECTED</p>
                        <GoArrowRight className="text-[44px]"/>
                    </div>
                    <p className="text-[89px]/[76px] w-[629px]">Heal the world with quality styles</p>
                    </div>
                    <div className="bottom flex flex-col gap-[78px]">
                    <p className="w-[569px] text-[32px]/[40px]">Receive our newsletter and discover our stories, collections and packages</p>
                    <div className="flex items-center justify-between w-[579px] h-[107px] border-[1px] border-[#7B7768] p-[16px] rounded-[8px] style-none gap-[20px]">
                        <input className="text-[32px] text-[#FFF9EB] border-none bg-[#201C00] appearance-none focus:outline-none w-[100%]" placeholder='Enter your email'/>
                        <button className="bg-[#FFF9EB] w-[176px] h-[72px] text-[#201C00] text-[32px] rounded-[8px] hover:bg-[#201C00] hover:text-[#FFF9EB] hover:border-[1px] hover:border-[#FFF9EB] transition ease-in">Subscribe</button>
                    </div>
                    </div>
            </div>
            <div className="righ flex flex-col gap-[139px] items-start">
                  <div className="top-right flex flex-col gap-[34px]">
                        <p className="w-[500px] text-[32px]">We offer multiply ways to connect, ensuring you have the most convenient methods for your needs</p>
                        <div className="socials flex gap-[38px]">
                          {
                              socials.map(social => <button className="w-[52px] h-[52px] rounded-[8px] border-[1px] border-[#FFF9EB] text-[#FFF9EB] text-[24px] flex items-center justify-center">{social.icon}</button>)
                            }
                        </div>
                  </div>
                    <div className="bottom-right w-[100%] h-[346px] flex gap-[24px]  justify-end">
                        <div className="bottom-right-left flex flex-col h-[100%] justify-between">
                            {
                                navLinks.map(nav=> <Link href={nav.url} key={nav.title} className="text-[32px] text-[#FFF9EB] hover:text-[#C3ECD1] hover:underline transition ease-in">{nav.title}</Link>)
                            }
                        </div>
                        <div className="bottom-right-right">
                          <Image src={footerBag} alt = 'image of a bag held with the hand' height={346} width={277}/>
                        </div>
                    </div>
            </div>
      </div>
      <div className="bottom flex mt-[3.4rem] items-center justify-between border-t-2 border-[#FFF9EB] w-[100%] px-[123px] pt-[24px]">
        <p className="text-[16px]">Designed & Developed by Faith Adebayo</p>
        <p className="logo text-[40px]">DRADIANTBAGS</p>
        <p className="text-[16px]">Checkout my portfolio website @ <Link href="https://muyiwa.dev" className="text-[#C3ECD1] hover:underline transition ease-in">Muyiwa.dev</Link></p>
      </div>
    </div>
  )
}

export default Footer;
