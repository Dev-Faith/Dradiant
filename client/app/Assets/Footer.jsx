import {React, useState} from 'react'
import { GoArrowRight } from "react-icons/go";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandFacebook } from "react-icons/tb";
import {footerBag} from "../DradiantImages/index";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';

const Footer = () => {
    const [subscription, setSubscription] = useState("");

    const handleSub = ()=>{
        subscription.length == 0 ? toast.error("enter email") : toast.success("email noted! ✍️");
    }

    const socials = [
        {
            icon:<RiTwitterXLine/>,
            url: "https://x.com/Eneupapa2000?t=rNvQS7Mp6QJtApBwx3p2RQ&s=09"
        },
        {
            icon:<FaInstagram/>,
            url: "https://bit.ly/DradiantIG"
        },
        {
            icon:<FiLinkedin/>,
            url: "https://www.linkedin.com/in/omada-ajefu-30298227b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            icon:<TbBrandFacebook/>,
            url: "https://www.facebook.com/omadaajefu"
        },
    ];

    const navLinks = [
        {
            title: "Shop",
            url: "https://bit.ly/ShopfromDradiant"
        }, 
        {
            title: "New Arrival",
            url: "https://bit.ly/ShopfromDradiant"
        }, 
        {
            title: "Catalogue",
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
    ]

  return (
    <div className=" xl:pt-[147px] pt-[65px] bg-[#201C00] xl:h-[1010px] xl:mt-[203px] mt-[45px] text-[#FFF9EB] flex flex-col justify-between">
      <div className="top flex xl:flex-row flex-col gap-[17px] justify-between 2xl:px-[123px] md:px-[50px] lg:px-[50px] px-[11px]">
            <div className="left flex flex-col xl:gap-[183px] gap-[21px]">
                <div className="top flex flex-col gap-[26px]">
                    <div className="connected flex items-center gap-[15px] w-full">
                        <p className="xl:text-[32px]/[40px] text-[22px]">STAY CONNECTED</p>
                        <GoArrowRight className="text-[34px]"/>
                    </div>
                    <p className="xl:text-[89px]/[76px] xl:w-[629px] text-[33px]/[39px] w-[300px]">Heal the world with quality styles</p>
                    </div>
                    <div className="bottom flex flex-col xl:gap-[78px] gap-[42px]">
                    <p className="xl:w-[569px] xl:text-[32px]/[40px]">Receive our newsletter and discover our stories, collections and packages</p>
                    <div className="flex items-center justify-between xl:w-[579px] w-[300px] h-[80px] xl:h-[107px] border-[1px] border-[#7B7768] p-[16px] rounded-[8px] style-none xl:gap-[20px]">
                        <input value={subscription} onChange={e=>setSubscription(e.target.value)} className="xl:text-[32px] text-[#FFF9EB] border-none bg-[#201C00] appearance-none focus:outline-none w-[100%]" placeholder='Enter your email'/>
                        <button onClick={handleSub}  className="bg-[#FFF9EB] xl:w-[176px] w-[116px] xl:h-[72px] h-[48px] text-[#201C00] xl:text-[32px] text-[16px]/[32px] rounded-[8px] hover:bg-[#201C00] hover:text-[#FFF9EB] hover:border-[1px] hover:border-[#FFF9EB] transition ease-in">Subscribe</button>
                    </div>
                    </div>
            </div>
            <div className="righ flex flex-col-reverse xl:flex-col xl:gap-[139px] gap-[36px] xl:items-start items-center">
                  <p className="logo xl:text-[40px] xl:hidden text-[21px]/[24px] mb-[25px]">DRADIANTBAGS</p> 
                  <div className="top-right flex flex-col gap-[34px]">
                        <p className="xl:w-[500px] xl:text-[32px]">We offer multiply ways to connect, ensuring you have the most convenient methods for your needs</p>
                        <div className="socials flex  gap-[10px] xl:w-[432px] items-start xl:justify-start xl:gap-[38px] justify-between w-[100%]">
                          {
                              socials.map(social => <Link href={social.url}><button className="w-[52px] h-[52px] rounded-[8px] border-[1px] border-[#FFF9EB] text-[#FFF9EB] text-[24px] flex items-center justify-center hover:bg-[#FFF9EB] hover:text-[#201C00] hover:border-[1px] hover:border-[#201C00] transition ease-in">{social.icon}</button></Link>)
                            }
                        </div>
                  </div>
                    <div className="bottom-right w-[100%] xl:h-[346px] flex xl:gap-[24px]   xl:justify-end">
                        <div className="bottom-right-left flex flex-col xl:h-[100%] h-[200px] justify-between  ">
                            {
                                navLinks.map(nav=> <Link href={nav.url} key={nav.title} className="xl:text-[32px] text-[24px] underline text-[#FFF9EB] hover:text-[#C3ECD1] hover:underline transition ease-in">{nav.title}</Link>)
                            }
                        </div>
                        <div className="bottom-right-right">
                          <Image src={footerBag} alt = 'image of a bag held with the hand' className="hidden xl:flex h-[346px] w-[277px] object-cover" />
                        </div>
                    </div>
    
            </div>
      </div>
      <div className="bottom flex  items-center justify-between border-t-2 border-[#FFF9EB] w-[100%] 2xl:px-[123px] px-[11px] md:px-[50px] lg:px-[50px] py-[16px]">
        <p className="xl:text-[16px] text-[12px]/[16px]">Designed & Developed by Faith Adebayo</p>
        <p className="logo xl:text-[40px] hidden xl:flex">DRADIANTBAGS</p>
        <p className="xl:text-[16px] w-[153px] text-[12px]/[16px]">Checkout my portfolio website @ <Link href="https://muyiwa.dev" className="text-[#C3ECD1] hover:underline transition ease-in">Muyiwa.dev</Link></p>
      </div>
    </div>
  )
}

export default Footer;
