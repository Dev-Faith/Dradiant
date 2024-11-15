"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import footerBag from "../../DradiantImages/Dradiant_9.png";
import { useSelector } from "react-redux";
import UseAuth from "../../UseAuth";
import { defaultProfile } from "../../DradiantImages";

const Navbar = () => {
  const user = useSelector((state) => state.auth);
  console.log(user);
  const { profileImage, firstName, lastName } = useSelector(
    (state) => state.auth?.user?.user
  );

  return (
    <div className="w-full p-[28px] flex flex-col gap-[45px] h-screen overflow-hidden min-h-[130px] max-h-[130px]">
      <div className="top  flex items-center justify-between w-full">
        <p className="logo text-[57px]">Welcome Dorcas!</p>
        <div className="top-middle flex items-center gap-[59px]">
          <div className="separator bg-black w-[24px] h-[2px] "></div>
          <p className="time">Today - May 29, 2024</p>
        </div>
        <div className="profiles flex items-center min-w-[420px] justify-between">
          <div className="search size-[71px] rounded-full flex items-center justify-center border-[1px] border-black cursor-pointer">
            <CiSearch className="size-[38px]" />
          </div>
          <div className="notification size-[71px] rounded-full flex items-center justify-center border-[1px] border-black cursor-pointer">
            <IoIosNotificationsOutline className="size-[38px] " />
          </div>
          <div className="profile min-w-[258px] h-[71px] flex items-center justify-between bg-[#EEE8DA] rounded-[50px] pr-[16px]">
            <Image
              src={profileImage || defaultProfile}
              alt="profile image"
              width="71"
              height="71"
              className="w-[71px] h-[71px] object-cover rounded-full object-fit"
            />
            <div className="texts ">
              <p className="name text-[16px]">{`${firstName} ${lastName}`}</p>
              <p className="role text-[12px] text-[#81737A]">Executive</p>
            </div>
            <FaChevronDown className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
