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
    <div className=" md:pt-[147px] pt-[65px] bg-[#201C00] md:h-[1010px] md:mt-[203px] mt-[45px] text-[#FFF9EB] flex flex-col justify-between">
      <div className="top flex md:flex-row flex-col gap-[17px] justify-between md:px-[123px] px-[11px]">
            <div className="left flex flex-col md:gap-[183px] gap-[21px]">
                <div className="top flex flex-col gap-[26px]">
                    <div className="connected flex items-center gap-[15px] w-full">
                        <p className="md:text-[32px]/[40px] text-[22px]">STAY CONNECTED</p>
                        <GoArrowRight className="text-[34px]"/>
                    </div>
                    <p className="md:text-[89px]/[76px] md:w-[629px] text-[33px]/[39px] w-[300px]">Heal the world with quality styles</p>
                    </div>
                    <div className="bottom flex flex-col md:gap-[78px] gap-[42px]">
                    <p className="md:w-[569px] md:text-[32px]/[40px]">Receive our newsletter and discover our stories, collections and packages</p>
                    <div className="flex items-center justify-between md:w-[579px] w-[300px] h-[80px] md:h-[107px] border-[1px] border-[#7B7768] p-[16px] rounded-[8px] style-none md:gap-[20px]">
                        <input className="md:text-[32px] text-[#FFF9EB] border-none bg-[#201C00] appearance-none focus:outline-none w-[100%]" placeholder='Enter your email'/>
                        <button className="bg-[#FFF9EB] md:w-[176px] w-[116px] md:h-[72px] h-[48px] text-[#201C00] md:text-[32px] text-[16px]/[32px] rounded-[8px] hover:bg-[#201C00] hover:text-[#FFF9EB] hover:border-[1px] hover:border-[#FFF9EB] transition ease-in">Subscribe</button>
                    </div>
                    </div>
            </div>
            <div className="righ flex flex-col-reverse md:flex-col md:gap-[139px] gap-[36px] md:items-start items-center">
                  <p className="logo md:text-[40px] md:hidden text-[21px]/[24px] mb-[25px]">DRADIANTBAGS</p> 
                  <div className="top-right flex flex-col gap-[34px]">
                        <p className="md:w-[500px] md:text-[32px]">We offer multiply ways to connect, ensuring you have the most convenient methods for your needs</p>
                        <div className="socials flex md:gap-[38px] gap-[10px]">
                          {
                              socials.map(social => <button className="w-[52px] h-[52px] rounded-[8px] border-[1px] border-[#FFF9EB] text-[#FFF9EB] text-[24px] flex items-center justify-center hover:bg-[#FFF9EB] hover:text-[#201C00] hover:border-[1px] hover:border-[#201C00] transition ease-in">{social.icon}</button>)
                            }
                        </div>
                  </div>
                    <div className="bottom-right w-[100%] md:h-[346px] flex md:gap-[24px]   md:justify-end">
                        <div className="bottom-right-left flex flex-col md:h-[100%] h-[200px] justify-between ">
                            {
                                navLinks.map(nav=> <Link href={nav.url} key={nav.title} className="md:text-[32px] text-[24px] underline text-[#FFF9EB] hover:text-[#C3ECD1] hover:underline transition ease-in">{nav.title}</Link>)
                            }
                        </div>
                        <div className="bottom-right-right">
                          <Image src={footerBag} alt = 'image of a bag held with the hand' height={346} width={277} className="hidden md:flex"/>
                        </div>
                    </div>
    
            </div>
      </div>
      <div className="bottom flex  items-center justify-between border-t-2 border-[#FFF9EB] w-[100%] md:px-[123px] px-[11px] py-[16px]">
        <p className="md:text-[16px] text-[12px]/[16px]">Designed & Developed by Faith Adebayo</p>
        <p className="logo md:text-[40px] hidden md:flex">DRADIANTBAGS</p>
        <p className="md:text-[16px] w-[153px] text-[12px]/[16px]">Checkout my portfolio website @ <Link href="https://muyiwa.dev" className="text-[#C3ECD1] hover:underline transition ease-in">Muyiwa.dev</Link></p>
      </div>
    </div>
  )
}

export default Footer;
