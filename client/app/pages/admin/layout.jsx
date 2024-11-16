
"use client";
import React, {useState} from 'react'
import UseAuth from '@/app/UseAuth';
import {useSelector} from 'react-redux';
import Sidemenu from './sidemenu';
import Mobilemenu from './mobilemenu';
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { defaultProfile } from "../../DradiantImages";
import { MdMenuOpen } from "react-icons/md";
import {motion as m, AnimatePresence} from "framer-motion";
// import Navbar from './navbar';


const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});  // "May 29, 2024"


const layout = ({children}) => {
  UseAuth();
  const user = useSelector((state) => state.auth);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  // console.log(user.user?.user?.firstName);
  return (
    <div className="flex items-center flex h-screen overflow-hidden text-[#1D1B20]">
    <Sidemenu setOpenSideMenu={setOpenSideMenu} openSideMenu={openSideMenu} />
    <AnimatePresence>{openSideMenu && <Mobilemenu setOpenSideMenu={setOpenSideMenu} openSideMenu={openSideMenu} />}</AnimatePresence>
    <div className="w-full h-full flex flex-col">
    <div className="w-full p-[28px] flex flex-col gap-[45px] h-screen overflow-hidden min-h-[130px] max-h-[130px]">
      <div className="top  flex items-center justify-between xl:w-full w-auto ">
        <p className="logo text-[24px] xl:text-[57px] xl:flex hidden xl:w-auto w-[80px]">{`Welcome ${user.user?.user?.firstName!==undefined ?user.user?.user?.firstName:"Admin"}!`}</p>
        <MdMenuOpen onClick={()=>setOpenSideMenu(!openSideMenu)} className="xl:hidden text-[33px]"/>
        <div className="top-middle flex items-center gap-[59px]">
          <div className="separator bg-black w-[24px] h-[2px] xl:flex hidden"></div>
          <p className="time text-center">{`Today - ${formattedDate}`}</p>
        </div>
        <div className="profiles flex items-center xl:min-w-[420px] min-w-[71px]  justify-end xl:justify-between">
          <div className="search size-[71px] rounded-full hidden xl:flex items-center justify-center border-[1px] border-black cursor-pointer">
            <CiSearch className="size-[38px]" />
          </div>
          <div className="notification size-[71px] rounded-full hidden xl:flex items-center justify-center border-[1px] border-black cursor-pointer">
            <IoIosNotificationsOutline className="size-[38px] " />
          </div>
          <div className="profile xl:min-w-[258px] h-[71px] flex items-center justify-between bg-[#EEE8DA] rounded-[50px] xl:pr-[16px]">
            <Image
              src={user.user?.user?.profileImage || defaultProfile}
              alt="profile image"
              width="71"
              height="71"
              className="w-[71px] h-[71px] object-cover rounded-full object-fit"
            />
            <div className="texts hidden xl:flex flex-col">
              <p className="name text-[16px]">{`${user.user?.user?.firstName!==undefined?user.user?.user?.firstName:"Admin"} ${user.user?.user?.lastName!==undefined?user.user?.user?.lastName:""}`}</p>
              <p className="role text-[12px] text-[#81737A]">Executive</p>
            </div>
            <FaChevronDown className="cursor-pointer xl:flex hidden" />
          </div>
        </div>
      </div>
    </div>
      {children}
    </div>
  </div>
  )
}

export default layout;